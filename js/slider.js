window.addEventListener("load", function () {
    document.getElementById("prev").addEventListener("click", function () {
        var newWidth = document.getElementById("slide-show").offsetWidth;
        var stage = document.getElementById("slide-stage");
        console.log(stage.style.transform.substring(10).split("px"));
        var transform = stage.style.transform.substring(10).split("px");
        var newValue = (parseInt(transform[0]) + newWidth);
        console.log("Nb step :" + newValue / newWidth);
        console.log("Nb child :" + stage.children.length);
        var maxValue = -((stage.children.length-1) * newWidth);
        stage.style.transform = "translate(" + ((newValue / newWidth) > 0
                ? maxValue
                : newValue)
            + "px,0px)";
    });
    document.getElementById("next").addEventListener("click", function () {
        var newWidth = document.getElementById("slide-show").offsetWidth;
        var stage = document.getElementById("slide-stage");
        console.log(stage.style.transform.substring(10).split("px"));
        var transform = stage.style.transform.substring(10).split("px");
        var newValue = (parseInt(transform[0]) - newWidth);
        console.log("Nb step :" + newValue / newWidth);
        console.log("Nb child :" + stage.children.length);
        stage.style.transform = "translate(" + ((newValue / newWidth) < (-(stage.children.length - 1))
                ? "0"
                : newValue)
            + "px,0px)";
    });
});
