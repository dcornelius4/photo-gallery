import imageTemplate from './make-image.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = imageTemplate(image);
    imageList.appendChild(dom);
});