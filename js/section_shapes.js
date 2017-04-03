window.addEventListener("load", draw);

window.addEventListener("resize", draw);

function draw (e) {
    var parent = document.getElementById("news");
    parent = {
        height: parent.offsetHeight,
        width: parent.offsetWidth
    };
    var offsetTop = parent.height*0.05;
    var offsetLeft = parent.width*0.02  ;
    //Main canvas
    var canvas = document.getElementById("news-canvas");
    canvas.width = parent.width;
    canvas.height = parent.height;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = '#45117e';

    ctx.beginPath();
    ctx.moveTo(offsetLeft, 0);
    ctx.lineTo(parent.width, 0);
    ctx.lineTo(parent.width, parent.height-offsetTop);
    ctx.lineTo((parent.width * 0.1)+offsetLeft, parent.height-offsetTop);
    ctx.closePath();
    ctx.fill();

    //Shadow canvas
    canvas = document.getElementById("news-canvas-shadow");
    canvas.width = parent.width;
    canvas.height = parent.height;
    ctx = canvas.getContext("2d");


    ctx.fillStyle = '#550d9e';

    ctx.beginPath();
    ctx.moveTo(0, offsetTop);
    ctx.lineTo(parent.width+offsetTop, 0);
    ctx.lineTo(parent.width, parent.height+offsetTop);
    ctx.lineTo((parent.width * 0.1), parent.height+offsetTop);
    ctx.closePath();
    ctx.fill();

    //Characters canvas
    var parent = document.getElementById("characters");
    parent = {
        height: parent.offsetHeight,
        width: parent.offsetWidth
    };
    var offsetTop = parent.height*0.05;
    var offsetLeft = parent.width*0.4  ;
    //Main canvas
    var canvas = document.getElementById("chara-canvas");
    canvas.width = parent.width;
    canvas.height = parent.height;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = '#550d9e';

    ctx.beginPath();
    ctx.moveTo(parent.width*0.35, 0);
    ctx.lineTo(parent.width, 0);
    ctx.lineTo(parent.width, parent.height-offsetTop);
    ctx.lineTo(0, parent.height-offsetTop);
    ctx.lineTo(0, (parent.height-offsetTop)*0.8);
    ctx.lineTo(parent.width*0.1, (parent.height-offsetTop)*0.8);
    ctx.closePath();
    ctx.fill();
}