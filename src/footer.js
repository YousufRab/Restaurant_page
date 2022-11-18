import gitlogo from './github-logo.png';

export const footerContent = () => {

    const footer = document.createElement('footer');
    footer.id = 'botline';
    footer.innerHTML = "Copyright © 2022";

    const gitLogo = new Image();
    gitLogo.src = gitlogo;
    gitLogo.id = 'gitImg';

    const gitLink = document.createElement('a');
    gitLink.innerHTML = "YousufRab"
    gitLink.href = 'https://github.com/YousufRab';

    gitLink.append(gitLogo);
    footer.append(gitLink);

    return footer;
}