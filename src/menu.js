

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
    const item1 = document.createElement('p');
    item1.classList.add('menuItemText');

}