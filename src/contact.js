export const contactPage = () => {

    const contactHeader = document.createElement('h1');
    contactHeader.innerHTML = "Contact";
    contactHeader.id = 'contactPageHeader';

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contactCon';

    contactHeader.append(contactContainer);

    const hours = document.createElement('p');
    hours.innerHTML = 'Open 9am - 10pm everyday';
    contactContainer.append(hours);

    const email = document.createElement('p');
    email.innerHTML = 'info@Sono.com';
    contactContainer.append(email);

    const telephone = document.createElement('p');
    telephone.innerHTML = '+1 (604) 4799 5511';
    contactContainer.append(telephone);

    


    return contactHeader;

}