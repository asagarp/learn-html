const { JSDOM } = require('jsdom');

// Simulate a basic HTML document
const dom = new JSDOM(`<!DOCTYPE html><html><body>
    <div id="element1" style="position: absolute; left: 50px; top: 50px;"></div>
    <div id="element2" style="position: absolute; left: 100px; top: 100px;"></div>
</body></html>`);
const { document } = dom.window;

function isOverlapping(element1, element2) {
    if (!element1 || !element2) {
        throw new Error('Both elements must be defined');
    }

    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}

function checkOverlap() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');

    if (!element1 || !element2) {
        console.error('One or both elements are null');
        return;
    }

    console.log(isOverlapping(element1, element2));
}

document.addEventListener("DOMContentLoaded", function() {
    checkOverlap();
});

// Simulate DOMContentLoaded event
const event = new dom.window.Event('DOMContentLoaded');
document.dispatchEvent(event);
