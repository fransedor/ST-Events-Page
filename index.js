const eventList = document.querySelector(".events-list");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const fontSize = vw/85.375;

document.addEventListener("DOMContentLoaded", () => {
    eventList.innerHTML = "";
    events.forEach(event => {
        eventPreview = document.createElement('div');
        eventPreview.classList.add('events-preview');
        eventPreview.innerHTML = `
        <img src=${event.poster}></img>
        <p>Learn More</p>`;
        eventList.appendChild(eventPreview);
    })
    // document.body.style.fontSize = `${fontSize}px`;
})