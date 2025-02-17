const diceBtn = document.getElementById("dice-div");
const adviceContainer = document.getElementById("the-advice");
const adviceNum = document.getElementById("num");
const diceImage = document.getElementById("dice");
const loadingSpinner = document.getElementById("loadingSpinner");
// const spin = document.getElementById('spin');

const adviceUrl = "https://api.adviceslip.com/advice";

const fetchingAdvice = async () => {
  loadingSpinner.style.display = "block";
  diceImage.style.display = "none";
  adviceContainer.innerText = "";
  adviceNum.innerText = "";

  try {
    diceBtn.disabled = true;
    const response = await fetch(adviceUrl);
    if (response.ok) {
      const resData = await response.json();
      console.log(resData.slip.advice);
      adviceContainer.innerText = resData.slip.advice;
      adviceNum.innerText = resData.slip.id;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("ran");
    loadingSpinner.style.display = "none";
    diceImage.style.display = "block";

    diceBtn.disabled = false;
  }
};

diceBtn.addEventListener("click", fetchingAdvice);
