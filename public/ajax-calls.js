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
    })
}


// Not Finished
function postUserScore(userID, score, level) {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                const response = JSON.parse(xmlhttp.response);
            }
            else if (xmlhttp.status == 400) {
                console.log("There was an error 400")
            }
            else {
                console.log('something else other than 200 was returned');
            }
        }
    }
    xmlhttp.open("POST", `/api/scores/${userID}`, true);
    xmlhttp.send(encodeURIComponent({level: + score}));
};

getUserScores();
