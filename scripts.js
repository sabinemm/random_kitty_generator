const numItemsToGenerate = 1; //how many gallery items you want on the screen
const numImagesAvailable = 545; //how many total images are in the collection you are pulling from
const imageWidth = 500; //your desired image width in pixels
const imageHeight = 500; //desired image height in pixels
const collectionID = 1494900; //the collection ID from the original url
function renderGalleryItem(randomNumber) {
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
        .then((response) => {
            let galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
      <img class="gallery-image" src="${response.url}" alt="gallery image"/>
    `
            document.body.appendChild(galleryItem);
        })
}
for (let i = 0; i < numItemsToGenerate; i++) {
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);
}

//setInterval(renderGalleryItem, 2000);

