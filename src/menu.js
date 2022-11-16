import brusc from './Bruschetta.jpg';

const menuPage = function() {

    const menuHeader = document.createElement('h1');
    menuHeader.innerHTML = "Menu";

    menuHeader.append(menuContainer);

    const menuContainer = document.createElement('div');
    menuContainer.id = "menuCon";

    const brunchContainer = document.createElement('div'); //append brunch items to this
    brunchContainer.id = "brunchCon";

    menuContainer.append(brunchContainer);

    const brunchHeader = document.createElement('div');
    brunchHeader.innerHTML = "Breakfast and Brunch items";
    brunchContainer.append(brunchHeader);

    const brunchItem1 = document.createElement('div');
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







    return menuHeader;
}