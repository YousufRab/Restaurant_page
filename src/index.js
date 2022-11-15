import './style.css';
import {pageElements, pageTabs} from './pageContent';

const content = document.querySelector('#content');

content.append(pageTabs(), pageElements());

const menuPageLoad = () => {

}

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', )