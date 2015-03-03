function init() {
    var canvas = document.getElementById('game_canvas');
    var ctx = canvas.getContext("2d");
    var img = new Image();   // Create new img element
    img.addEventListener("load", function() {
        ctx.drawImage(img, 322, 2, 466, 136, 0, 0, 466, 136); //background
        ctx.drawImage(img, 82, 22, 15, 15, 36, 26, 15, 15); //background

    }, false);
    img.src = 'pacman10-hp-sprite.png'; // Set source path
}