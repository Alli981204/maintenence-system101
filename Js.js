function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  








  
  //typing 


  
  var i=0; // initialize counter at 0
  text = "How can we help you?"; //var named text - to be typed
  



  function typing(){
    if(i<text.length){ //if var i is less than the length  of the the text var then append the character
      document.getElementById("typo").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,90);
    }
  }

  typing();


  function highlight(element){
  document.this.style.color = "black";
  }

