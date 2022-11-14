import './style.css';
import {pageElements} from './pageContent';

const content = document.querySelector('#content');
content.appendChild(pageElements());
console.log("I am up and running!");