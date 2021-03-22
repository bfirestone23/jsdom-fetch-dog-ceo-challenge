console.log('%c HI', 'color: firebrick')

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => renderImages(images));
};