function parse(){
    request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onreadystatechange = parseData;
    request.send();
}

function parseData(data){
    if(request.readyState == 4 && response.status == 200){
        responseObject = JSON.parse(request.responseText);
        messages = document.getElementById("messages");
        responseObject.forEach(function(messageObject){
            messages.innerHTML += '<p>' + messageObject['content'] + ' ' + '<span>'
                                        + messageObject['username'] + '</span></p>';
        });
    } else if(request.readyState == 4 && response.status != 200){
        console.log("request failed");
    } else {
        console.log("Still working");
    }
}
