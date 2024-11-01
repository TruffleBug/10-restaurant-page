let menuPage = function() {
    const contentDiv = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';
    contentDiv.appendChild(menuDiv);
    
        const appetizerHeader = document.createElement('h1');
        appetizerHeader.textContent = 'Appetizers';
        menuDiv.appendChild(appetizerHeader);

        const appetizerText = document.createElement('ul');
        const appetizerList = ['Nachos - $13.00', 'Chips y Salsa - $7.00', 'Chile Cheese Fries - $8.50', 'Nacho Cheese Fries - $9.50', 'Bacon Chile Cheese Fries - $9.75', 'Carne Asada Chile Fries - $9.50'];
        appetizerList.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            appetizerText.appendChild(li);
        });
        menuDiv.appendChild(appetizerText);

        const tacoHeader = document.createElement('h1');
        tacoHeader.textContent = 'Tacos';
        menuDiv.appendChild(tacoHeader);

        const tacoText = document.createElement('ul');
        const tacoList = ['Asada - $4.00', 'Al Pastor - $3.50', 'Nopal - $3.25', 'Chicken - $3.40', 'Barbacoa - $4.00', 'Adobada - $4.00', 'Pescado - $4.00', 'Rajas - $3.25', 'Birria - $3.40', 'Order of 4 - $14.75'];
        tacoList.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            tacoText.appendChild(li);
        });
        menuDiv.appendChild(tacoText);

        const breakfastHeader = document.createElement('h1');
        breakfastHeader.textContent = 'Breakfast';
        menuDiv.appendChild(breakfastHeader);

        const breakfastText = document.createElement('ul');
        const breakfastList = ['Benedict Verde or Rojo - $13.99', 'Omelete Chihuahua - $14.99', 'Omelette de Asada - $14.99', 'Omelete La Momia - $14.99', 'Omelette Norteno - $14.99', 'La Marketa Breakfast Tacos - $13.50', 'Huevos Rancheros - $13.99', 'T-Bone Steak & Eggs - $16.99', 'Egg & Potato Burrito - $4.00', 'Egg, Potato, & Steak Burrito - $4.99', 'Egg, Potato, & Bacon Burrito - $4.50', 'Egg, Potato, & Chorizo Burrito - $4.00'];
        breakfastList.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            breakfastText.appendChild(li);
        });
        menuDiv.appendChild(breakfastText);

        const allDayHeader = document.createElement('h1');
        allDayHeader.textContent = 'All Day Menu';
        menuDiv.appendChild(allDayHeader);

        const allDayText = document.createElement('ul');
        const allDayList = ['Barbacoa Burrito - $10.00', 'Bean Burrito - $4.50', 'Carnitas Burrito - $10.00', 'Chicken Burrito - $9.50', 'Steak Burrito - $11.30', 'Menudo - $12.00', 'Quesabirria Plate with Consome - $10.75', 'Shrimp Cocktail - Large - $18.99', 'Taco Birria Plate with Consome - $10.75', 'Milanesa Torta with Fries - $14.50', 'Carnitas Torta with Fries - $14.99', 'Barbacoa Torta with Fries - $13.99'];
        allDayList.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            allDayText.appendChild(li);
        });
        menuDiv.appendChild(allDayText);

        const sidesHeader = document.createElement('h1');
        sidesHeader.textContent = 'Sides';
        menuDiv.appendChild(sidesHeader);

        const sidesText = document.createElement('ul');
        const sidesList = ['Rice - $3.00', 'Beans - $3.00', 'Green Chile - $3.00', 'Guacamole y Chips - $8.00', 'Salsa y Chips - $5.00', 'Chicharrones - $4.00', 'Tortillas - $1.25'];
        sidesList.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            sidesText.appendChild(li);
        });
        menuDiv.appendChild(sidesText);
}



export {menuPage};