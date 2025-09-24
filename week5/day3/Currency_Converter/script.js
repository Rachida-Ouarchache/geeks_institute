const API_KEY = "03c8210c75db0ce156d93d01";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");

async function loadCurrencies() {
  try {
    const res = await fetch(`${BASE_URL}/codes`);
    const data = await res.json();

    if (data.result === "success") {
      data.supported_codes.forEach(([code, name]) => {
        let option1 = new Option(`${code} - ${name}`, code);
        let option2 = new Option(`${code} - ${name}`, code);
        fromCurrency.add(option1);
        toCurrency.add(option2);
      });
      fromCurrency.value = "USD";
      toCurrency.value = "EUR";
    }
  } catch (error) {
    console.error("Error loading currencies:", error);
  }
}

loadCurrencies();

async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = amountInput.value;

  try {
    const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await res.json();

    if (data.result === "success") {
      result.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } else {
      result.textContent = "Error fetching conversion rate.";
    }
  } catch (error) {
    result.textContent = "Error: " + error.message;
  }
}

convertBtn.addEventListener("click", convertCurrency);

const switchBtn = document.getElementById("switchBtn");

switchBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  convertCurrency();
});
