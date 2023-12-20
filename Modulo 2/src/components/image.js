import Bender from '../assets/imgs/bender.jpg';
export default class Image{
    insertBlobImage(){
        const img = document.createElement('img')
        img.src = Bender;
        img.width = 200;
        document.querySelector('body').appendChild(img);
    }
}