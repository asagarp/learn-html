document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".text");
    const imageElement = document.querySelector(".image");

    function isOverlapping(el1, el2) {
        const rect1 = el1.getBoundingClientRect();
        const rect2 = el2.getBoundingClientRect();

        return !(
            rect1.top > rect2.bottom ||
            rect1.bottom < rect2.top ||
            rect1.right < rect2.left ||
            rect1.left > rect2.right
        );
    }

    function checkOverlap() {
        if (isOverlapping(textElement, imageElement)) {
            textElement.classList.add("transparent");
        } else {
            textElement.classList.remove("transparent");
        }
    }

    window.addEventListener("resize", checkOverlap);
    window.addEventListener("scroll", checkOverlap);
    checkOverlap();
});
