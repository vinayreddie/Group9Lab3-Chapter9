/* add code here */

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
    var selectedImg;
    var div = document.getElementById("thumbnails");
    var f = document.getElementById("featured");
    var n = f.children;
    var big = n[0];
    var Cap = n[1];
    div.onclick = function(event) {
        var img = event.target.closest('img'); 

        if (!img) return;

        if (!div.contains(img)) return;

        big.src = img.src.replace("small", "medium");
        big.title = img.title;
        Cap.innerHTML = img.title;

    }
    f.addEventListener('mouseover', event => {
        Cap.style.opacity = 0.8;
        Cap.style.transition = "all 1s";
    });
    f.addEventListener('mouseout', event => {
        Cap.style.opacity = 0;
    });

}
