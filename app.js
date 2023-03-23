console.log("Hi");


document.querySelector("#urlwebhook").addEventListener("click", function() {
  var x = document.getElementById("formwebhook");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
