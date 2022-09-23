function openNav() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("nav").style.display = "block";
  document.getElementById("hamb").style.display = "none";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("close").style.display = "block";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("nav").style.display = "none";
  document.getElementById("hamb").style.display = "block";
  document.getElementById("close").style.display = "none";

}

