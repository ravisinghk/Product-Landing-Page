function myFunction(x) {
    if (x.matches) { // If media query matches
      let logoText = document.getElementById("logo-text");
      logoText.innerText = "SG";
    } 
    else{
        let logoText = document.getElementById("logo-text");
        logoText.innerText = "SAMAGEEK";
    }
  }
  
  var x = window.matchMedia("(max-width: 630px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
