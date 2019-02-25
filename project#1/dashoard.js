function userDashboard(user) {
    
    currentUser = user;
    index.classList.add("displayNone");
    welcome.classList.remove("displayNone");
    myDashboard.classList.remove("displayNone");
    const myDashboardHT = document.createElement("h2");
    const myListsHT = document.createElement("h4");
    myListsHT.innerText = "My TODO lists";
    myDashboardHT.innerText = "My dashboard";
    const currentUserData = document.createElement("ul");
    currentUserData.innerHTML = "<li>" + currentUser.firstName + " " + currentUser.lastName + "</li><li>"+currentUser.email + "</li>";
    myDashboard.appendChild(myDashboardHT);
    myDashboard.appendChild(currentUserData);
    myDashboard.appendChild(myListsHT);
    const toDoListsUL = document.createElement("ul");
    toDoListsUL.id = "toDoListsUL";
    myDashboard.appendChild(toDoListsUL);
    const TODOlISTS = JSON.parse(localStorage.getItem("TODOLists"));
    let empty = true;
    if (TODOlISTS !== null && TODOlISTS.length >= 1) {
        for (const list of TODOlISTS.sort((a,b) => Date.parse(b.creationDate) - Date.parse(a.creationDate))) {
            if (list.email === user.email) {
                empty = false;
                const toDoListsLI = document.createElement("li");
                toDoListsLI.id = list.id;
                toDoListsLI.innerHTML = list.listName + " <a href='' style='color:green'>edit</a> <button>remove</button>";
                toDoListsUL.appendChild(toDoListsLI);
            }
        }

    } 
    if (empty) {
        const emptyDashboard = document.createElement("div");
        emptyDashboard.innerText = "There are no TODO lists, press 'Create new TODO' to start";
        emptyDashboard.style.color = "red";
        myDashboard.appendChild(emptyDashboard);
    }
    
    toDoListsUL.addEventListener("click", (e) => {
        if (e.target.nodeName === "A") {
            e.preventDefault();
            const TODOlISTS = JSON.parse(localStorage.getItem("TODOLists"));
            console.log(e.target.nodeName);
            for (const i in TODOlISTS){
                if(TODOlISTS[i].id == e.target.parentNode.id) {
                    edit.classList.remove("displayNone");
                    myDashboard.classList.add("displayNone");
                    const d = new Date(TODOlISTS[i].creationDate)

                    const listHT = document.createElement("h4");
                    listHT.innerText = TODOlISTS[i].listName;

                    const span = document.createElement("span");
                    span.style.color = "#808080";
                    span.style.fontSize = "14px";
                    span.innerText = "Creation date: " + d.toDateString();

                    const editForm = document.createElement("form");
                    editForm.id = "editForm";

                    const newListItem = document.createElement("input");
                    newListItem.type = "text";
                    newListItem.id = "newListItem";
                    newListItem.placeholder = "Enter a new list item"


                    const addListItem = document.createElement("input");
                    addListItem.type = "button";
                    addListItem.value = "add item"
                    addListItem.id = "addListItem";

                    const renameList = document.createElement("input");
                    renameList.type = "button";
                    renameList.value = "rename list"
                    renameList.id = "renameList";

                    const save = document.createElement("button");
                    save.type = "submit";
                    save.innerText = "save";

                    const p = document.createElement("p");
                    p.appendChild(save);

                    const dashboardA = document.createElement("a");
                    dashboardA.href = "";
                    dashboardA.innerText = "my dashboard";
                
                    editForm.appendChild(newListItem);
                    editForm.appendChild(addListItem);
                    editForm.appendChild(renameList);
                    editForm.appendChild(p);

                    edit.appendChild(listHT);
                    edit.appendChild(span);
                    edit.appendChild(editForm);
                    edit.appendChild(dashboardA);
                    editList(TODOlISTS[i]);
                }
            }
        }

        if (e.target.nodeName === "BUTTON") {
            const li = e.target.parentNode;
            toDoListsUL.removeChild(li);
            for (const i in TODOlISTS){
                if(TODOlISTS[i].id == li.id) {
                    TODOlISTS.splice(i, 1);
                    if (TODOlISTS === null) {
                        TODOlISTS = [];
                    }
                    localStorage.setItem("TODOLists", JSON.stringify(TODOlISTS));
                    myDashboard.innerHTML = "";
                    userDashboard(user);
                }
            }
        }
    });
}

