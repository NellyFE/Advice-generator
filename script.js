const diceBtn = document.getElementById("dice-div");
const adviceContainer = document.getElementById("the-advice");
const adviceNum = document.getElementById("num");

const loadingSpinner = document.getElementById("loadingSpinner");

const adviceUrl =
  "https://proxy.corsfix.com/?https://api.adviceslip.com/advice";

const fetchingAdvice = async () => {
  loadingSpinner.style.display = "block";
  adviceContainer.innerText = ""; 
  adviceNum.innerText = "";

  try {
    diceBtn.disabled = true;
    const response = await fetch(adviceUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
    });
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
    diceBtn.disabled = false;
  }
};

diceBtn.addEventListener("click", fetchingAdvice);
