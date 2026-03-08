let account = {
  balance: 100,
  history: []
};

// Mise à jour du solde et historique
function update() {
  document.getElementById("balance").textContent = account.balance;
  const historyEl = document.getElementById("history");
  historyEl.innerHTML = "";
  account.history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyEl.appendChild(li);
  });
}

// Paiement sans contact simulé
function payContact() {
  const amount = Number(document.getElementById("paymentAmount").value);
  if(amount > 0 && amount <= account.balance){
    account.balance -= amount;
    account.history.push(`Paiement sans contact -${amount} Civora`);
    alert("📶 Paiement accepté ✔");
    update();
  } else {
    alert("Montant invalide ou solde insuffisant");
  }
}

// Virement vers un autre compte
function transfer() {
  const receiver = document.getElementById("receiver").value;
  const amount = Number(document.getElementById("transferAmount").value);
  if(receiver && amount > 0 && amount <= account.balance){
    account.balance -= amount;
    account.history.push(`Virement de -${amount} Civora vers ${receiver}`);
    alert(`💸 Virement de ${amount} Civora envoyé à ${receiver}`);
    update();
  } else {
    alert("Erreur : destinataire vide ou solde insuffisant");
  }
}

// Mode banque caché
function addMoney() {
  const code = prompt("Entrer le code banque");
  if(code === "civora"){
    const amount = Number(prompt("Montant à ajouter"));
    account.balance += amount;
    account.history.push(`+${amount} Civora ajouté par la banque`);
    alert("💰 Argent ajouté avec succès !");
    update();
  } else {
    alert("❌ Code incorrect");
  }
}

// Initialisation
update();
