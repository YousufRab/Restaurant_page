import brusc from './Bruschetta.jpg';

export const menuPage = function() {

    const menuHeader = document.createElement('h1');
    menuHeader.innerHTML = "Menu";

    const menuContainer = document.createElement('div');
    menuContainer.id = "menuCon";

    const brunchContainer = document.createElement('div'); //append brunch items to this
    brunchContainer.id = "brunchCon";

    menuHeader.append(menuContainer);
    menuContainer.append(brunchContainer);

    const brunchHeader = document.createElement('div');
    brunchHeader.innerHTML = "Breakfast and Brunch items";
    brunchHeader.id = "brunchHeader"
    brunchContainer.append(brunchHeader);

    const brunchItem1 = document.createElement('div');
    brunchItem1.classList.add('menuItemDiv');
    const item1Name = document.createElement('div');
    item1Name.innerHTML = "Bruschetta";
    item1Name.classList.add('menuItemName');
    const item1Img = new Image();
    item1Img.src = brusc;
    item1Img.classList.add('menuImage');
    const item1 = document.createElement('p');
    item1.classList.add('menuItemText');
    item1.innerHTML = "Marinated cherry tomatoes, black olives, mozzarella and olive oil on toasted baguette slices";
    brunchItem1.append(item1Name, item1Img, item1);

    const brunchItem2 = document.createElement('div');
    brunchItem2.classList.add('menuItemDiv');
    const item2Name = document.createElement('div');

    brunchContainer.append(brunchItem1);







    return menuHeader;
}