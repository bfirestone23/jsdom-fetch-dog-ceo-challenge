console.log('%c HI', 'color: firebrick')

const parseImages = (dogs) => {
    const container = document.getElementById('dog-image-container')
    dogs.message.forEach(dog => {
        const img = document.createElement('img')
        img.src = dog;
        img.innerText = dog;
        container.appendChild(img);
    });
};

const loadImages = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(result => parseImages(result));
};

const parseBreeds = (results) => {
    breeds = Object.keys(results.message)
    updateBreedList(breeds);
    dropdownListener();
};

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
}

function updateBreedList(breeds) {
    const breedsUl = document.getElementById('dog-breeds')
    removeChildren(breedsUl);
    breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

const loadBreeds = () => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => parseBreeds(result));
};

document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    loadBreeds();
})

const changeColor = (e) => {
    e.target.style.color = 'red';
}

function dropdownListener() {
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', (e) => {
        filterBreeds(e.target.value)
    })
}

function filterBreeds(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}