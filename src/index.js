import './style.css';
import {pageElements, pageTabs} from './pageContent';

const content = document.querySelector('#content');

content.append(pageTabs(), pageElements());

console.log("I am up and running!");