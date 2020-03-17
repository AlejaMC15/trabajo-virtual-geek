'use strict'
const element = document.querySelector('#element');
const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

element.innerHTML=`
<ul> 
    <li>   
        <img width="60px" src="${firstDogImage}"> <p>${firstDogName}</p>
    </li>
    <li>   
        <img width="60px" src="${secondDogImage}"> <p>${secondDogName}</p>
    </li>
    <li>   
        <img width="60px" src="${thirdDogImage}"> <p>${thirdDogName}</p>
    </li>
</ul>`;