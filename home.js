// Add money features

const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accNumber = document.getElementById("acc-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);

    if (accNumber.length < 11) {
      alert("Please provide valid Account number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const total = availableBalance + addAmount;

    document.getElementById("available-balance").innerText = total;
  });


//   Cash out features

const validPin2 = 1234;

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    
    const bank = document.getElementById("bank").value;
    const accNumber = document.getElementById("agent-number").value;
    const pinNumber = parseInt(document.getElementById("withdraw-pin").value);

    if (accNumber.length < 11) {
      alert("Please provide valid Account number");
      return;
    }

    if (pinNumber !== validPin2) {
      alert("please provide valid pin number");
      return;
    }

    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    const total = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = total;

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
