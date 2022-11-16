import './style.css';
import {pageElements, pageTabs} from './pageContent';
import {menuPage} from './menu';

const content = document.querySelector('#content');

content.append(pageTabs(), pageElements());

const menuPageLoad = () => {

    const header = document.querySelector('#homePage');
    header.remove();
    
    content.append(menuPage());

}

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', menuPageLoad);