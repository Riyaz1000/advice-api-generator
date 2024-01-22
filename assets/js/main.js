// Write your javascript code here
const blockQuoteEl = document.querySelector("blockquote > p");

const buttonEl = document.getElementById("btn");

//https://api.adviceslip.com/advice

const apiUrl = "https://api.adviceslip.com/advice";

buttonEl.style.display = "none";

buttonEl.addEventListener("click", () => {
  window.location.href = "/";
});

async function getAdviceData() {
  try {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    return jsonData;
    console.log(jsonData);
  } catch (error) {
    console.error("some errors", error);
  }
}

const adviceData = await getAdviceData();
console.log(adviceData);

blockQuoteEl.textContent = adviceData.slip.advice;

buttonEl.style.display = "block";
