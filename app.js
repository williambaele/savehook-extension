





/* WEBHOOK SAVING FUNCTION*/
let input = document.querySelector("#formwebhook");
let webhookform = document.querySelector("#webhookform");
let discordwebhook = '';

webhookform.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
    input.classList.add('outline-red-600');
    input.value = "Please enter a value";
  }
  else {
  discordwebhook = input.value;
  input.classList.add('outline-green-600');
  // sendWebhookTest(discordwebhook);
  localStorage.setItem('discordwebhook', discordwebhook);
  console.log(discordwebhook + " has been saved for futur notifications.")
  input.value = discordwebhook;
  }
});




/* SETTING BTN TOOGLE */
document.querySelector("#urlwebhook").addEventListener("click", function() {
  var x = document.getElementById("formwebhook");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
