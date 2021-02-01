/* add code here  */

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
    document.querySelectorAll('.hilightable').forEach(item => {
        item.addEventListener('focus', event => {
            if (item.classList.contains("error")) {
                item.classList.remove("error");
            }
            item.classList.toggle("highlight");
        });
        item.addEventListener('blur', event => {
            item.classList.toggle("highlight");
        });
    });

    var buttn = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        var btn = buttn[i];
        if (btn.type == "submit") {
            btn.addEventListener("click", function(e) {

                document.querySelectorAll('.required').forEach(item => {
                    if (item.value.length == 0) {
                        item.classList.add("error");

                    }
                });
            });
        }
    }
}