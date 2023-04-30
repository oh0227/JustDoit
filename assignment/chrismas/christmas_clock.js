const text = document.querySelector("h2");

function getClock(){
    const christmas = new Date("2023-12-25");
    const date = new Date();
    const diff = christmas - date;

    const day = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2,"0");
    const minute = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2,"0");
    const second = String(Math.floor((diff / (1000)) % 60)).padStart(2,"0");



    text.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

getClock();
setInterval(getClock, 1000);