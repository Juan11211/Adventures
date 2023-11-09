"use strict"

//global arrays
let categories = [
    "Adventures",
    "Arts & Crafts",
    "Local Sports",
    "Museums",
    "Wine Tastings",
    "Other"
    ];

window.onload = function(){
    
    // main category - loads as soon as windows load. 
    initCategoryMenu();


}

function initCategoryMenu(){
    const categoryMenu = document.getElementById("categoryMenu");

    let defaultOption = new Option("Select One");
    categoryMenu.appendChild(defaultOption); 

    categories.forEach()
}