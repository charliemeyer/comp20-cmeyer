function parse(){
    request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onreadystatechange = parseData;
    request.send();
}

function parseData(data){
    if(request.readyState == 4){
        responseObject = JSON.parse(request.responseText);
        messages = document.getElementById("messages");
        responseObject.forEach(function(messageObject){
            messages.append(messageObject['content']);
        });
    } else {
        console.log("Still working");
    }
}
