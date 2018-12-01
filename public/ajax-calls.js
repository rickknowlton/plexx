const willGetCurrentUser = new Promise (
    function (resolve, reject) {
        const xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const response = JSON.parse(xmlhttp.response);
                    resolve({
                        username: response.username,
                        id: response.id,
                        loggedIn: response.loggedIn
                    })
                }
                else if (xmlhttp.status == 400) {
                    reject(console.log("There was an error 400"))
                }
                else {
                    reject(
                        console.log('something else other than 200 was returned').
                        console.log(xmlhttp.status)
                    );
                }
            }
        };
        xmlhttp.open("GET", `/api/user`, true);
        xmlhttp.send();
    }
);

function getUserScores() {
    willGetCurrentUser
    .then(user => {
        
        const xmlhttp = new XMLHttpRequest();
        console.log(user);

        if (user.loggedIn) {

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        const response = JSON.parse(xmlhttp.response);
                        document.getElementById("score").innerHTML = response;

                        console.log(response);
                        console.log(response.levelOne);
                        console.log(response.levelTwo);
                        console.log(response.levelThree);
                    }
                else if (xmlhttp.status == 400) {
                        console.log("There was an error 400")
                    }
                    else {
                        console.log('something else other than 200 was returned');
                    }
                }
            }
        }
        else {
            console.log("User not logged in");
        }

        xmlhttp.open("GET", `/api/scores/${user.id}`, true);
        xmlhttp.send();
    })
    .catch(error => {
        console.log(error)
    });
}

// Arguments are score as an integer and level as a string
function postUserScore(score, level) {
    willGetCurrentUser
    .then(user => {
        const xmlhttp = new XMLHttpRequest();

        if (user.loggedIn) {
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        const response = JSON.parse(xmlhttp.responseText);
                        console.log(response);
                    }
                    else if (xmlhttp.status == 400) {
                        console.log("There was an error 400")
                    }
                    else {
                        console.log('something else other than 200 was returned');
                    }
                }
            }
            xmlhttp.open("PUT", `/api/scores/${user.id}`, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json');
            
            switch (level) {
                case "levelOne":
                    xmlhttp.send( JSON.stringify({
                        levelOne: score
                    }))
                    break;
                case "levelTwo":
                    xmlhttp.send( JSON.stringify({
                        levelTwo: score
                    }))
                    break;
                case "levelThree":
                    xmlhttp.send( JSON.stringify({
                        levelThree: score
                    }))
                    break;

            }
            
        }
        else {
            console.log("User not logged in");
        }
    })
    .then(() => {
        getUserScores();
    })
    .catch(error => {
        console.log(error)
    });
};

postUserScore(69, "levelOne");
postUserScore(420, "levelTwo");
postUserScore(111, "levelThree");