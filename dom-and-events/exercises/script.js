function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    //code that changes the paragraph text when the Take off button is clicked
    button.addEventListener("click", function() {
        paragraph.innerHTML = "Houston, we have liftoff!";   
    });
    
    //or
    // button.addEventListener('click', event => {
    //     paragraph.innerHTML = 'Houston! We have liftoff!';
    //  });

    //code that makes Abort Mission button red when hovering over it and back to default color when hovering out of it 
    missionAbort.addEventListener("mouseover", event => {
        // console.log('yes');
        missionAbort.setAttribute("style", "background-color: red;");
    });

    missionAbort.addEventListener("mouseout", event => {
        // console.log('yes');
        missionAbort.setAttribute("style", "");
    });

    //or
    // missionAbort.addEventListener("mouseout", function( event ) {
    //     event.target.style.backgroundColor = "";
    // });

    missionAbort.addEventListener("click", event => {
        let c = window.confirm("Are you sure you want to abort the mission?");
        // console.log(c);
        if (c === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    });

}

window.addEventListener("load", init);
