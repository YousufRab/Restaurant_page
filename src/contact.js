export const contactPage = () => {

    const contactHeader = document.createElement('div');
    contactHeader.innerHTML = "Contact";
    contactHeader.id = 'contactPageHeader';

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contactCon';

    contactHeader.append(contactContainer);

    const hours = document.createElement('p');
    hours.innerHTML = '9am - 10pm everyday';

    const email = document.createElement('p');
    email.innerHTML = 'info@Sono.ca';


    return contactHeader;

}