function init() {
    console.log("hello world");
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext("2d");
    var img = new Image();   // Create new img element
    img.addEventListener("load", function() {
        ctx.drawImage(img, 400, 0, 200, 100, 0, 0, 200, 100);
    }, false);
    img.src = 'pacman10-hp-sprite.png'; // Set source path
}