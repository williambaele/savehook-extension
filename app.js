/* GET CURRENT URL */
function getCurrentURL(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var url = tabs[0].url;
    callback(url);
  });
}

/***************************************************************************/
                              /* SETTINGS */
/***************************************************************************/
/* SEND WEBHOOK TEST FUNCTION */
function sendWebhookTest(discordwebhook) {
  let url = discordwebhook;
  const params = {
    username: "SaveHook",
    avatar_url: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    content: "Your webhook works well ✅"
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(params)
  };
  fetch(url, requestOptions);
}

/* WEBHOOK SAVING FUNCTION */
let input = document.querySelector("#formwebhook");
let webhookform = document.querySelector("#webhookform");
let discordwebhook = localStorage.getItem('discord') || '';

webhookform.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value == ''){
    input.classList.add('outline-red-600');
    input.value = "Please enter a value";
  }
  else {
  discordwebhook = input.value;
  localStorage.setItem('discord', discordwebhook);
  input.classList.add('outline-green-600');
  sendWebhookTest(discordwebhook);
  console.log(discordwebhook + " has been saved for futur notifications.")
  }
});

/* NEW WEBSITE */
function newWebsite(discordwebhook) {
  let url = discordwebhook;
  let description = document.querySelector("#description");
  let content = description.value

  getCurrentURL(function(websiteUrl) {
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
    const params = {
      "embeds": [{
        "footer": {
          "text": "Tool coded by William Baele",
          "icon_url": "https://avatars.githubusercontent.com/u/83872057?v=4"
        },
        "username": "SaveHook",
        "color": hexToDecimal("#00FF00"),
        "thumbnail": {
          "url": "https://logowik.com/content/uploads/images/discord-new-20218785.jpg"
        },
        "title": "New website saved ✅",
        "description": `${content} \n ${websiteUrl}`
      }]
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(params)
    };
    fetch(url, requestOptions);
  });
}


/* WEBSITE DATA FORM */
let inputWebsite = document.querySelector("#description");
let websiteform = document.querySelector("#websiteform");
websiteform.addEventListener('submit', (e) => {
  e.preventDefault();

  if(inputWebsite.value == ''){
    inputWebsite.classList.add('outline-red-600');
  }
  else {
    inputWebsite.classList.add('outline-green-600');
    console.log(discordwebhook);
    newWebsite(discordwebhook);
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
