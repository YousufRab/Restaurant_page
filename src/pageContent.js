import shPic from './shakshouka.jpeg';

export const pageElements = function () {
    const contentDiv = document.querySelector('#content');

    const header = document.createElement('h1');
    header.innerHTML = "Sono in Calabria Bistro";

    const restText = document.createElement('p');
    restText.innerHTML = "Come and join us at your local brunch house with a delicious new menu designed by our world class head chef, Vincenzo D'Agostini";

    const foodPic = new Image();
    foodPic.src = shPic;
    foodPic.classList.add('foodImg');

    header.append(restText, foodPic);

    contentDiv.appendChild(header);
    
    return contentDiv;
}
