// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("myOverlay").style.display = "block";
//   }
   
//   function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//     document.getElementById("myOverlay").style.display = "none";
//   }
  
  
var nav = document.getElementById("myNav");


        var btns = document.getElementsByClassName("link");

        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("current");
            current[0].className = current[0].className.replace(" current", "");
            this.className += " current";
          });
        }