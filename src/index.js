import './style.css';
import {pageElements, pageTabs} from './pageContent';
import {menuPage} from './menu';
import { contactPage } from './contact';

const content = document.querySelector('#content');

content.append(pageTabs(), pageElements());

const menuPageLoad = () => {

    const header = document.querySelector('#homePage');
    header.remove();
    
    content.append(menuPage());

}

const homePageLoad = () => {

    const menuHeader = document.querySelector('#menuPageHeader');
    menuHeader.remove();

    content.append(pageElements());
}

const contactPageLoad = () => {

    const header = document.querySelector('#homePage');
    const menuHeader = document.querySelector('#menuPageHeader');
    header.remove();
    menuHeader.remove();

    content.append(contactPageLoad());
}

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', homePageLoad)

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', menuPageLoad);

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', contactPageLoad);