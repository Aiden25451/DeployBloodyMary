var clicks = 0;

function myfunction() {   

    var text = document.getElementsByClassName("summon")[0]; 
    clicks++;

    if(clicks == 3) {
        text.textContent = "BLOODYMARY!!!";
        text.style.fontSize = String(clicks * 3) + "vw" ;
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
            text.textContent = "";
            document.getElementsByClassName("text")[0].style.visibility = "visible";
            document.getElementsByClassName("text")[0].style.fontSize = "2vw";
            document.getElementsByClassName("text")[0].style.paddingBottom = "200px";
            document.getElementById("ghost").style.width = "40vh";
            document.getElementById("ghost").style.marginTop = "45vh";

            setTimeout(function() {
                var picture_row = document.getElementById("pic");
                picture_row.parentNode.removeChild(picture_row);
                document.getElementsByClassName("button")[0].remove();
                document.getElementsByClassName("mirror")[0].remove();
            }, delayInMilliseconds);
            
            
        }, delayInMilliseconds);
    } else if(clicks < 3){
        text.textContent = "BLOODYMARY";
        text.style.fontSize = String(clicks * 3) + "vw" ;
    }
}