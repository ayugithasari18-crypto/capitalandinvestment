const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxb98I14uoAxAThYDXJwKMD8Y8aW-B8FROYlndmunR-mlmFrNjuqUqRBz8oliyz6hnt/exec";

window.addEventListener("DOMContentLoaded", () => {
  fetch(GAS_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      document.getElementById("bank-name").textContent = data.bank;
      document.getElementById("account-name").textContent = data.name;
      document.getElementById("account-number").textContent = data.account;
    });

  document.getElementById("copy-btn").addEventListener("click", () => {
    const accountNumber = document.getElementById("account-number").textContent;
    navigator.clipboard.writeText(accountNumber).then(() => {
      const note = document.getElementById("copy-notification");
      note.classList.remove("hidden");
      setTimeout(() => note.classList.add("hidden"), 3000);
    });
  });
});
