import brusc from './Bruschetta.jpg';
import ricPan from './RicPancakes.jpg';
import frit from './frittata.jpg';
import frToast from './FrenchToast.jpg';
import cann from './Cannoli.jpg';
import quiche from './quiche.jpg';

export const menuPage = function() {

    const menuHeader = document.createElement('h1');
    menuHeader.innerHTML = "Menu";
    menuHeader.id = 'menuPageHeader';

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
    item2Name.innerHTML = "Sono pancakes";
    item2Name.classList.add('menuItemName');
    const item2Img = new Image();
    item2Img.src = ricPan;
    item2Img.classList.add('menuImage');
    const item2 = document.createElement('p');
    item2.classList.add('menuItemText');
    item2.innerHTML = "Fluffy home made ricotta pancakes, cinnamon and blueberries"
    brunchItem2.append(item2Name, item2Img, item2);

    const brunchItem3 = document.createElement('div');
    brunchItem3.classList.add('menuItemDiv');
    const item3Name = document.createElement('div');
    item3Name.innerHTML = "Frittata";
    item3Name.classList.add('menuItemName');
    const item3Img = new Image();
    item3Img.src = frit;
    item3Img.classList.add('menuImage');
    const item3 = document.createElement('p');
    item3.classList.add('menuItemText');
    item3.innerHTML = "Eggs, sausage, vegetables baked together in a cast iron pan. Delicious";
    brunchItem3.append(item3Name, item3Img, item3);

    const brunchItem4 = document.createElement('div');
    brunchItem4.classList.add('menuItemDiv');
    const item4Name = document.createElement('div');
    item4Name.innerHTML = "French Toast";
    item4Name.classList.add('menuItemName');
    const item4Img = new Image();
    item4Img.src = frToast;
    item4Img.classList.add('menuImage');
    const item4 = document.createElement('p');
    item4.classList.add('menuItemText');
    item4.innerHTML = "White bread topped with blueberries, banana slices and maple Syrup";
    brunchItem4.append(item4Name, item4Img, item4);

    const brunchItem5 = document.createElement('div');
    brunchItem5.classList.add('menuItemDiv');
    const item5Name = document.createElement('div');
    item5Name.innerHTML = "Cannoli";
    item5Name.classList.add('menuItemName');
    const item5Img = new Image();
    item5Img.src = cann;
    item5Img.classList.add('menuImage');
    const item5 = document.createElement('p');
    item5.classList.add('menuItemText');
    item5.innerHTML = "Assorted pastry shells filled with ricotta, pistachio, chocolate chip, jam and more";
    brunchItem5.append(item5Name, item5Img, item5);

    const brunchItem6 = document.createElement('div');
    brunchItem6.classList.add('menuItemDiv');
    const item6Name = document.createElement('div');
    item6Name.innerHTML = "Mini quiche";
    item6Name.classList.add('menuItemName');
    const item6Img = new Image();
    item6Img.src = quiche;
    item6Img.classList.add('menuImage');
    const item6 = document.createElement('p');
    item6.classList.add('menuItemText');
    item6.innerHTML = "Bite sized pastries filled with eggs, cheese, meat and veggies";
    brunchItem6.append(item6Name, item6Img, item6);

    brunchContainer.append(brunchItem1, brunchItem2, brunchItem3, brunchItem4, brunchItem5, brunchItem6);

    return menuHeader;
}