const observedElements = document.querySelectorAll(".initial-header-space");

const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    // document.querySelector("header").style.backgroundColor = "blue";

    entries.forEach((entry) => {
        document
            .querySelector("header")
            .classList.toggle("color-after-scrolling", !entry.isIntersecting);
    });
});

observedElements.forEach((el) => {
    observer.observe(el, options);
});
