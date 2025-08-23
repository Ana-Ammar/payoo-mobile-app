// Reusable function

function getInputValueNumber (id) {
  const getInputValue = document.getElementById(id).value
  return getInputValue;
}

function getInnerText (id) {
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}

function setInnerText (value) {
  const availableBalance = document.getElementById("available-balance")
  availableBalance.innerText = value;
}

const validPin = 1234;

// Add money features

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValueNumber("bank");
    const accNumber = getInputValueNumber("acc-number");
    const addAmount = parseInt(getInputValueNumber("add-amount"));
    const pinNumber = parseInt(getInputValueNumber("add-pin"));

    if (accNumber.length < 11) {
      alert("Please provide valid Account number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("please provide valid pin number");
      return;
    } 

    const availableBalance = getInnerText("available-balance");

    const total = availableBalance + addAmount;

    setInnerText(total);
  });


//   Cash out features

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    
    const bank = getInputValueNumber("bank");
    const accNumber = getInputValueNumber("agent-number");
    const pinNumber = parseInt(getInputValueNumber("withdraw-pin"));

    if (accNumber.length < 11) {
      alert("Please provide valid Account number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("please provide valid pin number");
      return;
    } 

    const withdrawAmount = parseInt(getInputValueNumber("withdraw-amount"));
    const availableBalance = getInnerText("available-balance");

    const total = availableBalance - withdrawAmount;
    setInnerText(total);

  });


// Toggling Features

document.getElementById("add-money-sec").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out-sec").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});


// Log Out
document.getElementById("log-out").addEventListener('click', function(e){
  e.preventDefault();
  window.location.href = "./index.html"
})