/*Color-Bleed/Chromatic-Aberration/Glitch Effect*/
const textElement = document.querySelector('.html');
document.addEventListener('mousemove', (event) => {
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 20;
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 20;

    textElement.style.textShadow = `${offsetX}px ${offsetY}px 0px red, ${-offsetX}px ${-offsetY}px 0px blue`;
    }
)

/*Scroll-Driven Transition*/
const timeline = new ScrollTimeline({
    source: document.documentElement,
    axis: "block"
})