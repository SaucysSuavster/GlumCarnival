function myFunction() {
    const element = document.getElementById("dropdown");
    element.style.top = (element.style.top == '70px') ? '-330px' : '70px';
}

function coolFunc() {
    var element = document.createElement("div");
    element.className = "flash";
    element.id = "flash";
    element.style.height = "100%";
    element.style.width = "100%";
    document.body.appendChild(element);
    element.style.left = "0px";
    element.style.top = "0px";
    element.style.position = "absolute";
    element.style.backgroundColor = "white";
    element.style.zIndex = "100";
    document.getElementById("flash").animate([

        { backgroundColor: "#00ff3c59" },

        { backgroundColor: "#ff000059" },

        { backgroundColor: "#002fff59" }],

        {
            duration: 900,
            iterations: Infinity
        });

    setTimeout(
        function () {
            $(element).remove();
        }, 5000);
}


$(document).ready(function () {
    var audio = document.getElementById("audio");
    audio.volume = .3;
    audio.play();
});


function hideButt() {
    var y = document.getElementById("buttscreen");
    var x = document.getElementsByClassName("hide");
    for (var i = 0; i < 2; i++) {
        x[i].style.display = "block";
    }
    y.style.display = "none";
    document.body.style.backgroundColor = "rgb(26, 24, 24)";
    document.title = "FUCK MIGUEL";
    var ply = document.getElementById('audio');
    ply.src = "";
    var zelda = document.getElementById("audio1");
    zelda.volume = 0.1;
    zelda.play();
    $("#icon").attr("href", "./Assets/meh.ico");
    document.getElementById('pwall').style.backgroundImage = "url(/Assets/wall.jpg)";
}

function rest() {
    document.getElementById('answer').style.display = "block";
    document.getElementById('reset').style.display = "none";
    document.getElementById('yes1').style.display = "none";
    document.getElementById('no1').style.display = "none";
}

function reveal() {
    var box = document.getElementById('boxslide');
    box.style.bottom = (box.style.bottom == '0vw') ? '-53vw' : '0vw';
}

function yesnoCheck() {
    document.getElementById('answer').style.display = "none";

    if (document.getElementById('yes').checked) {
        document.getElementById('yes1').style.display = "block";
        document.getElementById('reset').style.display = "block";
    } else if (document.getElementById('no').checked) {
        document.getElementById('no1').style.display = "block";
        document.getElementById('reset').style.display = "block";
    }
}

function menuslid() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        var men = document.getElementById('menuslid');
        men.style.top = (men.style.top == '0vw') ? '-100vw' : '0vw';

    }

}




