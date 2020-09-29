 var dots = document.getElementById("dots");
 var moreText = document.getElementById("more");
 var btn = document.getElementById("btn");
 
function toggle() { 
if(dots.style.display === "none"){
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerHTML = "Read more"; 
  }

 else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerHTML = "Read less"; 
  }
}
