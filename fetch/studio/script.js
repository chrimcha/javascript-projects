//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {            
            const astronautsDiv = document.getElementById("container");
            const greenForActive = document.getElementById("green-if-active");


            astronautsDiv.innerHTML = `<div><h4>Member Count: ${json.length}</h4></div>`;
            
            for (let i = 0; i < json.length; i++) {
                astronautsDiv.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li>Active: <span class="green-if-active">${json[i].active}</span></li>
                    <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>`;
// active to green
                const greenForActive = document.getElementById("green-if-active");

                console.log(json.active);
                if (json.active === true) {
                greenForActive.setAttribute("style", "color: green;");
            }
            };
        });
    });
 });