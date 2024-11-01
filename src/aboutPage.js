import familyImage from "./images/family.jpg";


let aboutPage = function() {    
    const contentDiv = document.querySelector('#content');

    const familyPic = document.createElement('img');
    familyPic.src = familyImage;
    familyPic.alt = 'Our Family';
    familyPic.id = 'familyPic';
    contentDiv.appendChild(familyPic);

    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'aboutDiv';
    contentDiv.appendChild(aboutDiv);
    
        const aboutHeader = document.createElement('h2');
        aboutHeader.textContent = 'Proudly serving the Arvada & Westminster area since 2024.';
        aboutDiv.appendChild(aboutHeader);
};



export {aboutPage}