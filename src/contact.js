export const contactPage = () => {

    const contactHeader = document.createElement('h1');
    contactHeader.innerHTML = "Contact";
    contactHeader.id = 'contactPageHeader';

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contactCon';

    contactHeader.append(contactContainer);

    const hours = document.createElement('p');
    hours.innerHTML = '9am - 10pm everyday';
    contactContainer.append(hours);

    const email = document.createElement('p');
    email.innerHTML = 'info@Sono.com';
    contactContainer.append(email);


    return contactHeader;

}