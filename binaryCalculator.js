var oneButton = document.getElementById("btn1");
var zeroButton = document.getElementById("btn0");

var clearButton = document.getElementById("btnClr");
var equalButton = document.getElementById("btnEql");

var sumButton = document.getElementById("btnSum");
var minusButton = document.getElementById("btnSub");
var multiplyButton = document.getElementById("btnMul");
var divButton = document.getElementById("btnDiv");

var screen = document.getElementById("res");

var result = "";
console.log(result);
var screenIsClear = true;

oneButton.addEventListener("click", function () {
  addToScreen("1");
});

zeroButton.addEventListener("click", function () {
  addToScreen("0");
});

sumButton.addEventListener("click", function () {
  addToScreen("+");
});

minusButton.addEventListener("click", function () {
  addToScreen("-");
});

multiplyButton.addEventListener("click", function () {
  addToScreen("*");
});

divButton.addEventListener("click", function () {
  addToScreen("/");
});

clearButton.addEventListener("click", function () {
  screen.innerHTML = "";
  result = "";
});

equalButton.addEventListener("click", function () {
  evaluate();
});

function addToScreen(val) {
  if (!screenIsClear) {
    screen.innerHTML = "";
    result = "";
    screenIsClear = true;
  }
  result = result.concat(val);
  screen.innerHTML = result;
}

function evaluate() {
  var s1 = "";
  var s2 = "";
  var index = 0;
  for (var i = 0; i < result.length; i++) {
    if (
      result.charAt(i) == "+" ||
      result.charAt(i) == "-" ||
      result.charAt(i) == "*" ||
      result.charAt(i) == "/"
    ) {
      index = i;
      break;
    }
    s1 = s1.concat(result.charAt(i));
  }

  s2 = result.substring(index + 1);
  var operator = result.charAt(index);

  screenIsClear = false;

  switch (operator) {
    case "+":
      {
        add(s1, s2);
      }
      break;
    case "-":
      {
        subtract(s1, s2);
      }
      break;
    case "*":
      {
        multiply(s1, s2);
      }
      break;
    case "/":
      {
        if (s2 == "0") {
          screen.innerHTML = "MATH ERROR";
          return;
        }
        divide(s1, s2);
      }
      break;
  }
}

function add(b1, b2) {
  var output = decimal(b1) + decimal(b2);
  screen.innerHTML = binary(output);
}

function subtract(b1, b2) {
  var output = decimal(b1) - decimal(b2);
  console.log(output);
  screen.innerHTML = binary(output);
}

function multiply(b1, b2) {
  var output = decimal(b1) * decimal(b2);
  screen.innerHTML = binary(output);
}

function divide(b1, b2) {
  var output = decimal(b1) / decimal(b2);
  screen.innerHTML = binary(output);
}

function binary(n) {
  if (n == 1) {
    return "1";
  }
  if (n == 0) {
    return "0";
  }
  return binary(Math.floor(n / 2)) + (n % 2);
}

function decimal(s) {
  console.log(s);
  var n = 0;
  var c = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == "1") {
      n = n + power(2, c);
    }
    c++;
  }
  return n;
}

function power(a, n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return a;
  }

  if (n % 2 == 0) {
    return power(a, n / 2) * power(a, n / 2);
  } else {
    return a * power(a, Math.floor(n / 2)) * power(a, Math.floor(n / 2));
  }
}
