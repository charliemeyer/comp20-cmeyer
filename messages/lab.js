// Your JavaScript goes here...
function parse(){
    request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onreadystatechange = parseData;
    request.send();
}

function parseData(data){
    if(request.readyState == 4){
        console.log(request.responseText);
    } else {
        console.log("we failed");
    }
}
