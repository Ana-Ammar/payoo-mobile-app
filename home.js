// Reusable function
const transactionData = [];

function getInputValueNumber(id) {
  const getInputValue = document.getElementById(id).value;
  return getInputValue;
}

function getInnerText(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}

function setInnerText(value) {
  const availableBalance = document.getElementById("available-balance");
  availableBalance.innerText = value;
}

function alertMsg(acc, pin) {
  const validPin = 1234;

  if (acc.length < 11) {
    alert("Please provide valid Account number");
    return false;
  }

  if (pin !== validPin) {
    alert("please provide valid pin number");
    return false;
  }

  return true;
}


function toggleHandle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}


function btnBackgroundHandle(id) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove(
      "border-[#0874f2]",
      "bg-[#0874f20d]",
      "text-[#0874f2]"
    );
    btn.classList.add("border-[#0808081a]");
  }
  document.getElementById(id).classList.remove("border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}



// Add money features

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValueNumber("bank");
    const accNumber = getInputValueNumber("acc-number");
    const addAmount = parseInt(getInputValueNumber("add-amount"));

    if (addAmount <= 0) {
      alert("Invalid amount");
      return;
    }

    const pinNumber = parseInt(getInputValueNumber("add-pin"));

    let result = alertMsg(accNumber, pinNumber);
    if (result === false) {
      return;
    }

    const availableBalance = getInnerText("available-balance");

    const total = availableBalance + addAmount;

    setInnerText(total);


    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

  });


//   Cash out features

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accNumber = getInputValueNumber("agent-number");
  const pinNumber = parseInt(getInputValueNumber("withdraw-pin"));

  let result = alertMsg(accNumber, pinNumber);
  if (result === false) {
    return;
  }

  const withdrawAmount = parseInt(getInputValueNumber("withdraw-amount"));
  const availableBalance = getInnerText("available-balance");

  if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
    alert("Invalid amount");
    return;
  }

  const total = availableBalance - withdrawAmount;
  setInnerText(total);

  const data = {
      name: "Cashout",
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
});


// Transfer Money feature

document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const accNumber = getInputValueNumber("user-number");
    const pinNumber = parseInt(getInputValueNumber("transfer-pin"));

    let result = alertMsg(accNumber, pinNumber);
    if (result === false) {
      return;
    }

    const transferAmount = parseInt(getInputValueNumber("transfer-amount"));
    const availableBalance = getInnerText("available-balance");

    const total = availableBalance - transferAmount;
    setInnerText(total);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
  });

// Get bonus


// Pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accNumber = getInputValueNumber("biller-acc");
  const pinNumber = parseInt(getInputValueNumber("pin-number"));

  let result = alertMsg(accNumber, pinNumber);
  if (result === false) {
    return;
  }

  const payAmount = parseInt(getInputValueNumber("pay-amount"));
  const availableBalance = getInnerText("available-balance");

  if (payAmount <= 0 || payAmount > availableBalance) {
    alert("Invalid amount");
    return;
  }

  const newBalance = availableBalance - payAmount;
  setInnerText(newBalance);

  const data = {
      name: "Pay Bill",
      date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
});


// Transaction History

document.getElementById("transaction-sec").addEventListener('click', function(){
  const transactionContainer = document.getElementById("transaction-container")
  transactionContainer.innerText = '';

  for (const data of transactionData) {
      const div = document.createElement("div")
      div.innerHTML = `
      <div class="max-w-[400px] mx-auto bg-white flex items-center gap-2 rounded-xl px-4 py-3">
            <div class="p-3 bg-[#0808080d] rounded-full"><img src="./assets/wallet1.png" alt="" class=""></div>
            <div class="flex items-center justify-between w-full">
              <div>
              <label for="" class="font-semibold text-[#080808b3]">${data.name}</label>
              <p class="text-xs text-[#080808b3]">${data.date}</p>
            </div>
              <i class="fa-solid fa-ellipsis-vertical text-[#080808b3]"></i>
            </div>
          </div>

      `
      transactionContainer.appendChild(div)
  }
})

// Toggling Features

document.getElementById("add-money-sec").addEventListener("click", function () {
  toggleHandle("add-money-parent");
  btnBackgroundHandle("add-money-sec");
});

document.getElementById("cash-out-sec").addEventListener("click", function () {
  toggleHandle("cash-out-parent");
  btnBackgroundHandle("cash-out-sec");
});

document
  .getElementById("transfer-money-sec")
  .addEventListener("click", function () {
    toggleHandle("transfer-money-parent");
    btnBackgroundHandle("transfer-money-sec");
  });

document.getElementById("get-bonus-sec").addEventListener("click", function () {
  toggleHandle("get-bonus-parent");
  btnBackgroundHandle("get-bonus-sec");
});

document.getElementById("pay-bill-sec").addEventListener("click", function () {
  toggleHandle("pay-bill-parent");
  btnBackgroundHandle("pay-bill-sec");
});


document.getElementById("transaction-sec").addEventListener("click", function () {
  toggleHandle("transaction-parent");
  btnBackgroundHandle("transaction-sec");
});




// Log Out
document.getElementById("log-out").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
});
