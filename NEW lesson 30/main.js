const imagesContainer = document.querySelector(".images-container");
const inputField = document.querySelector(".input-text");
const spinner = document.querySelector(".spinner-border");
const errorPopup = document.querySelector(".alert-danger");

const showErrorPopup = (errorMessage) => {
    errorPopup.classList.remove("hidden");
    errorPopup.innerText = errorMessage;
};

const hidenErrorPopup = () => errorPopup.classList.add("hidden");
const showSpinner = () => errorPopup.classList.remove("hidden");
const hidenSpinner = () => errorPopup.classList.add("hidden");

const validateSearch = (status) => {
    if (status >= 400 && status < 499) {
        throw new Error("Bad request. Please try again");
    } else if (status >= 500 && status <= 599) {
        throw new Error("Server error. Please try again");
    } else {
        throw new Error("Something went wrong. Please try again");
    }
};

const debounce = (callback, delay = 1000) => {
    let timeout;
    return (query) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(query);
        }, delay);
    };
};

const fetchImages = () => {
    let page = 1;
    return async (query, resultPerQuery = 10) => {
        try {
            const response = await fetch(
                `https://pixabay.com/api/?key=30549815-6f5c8e0f6a9f3b8f6f9a8c9a6&q=${query}&image_type=photo&per_page=${resultPerQuery}&page=${page}`
            );
            page++;
            if (response.ok) {
                return await response.json();
            } else {
                validateSearch(response.status);
            }
        } catch (error) {
            showErrorPopup(error.message);
        }
    };
};

const getImagesContent = fetchImages();

const renderImages = debounce(async (query) => {
    const images = await getImagesContent(query, 20);
    if (query === "") {
        hidenErrorPopup();
        hidenSpinner();
        return;
    }

    if (!images) {
        hiddenSpinner();
        return;
    }

    if (images.hits?.length) {
        imagesContainer.innerHTML = "No images found";
        hidenErrorPopup();
        hidenSpinner();
        return;
    }
})

inputField.addEventListener("input", (event) => {
    showSpinner();
    imagesContainer.innerHTML = null;
    renderImages(event.target.value);
});

window.addEventListener("scroll", () => {
    const viewportHeight = document.documentElement.clientHeight;
    const scrolledy = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (Math.ceil(scrolledy + viewportHeight) >= pageHeight) {
        showSpinner();
        renderImages(inputField.value);
    }
});