const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const containerEl = document.getElementById('container');

const titleEl = document.getElementById('title-el');

titleEl.textContent = 'Brooklyn Agency';

function renderImage(){
    let getImage = ''
    for(let i = 0; i < imgs.length; i++){
        getImage += `
        <img class="team-img" src="${imgs[i]}" alt="Profile Picture">
        `
    }
    containerEl.innerHTML = getImage;
}

renderImage();
