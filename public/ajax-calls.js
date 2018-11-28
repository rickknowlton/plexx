function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        //    if (xmlhttp.status == 200) {
               console.log(xmlhttp)
            //    document.getElementById("score").innerHTML = xmlhttp.responseText;
        //    }
        //    else 
           if (xmlhttp.status == 400) {
            console.log("There was an error 400")
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "/api/scores", true);
    xmlhttp.send();
}

loadXMLDoc();