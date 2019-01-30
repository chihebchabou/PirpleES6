/*
 Homework Assignment #7: The DOM
*/

// Define an array of colors
const hexColor = ["#c0392b","#9b59b6","#3498db","#2ecc71","#f1c40f","#943126","#0e6655","#e67e22","#8e44ad","#21618c"];

//Get the element with ID: 'rectangleWrapper'
const wrapper = document.getElementById("rectangleWrapper");

// Give the element with ID: 'rectangleWrapper' 50 pixels of padding on its top, right and left sides but add zero padding to the bottom
wrapper.style.paddingTop = "50px";
wrapper.style.paddingRight = "50px";
wrapper.style.paddingLeft = "50px";
wrapper.style.paddingBottom = "0";

// Loop through hexColor array
for (let i = 0; i < hexColor.length; i++) {

    // Create a new div
    const newDiv = document.createElement("div");

    // Create a new paragraph
    const newP = document.createElement("p");

    // Set the div class name to 'rectangle'
    newDiv.className = "rectangle";

    // Give the div element an ID, 'color-c0392b' for example
    newDiv.id = "color-" + hexColor[i].slice(1);

    // Add the hex code (in plain text) to the paragraph
    newP.innerText = "HEX: " + hexColor[i];

    // Append newly created elements into the div with id 'rectangleWrapper'
    wrapper.appendChild(newDiv);
    wrapper.appendChild(newP);
}

// Get all elements with class rectangle
const rectangles = document.querySelectorAll(".rectangle");

// Add css height and width properties to every element with class 'rectangle'
for (const rec of rectangles) {
    rec.style.height = "50px";
    rec.style.width = "150px";
}

// Get all the divs wrapped in 'rectangleWrapper'
const elements = wrapper.getElementsByTagName("div");

// Fill these rectangles with color that matches the hex code
for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = hexColor[i];
}

// Create a function that logs to the console all the rectangles'IDs when the page loads
const rectanglesIDs = (rectangles) => {
    console.log("Here are the rectangles IDs:");
    for (const rec of rectangles) {
        console.log(rec.id);
    }
}

// Get the h1 element
const h1 = document.querySelector("h1")

// Make the <title> match the text in the <h1>
document.title = h1.innerText;

/*
output

Here are the rectangles IDs:
color-c0392b 
color-9b59b6 
color-3498db 
color-2ecc71 
color-f1c40f 
color-943126 
color-0e6655 
color-e67e22 
color-8e44ad 
color-21618c
*/