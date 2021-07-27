function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  var i=0;
  text = "How can we help you?";
  
  function typing(){
    if(i<text.length){
      document.getElementById("typo").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,90);
    }
  }

  typing();