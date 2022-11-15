import shPic from './shakshouka.jpeg';

export const pageElements = function () {

    const header = document.createElement('h1');
    header.innerHTML = "Sono in Calabria Bistro";

    const restText = document.createElement('p');
    restText.innerHTML = "Come and join us at your fully-licensed local brunch house with a delicious new menu designed by our world class head chef Vincenzo D'Agostini";

    const restInfo = document.createElement('p');
    restInfo.innerHTML = "Open 7 days a week, 9am to 10pm. 125 Granville Street, Vancouver"

    const foodPic = new Image();
    foodPic.src = shPic;
    foodPic.classList.add('foodImg');

    header.append(restText, restInfo, foodPic);

  
    
    return header;
}

export const pageTabs = function () {
    
    const tabHolder = document.createElement('div');
    tabHolder.classList.add('tabContainer');
    
    const homeBtn = document.createElement('div');
    homeBtn.classList.add('home');
    homeBtn.innerHTML = "Home |";

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menu');
    menuBtn.innerHTML = "Menu |";

    const contactBtn = document.createElement('div');
    contactBtn.classList.add('contact');
    contactBtn.innerHTML = "Contact";
    
    tabHolder.append(homeBtn, menuBtn, contactBtn);

    return tabHolder;
}