/*app handling*/

//global variables
var lowerBound = 0,
  upperBound = 0,
  currentValue = 0;

//display handling
function welcomeToEntry() {
  document.getElementById("welcome-page").style = "display: none;";
  document.getElementById("entry-page").style = "";
}
function entryToApp() {
  lowerBound = document.getElementById("lower-bound").value;
  upperBound = document.getElementById("upper-bound").value;
  if (lowerBound == "-0" || lowerBound == "+0") {
    lowerBound = 0;
  }
  if (upperBound == "-0" || upperBound == "+0") {
    upperBound = 0;
  }
  var l1 = document.getElementById("lower-bound").value.length;
  var l2 = document.getElementById("upper-bound").value.length;
  if (l1 > 0 && l2 > 0 && lowerBound < upperBound) {
    document.getElementById("entry-page").style = "display: none;";
    document.getElementById("app-page").style = "";
    currentValue = lowerBound;
    document.getElementById("current-value").textContent = currentValue;
  } else {
    document.getElementById("invalid-bounds").textContent =
      "Invalid Bounds! Try Again";
  }
}
function resetAll() {
  document.getElementById("app-page").style = "display: none;";
  document.getElementById("dev-page").style = "display: none;";
  document.getElementById("entry-page").style = "display: none;";
  document.getElementById("welcome-page").style = "";
  document.getElementById("lower-bound").value = "";
  document.getElementById("upper-bound").value = "";
  document.getElementById("increment-value").value = "";
  document.getElementById("decrement-value").value = "";
  document.getElementById("invalid-bounds").textContent = "";
}
function toDevPage() {
  document.getElementById("app-page").style = "display: none;";
  document.getElementById("welcome-page").style = "display: none;";
  document.getElementById("entry-page").style = "display: none;";
  document.getElementById("dev-page").style = "";
}

//app handling
function increase(inc) {
  var diff = upperBound - lowerBound + 1;
  var result = (currentValue - lowerBound + (inc % diff)) % diff;
  return Number(result) + Number(lowerBound);
}
function decrease(dec) {
  dec = dec % (upperBound - lowerBound + 1);
  if(dec <= (currentValue - lowerBound))
  {
    return currentValue - dec;
  }
  else {
    dec = dec - (currentValue - lowerBound);
    return Number(upperBound - dec + 1);
  }
}
function increment() {
  currentValue = document.getElementById("current-value").textContent;
  var customInc = Number(document.getElementById("increment-value").value);
  var customIncObj = document.getElementById("increment-value");
  if (customIncObj.value.length == 0) {
    customInc = 1;
  }
  if (customInc < 0) {
    customIncObj.value = customIncObj.value * -1;
    currentValue = decrease(customInc * -1);
  } else {
    currentValue = increase(customInc);
  }
  document.getElementById("current-value").textContent = String(currentValue);
}
function decrement() {
  currentValue = document.getElementById("current-value").textContent;
  var customDec = Number(document.getElementById("decrement-value").value);
  var customDecObj = document.getElementById("decrement-value");
  if (customDecObj.value.length == 0) {
    customDec = 1;
  }
  if (customDec < 0) {
    customDecObj.value = customDecObj.value * -1;
    currentValue = increase(customDec * -1);
  } else {
    currentValue = decrease(customDec);
  }
  document.getElementById("current-value").textContent = String(currentValue);
}
