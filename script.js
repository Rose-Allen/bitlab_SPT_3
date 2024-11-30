function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const currency = document.getElementById("currency").value;

  const rates = {
    USD: { buy: 429, sell: 431 },
    EUR: { buy: 507, sell: 509 },
  };

  let kzt = "-";
  let usd = "-";
  let eur = "-";

  if (currency === "KZT") {
    usd = (amount / rates.USD.sell).toFixed(2);
    eur = (amount / rates.EUR.sell).toFixed(2);
    kzt = amount.toFixed(2);
  } else if (currency === "USD") {
    kzt = (amount * rates.USD.buy).toFixed(2);
    eur = ((amount * rates.USD.buy) / rates.EUR.sell).toFixed(2);
    usd = amount.toFixed(2);
  } else if (currency === "EUR") {
    kzt = (amount * rates.EUR.buy).toFixed(2);
    usd = ((amount * rates.EUR.buy) / rates.USD.sell).toFixed(2);
    eur = amount.toFixed(2);
  }

  document.getElementById("kzt").innerText = kzt;
  document.getElementById("usd").innerText = usd;
  document.getElementById("eur").innerText = eur;
}
