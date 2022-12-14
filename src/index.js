import './style.css';
import {pageElements, pageTabs} from './pageContent';
import {menuPage} from './menu';
import {contactPage} from './contact';
import {footerContent} from './footer';

const content = document.querySelector('#content');

content.append(pageTabs(), pageElements(), footerContent());

const menuPageLoad = () => {

    const header = document.querySelector('#homePage');
    const contactPageHeader = document.querySelector('#contactPageHeader');
    const menuHeader = document.querySelector('#menuPageHeader');
    const footer = document.querySelector('#botline');

    if (typeof(header) != 'undefined' && header != null) {
        waitHideHomePage();
        setTimeout(() => {header.remove()}, 800);
        footer.remove();
    } else if (typeof(contactPageHeader) != 'undefined' && contactPageHeader != null) {
        waitHideContactPage();
        setTimeout(() => {contactPageHeader.remove()}, 800);
        footer.remove();
    }
    
    if (menuHeader == null) {
        content.append(menuPage(), footerContent());
        const menuHeader = document.querySelector('#menuPageHeader');
        menuHeader.style.opacity = '0';
        setTimeout(() => {menuHeader.style.opacity = '1'}, 700);
    }
}

const homePageLoad = () => {

    const header = document.querySelector('#homePage');
    const menuHeader = document.querySelector('#menuPageHeader');
    const contactPageHeader = document.querySelector('#contactPageHeader');
    const footer = document.querySelector('#botline');

    if (typeof(menuHeader) != 'undefined' && menuHeader != null) {
        waitHideMenuPage();
        setTimeout(()=> {menuHeader.remove()}, 800);
        footer.remove();
    } else if (typeof(contactPageHeader) != 'undefined' && contactPageHeader != null) {
        waitHideContactPage();
        setTimeout(() => {contactPageHeader.remove()}, 800);
        footer.remove();
    }

    if (header == null) {
        content.append(pageElements(), footerContent());
        const header = document.querySelector('#homePage');
        header.style.opacity = '0';
        setTimeout(() => {header.style.opacity = '1'}, 700);
    }
}

const contactPageLoad = () => {

    const header = document.querySelector('#homePage');
    const menuHeader = document.querySelector('#menuPageHeader');
    const contactPageHeader = document.querySelector('#contactPageHeader');
    const footer = document.querySelector('#botline');

    if(typeof(header) != 'undefined' && header != null) {
        waitHideHomePage();
        setTimeout(() => {header.remove()}, 800);
        footer.remove();
    } else if (typeof(menuHeader) != 'undefined' && menuHeader != null) {
        waitHideMenuPage();
        setTimeout(()=> {menuHeader.remove()}, 800);
        footer.remove();
    }
    
    if (contactPageHeader == null) {
        content.append(contactPage(), footerContent());
        const contactPageHeader = document.querySelector('#contactPageHeader');
        contactPageHeader.style.opacity = '0';
        setTimeout(() => {contactPageHeader.style.opacity = '1'}, 700);
    }
}

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', homePageLoad)

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', menuPageLoad);

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', contactPageLoad);

function waitHideHomePage() {
    var obj = document.getElementById('homePage');
    obj.style.opacity = '0';
    setTimeout(() => {
        obj.style.display = 'none';
    }, 500);
}

function waitHideContactPage() {
    var obj = document.getElementById('contactPageHeader');
    obj.style.opacity = '0';
    setTimeout(() => {
        obj.style.display = 'none';
    }, 500);
}

function waitHideMenuPage() {
    var obj = document.getElementById('menuPageHeader');
    obj.style.opacity = '0';
    setTimeout(() => {
        obj.style.display = 'none';
    }, 500);
}