welcome.addEventListener("click", (e) => {
    console.log(myDashboard);
    if (e.target.id === "newTODOBtn") {
        const date = new Date();
        let TODOLists;
        let thisListExists = false;
        const listName = prompt("Enter the name of your TODO list");
        if (!listName) {
            return;
        }
        else {
           
            if (JSON.parse(localStorage.getItem("TODOLists")) === null) {
                TODOLists = [];
                const newListItem = {
                    id: idGenerator(date),
                    listName: listName,
                    email: currentUser.email,
                    creationDate: date.toString(),
                    listItems: {}
                };
                TODOLists.push(newListItem);
                localStorage.setItem("TODOLists", JSON.stringify(TODOLists));
                edit.classList.add("displayNone");
                edit.innerHTML = "";
                myDashboard.classList.remove("displayNone");
                myDashboard.innerHTML = "";
                userDashboard(currentUser);
            } else {
                TODOLists = JSON.parse(localStorage.getItem("TODOLists"));
                for ( const list of TODOLists) {
                    if (list.listName === listName && list.email === currentUser.email) {
                        thisListExists = true;
                        console.log("This list already exist");
                    }
                }
                if (!thisListExists) {
                    const newListItem = {
                        id: idGenerator(date),
                        listName: listName,
                        email: currentUser.email,
                        creationDate: date.toString(),
                        listItems: {}
                    };
                    TODOLists.push(newListItem);
                    localStorage.setItem("TODOLists", JSON.stringify(TODOLists));
                    edit.classList.add("displayNone");
                    edit.innerHTML = "";
                    myDashboard.classList.remove("displayNone");
                    myDashboard.innerHTML = "";
                    userDashboard(currentUser);
                }
            }
            
        }
    }
    if(e.target.id === "logOutBtn") {
        localStorage.removeItem("connected");
        index.classList.remove("displayNone");
        welcome.classList.add("displayNone");
        edit.innerHTML = "";
        myDashboard.innerHTML = "";
        myDashboard.classList.add("displayNone");
        successMessage("successfully logged out");
    }
    if(e.target.id === "deleteBtn") {
        const users = JSON.parse(localStorage.getItem("users"));
        const TODOLists = JSON.parse(localStorage.getItem("TODOLists"));
        for (const i in users) {
            if (users[i].email === currentUser.email) {
                users.splice(i, 1);
            }
        }
        if (TODOLists) {
            for (const i in TODOLists) {
                if (TODOLists[i].email === currentUser.email) {
                    TODOLists.splice(i,1);
                }
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("TODOLists", JSON.stringify(TODOLists));
        localStorage.removeItem("connected");
        myDashboard.innerHTML = "";
        index.classList.remove("displayNone");
        welcome.classList.add("displayNone");
        myDashboard.classList.add("displayNone");
        successMessage("account deleted");
    }
});

function editList(listObj) {
    const editForm = document.getElementById("editForm");
    const input = editForm.querySelector('input');
    const listItemsUL = document.createElement("ul");
    if (Object.keys(listObj.listItems).length > 0) {
        for (const item in listObj.listItems) {
            const listItemsLI = document.createElement("li");
            if (listObj.listItems[item] === "undone") {
                listItemsLI.innerHTML = item + " <input type='checkbox'>";
                listItemsLI.id = item;
            } else {
                listItemsLI.innerHTML = item + " <input type='checkbox' checked>";
                listItemsLI.id = item;
            }
            listItemsUL.appendChild(listItemsLI);
        }
        
        editForm.insertBefore(listItemsUL, input);
    } else {
        console.log("empty list");
    }

    editForm.querySelector("#addListItem").addEventListener("click", (e) => {
        // listItemsUL = editForm.querySelector("ul");
        if(!editForm.querySelector("#newListItem").value) {
            alert("empty value");
            return;
        } else {
            const listItemsLI = document.createElement("li");
            listItemsLI.id = editForm.querySelector("#newListItem").value;
            listItemsLI.innerHTML = editForm.querySelector("#newListItem").value + " <input type='checkbox'>"
            listItemsUL.appendChild(listItemsLI);
            editForm.insertBefore(listItemsUL, input);
        }
    });

    editForm.querySelector("#renameList").addEventListener("click", (e) => {
        let editH4 = edit.querySelector("h4");
        const H4 = prompt("Enter the new name of the list");
        editH4.innerText = H4 === null || H4 === "" ? editH4.innerText : H4;
        console.log(editH4);
    });
    
    edit.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        edit.innerHTML = "";
        edit.classList.add("displayNone");
        myDashboard.classList.remove("displayNone");
        editForm.reset();
    });

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("save modifications");
        const editH4 = edit.querySelector("h4");
        const listItemsLI = editForm.querySelectorAll("li");
        const listItems = {};
        for (const item of listItemsLI) {
            if (item.childNodes[1].checked) {
                listItems[item.id] = "done";
            }
            else {
                listItems[item.id] = "undone";
            }
        }

        const TODOlISTS = JSON.parse(localStorage.getItem("TODOLists"));
        for(const TODO in TODOlISTS) {
            if (TODOlISTS[TODO].id === listObj.id) {
                TODOlISTS[TODO].listName = editH4.innerText;
                TODOlISTS[TODO].listItems = listItems
            }
        }

        localStorage.setItem("TODOLists", JSON.stringify(TODOlISTS));
    });

    
}
