function toggleButton() {
    var button = document.getElementById("toggleButton");
    if (button.innerText === "On") {
      button.innerText = "Off";
    } else {
      button.innerText = "On";
    }
  }