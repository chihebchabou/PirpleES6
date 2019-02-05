/*
 Homework Assignment #8: Events
 Create a tic-tac-toe game
*/

// Define a container witch represents the game board
const container = document.getElementById("container");

// List all the empty spaces in the div container (as buttons in this case)
const listButtons = container.querySelectorAll("button");

// Define the mark that should appear in the empty space with "X" as default value
let mark = "X";

// Define a counter that should be increased when user clicks in the empty space
let counter = 1;

// Add a click event to the container
container.addEventListener("click", actionScript);

// Declare the function related to the event
function actionScript(e) {

    // Define a win variable with false as default value
    let win = false;

    // Get the clicked element
    const target = e.target;

    // Set the target text to X or O
    target.innerText = mark;
    if (mark === "X"){

        // X should be red
        target.style.color = "red";

        // Switch the mark to 'O'
        mark = "O";
    } else {

        // O should be black
        target.style.color = "black";

        // Switch the mark to 'X'
        mark = "X";
    }

    // Prevent target form being clicked again
    target.disabled = true;

    // Modify the empty space with a new value of the target to be X or O
    listButtons[parseInt(target.id) - 1] = target;
    
    // Test all the probabilities to win and make dialog box (alert) appear and tell who has won
    switch (parseInt(target.id) - 1) {
        case 0:
            if((listButtons[0].innerText === listButtons[1].innerText && listButtons[1].innerText === listButtons[2].innerText) || (listButtons[0].innerText === listButtons[3].innerText && listButtons[3].innerText === listButtons[6].innerText) || (listButtons[0].innerText === listButtons[4].innerText && listButtons[4].innerText === listButtons[8].innerText)) {
               alert(target.innerText + " has won!");
               win = true;
            }
            break;
        case 1:
            if ((listButtons[0].innerText === listButtons[1].innerText && listButtons[1].innerText === listButtons[2].innerText) || (listButtons[1].innerText === listButtons[4].innerText && listButtons[4].innerText === listButtons[7].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 2:
            if (((listButtons[0].innerText === listButtons[1].innerText && listButtons[1].innerText === listButtons[2].innerText)) || ((listButtons[2].innerText === listButtons[5].innerText && listButtons[5].innerText === listButtons[8].innerText)) || ((listButtons[2].innerText === listButtons[4].innerText && listButtons[4].innerText === listButtons[6].innerText))) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 3:
            if ((listButtons[3].innerText === listButtons[0].innerText && listButtons[3].innerText === listButtons[6].innerText) || (listButtons[3].innerText === listButtons[4].innerText && listButtons[4].innerText === listButtons[5].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 4:
            if ((listButtons[4].innerText === listButtons[1].innerText && listButtons[4].innerText === listButtons[8].innerText) || (listButtons[4].innerText === listButtons[1].innerText && listButtons[4].innerText === listButtons[7].innerText) || (listButtons[4].innerText === listButtons[2].innerText && listButtons[4].innerText === listButtons[6].innerText) || (listButtons[4].innerText === listButtons[3].innerText && listButtons[4].innerText === listButtons[5].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 5:
            if ((listButtons[5].innerText === listButtons[2].innerText && listButtons[5].innerText === listButtons[8].innerText) || (listButtons[5].innerText === listButtons[4].innerText && listButtons[5].innerText === listButtons[3].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 6:
            if ((listButtons[6].innerText === listButtons[3].innerText && listButtons[6].innerText === listButtons[0].innerText) || (listButtons[6].innerText === listButtons[4].innerText && listButtons[6].innerText === listButtons[2].innerText) || (listButtons[6].innerText === listButtons[7].innerText && listButtons[6].innerText === listButtons[8].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 7:
            if ((listButtons[7].innerText === listButtons[4].innerText && listButtons[7].innerText === listButtons[1].innerText) || (listButtons[7].innerText === listButtons[6].innerText && listButtons[7].innerText === listButtons[8].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        case 8:
            if ((listButtons[8].innerText === listButtons[6].innerText && listButtons[8].innerText === listButtons[7].innerText) || (listButtons[8].innerText === listButtons[0].innerText && listButtons[8].innerText === listButtons[4].innerText) || (listButtons[8].innerText === listButtons[2].innerText && listButtons[8].innerText === listButtons[5].innerText)) {
                alert(target.innerText + " has won!");
                win = true;
            }
            break;
        default:
            //alert("end!");
            break;
    }

    // If there is a winner
    if (win === true){

        // Reset the game to its begining state
        listButtons.forEach(element => {
           element.innerText = "";
           element.disabled = false;
       });
       mark = "X";
       counter = 1;
    } else { 
        if (counter === 9) {

            // If all the empty spaces are clicked, a dialog box should appear and tell "Cats game!"
            alert("Cats game");

            // Reset the game to its begining state
            listButtons.forEach(element => {
                element.innerText = "";
                element.disabled = false;
            });
            mark = "X";
            counter = 1;
        } else {

            // Click on another empty space
            counter++;
        }
    }
}

