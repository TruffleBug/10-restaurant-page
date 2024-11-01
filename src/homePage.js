import logoImage from "./images/la-marketa-logo.png";


let homePage = function() {
    //query selectors
    const contentDiv = document.querySelector('#content');
    
    //DOM manipulators
    const logoDiv = document.createElement('div')
    logoDiv.className = 'logoDiv';
    contentDiv.appendChild(logoDiv);
        
        const logoBackgroundDiv = document.createElement('div');
        logoBackgroundDiv.className = 'logoBackgroundDiv';
        logoDiv.appendChild(logoBackgroundDiv);
        
            const logo = document.createElement('img');
            logo.src = logoImage;
            logo.alt = 'La Marketa Logo';
            logo.id = 'logo';
            logoBackgroundDiv.appendChild(logo);

    const marketDiv = document.createElement('div');
    marketDiv.className = 'marketDiv';
    contentDiv.appendChild(marketDiv);
    
        const marketTextDiv = document.createElement('div');
        marketTextDiv.className = 'marketTextDiv';
        marketDiv.appendChild(marketTextDiv);

            const marketHeader = document.createElement('h1');
            marketHeader.textContent = 'Market';
            marketTextDiv.appendChild(marketHeader);

            const marketTextBig = document.createElement('h2');
            marketTextBig.textContent = 'Meat Market 8AM - 8PM Daily';
            marketTextDiv.appendChild(marketTextBig);

            const marketTextSmall = document.createElement('p');
            marketTextSmall.textContent = 'Visit us for fresh meat and produce.';
            marketTextDiv.appendChild(marketTextSmall);

    const foodDiv = document.createElement('div');
    foodDiv.className = 'foodDiv';
    contentDiv.appendChild(foodDiv);
    
        const foodTextDiv = document.createElement('div');
        foodTextDiv.className = 'foodTextDiv';
        foodDiv.appendChild(foodTextDiv);

            const foodHeader = document.createElement('h1');
            foodHeader.textContent = 'Food';
            foodTextDiv.appendChild(foodHeader);

            const foodTextBigBrunch = document.createElement('h2');
            foodTextBigBrunch.textContent = 'Brunch 8AM - 3PM Daily';
            foodTextDiv.appendChild(foodTextBigBrunch);

            const foodTextSmallBrunch = document.createElement('p');
            foodTextSmallBrunch.textContent = 'Come and enjoy authentic full Mexican Breakfast cuisine with your favorite coffee, fresh bread, fresh squeezed juice and/or a mimosa to start your day.';
            foodTextDiv.appendChild(foodTextSmallBrunch);

            const foodTextBigDinner = document.createElement('h2');
            foodTextBigDinner.textContent = 'Dinner 4:30PM - 8PM Daily';
            foodTextDiv.appendChild(foodTextBigDinner);

            const foodTextSmallDinner = document.createElement('p');
            foodTextSmallDinner.textContent = 'Come and enjoy family meals specially made for you fresh from our market to your table.';
            foodTextDiv.appendChild(foodTextSmallDinner);

    const visitDiv = document.createElement('div');
    visitDiv.className = 'visitDiv';
    contentDiv.appendChild(visitDiv);

        const visitTextDiv = document.createElement('div');
        visitTextDiv.className = 'visitTextDiv';
        visitDiv.appendChild(visitTextDiv);

            const visitHeader = document.createElement('h1');
            visitHeader.textContent = 'Visit Us';
            visitTextDiv.appendChild(visitHeader);

            const visitText = document.createElement('p');
            visitText.textContent = 'A family owned and operated Mexican market and restaurant serving you the freshest meals and ingredients daily since 2024.';
            visitTextDiv.appendChild(visitText);
};



export {homePage};