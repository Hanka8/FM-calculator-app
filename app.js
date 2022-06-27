//calculator functionality
const result = document.getElementById("result");

const numbers = document.querySelectorAll(".number");
const btns = document.querySelectorAll(".btn");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");

const del = document.querySelector(".delete");
const reset = document.querySelector(".reset");

const equals = document.querySelector(".equals");


let storedValue1 = "";
let storedValue2 = "";
let storedValue3 = "";
let operator = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let classes = Object.values(btn.classList);
    if (classes.includes("number")) {
      storedValue1 += btn.textContent;
      result.textContent = Number(storedValue1);
    } else if (classes.includes("plus")) {
      storedValue2 = storedValue1;
      storedValue1 = "";
      operator = "plus";
    } else if (classes.includes("minus")) {
      storedValue2 = storedValue1;
      storedValue1 = "";
      operator = "minus";
    } else if (classes.includes("divide")) {
      storedValue2 = storedValue1;
      storedValue1 = "";
      operator = "divide";
    } else if (classes.includes("multiply")) {
      storedValue2 = storedValue1;
      storedValue1 = "";
      operator = "multiply";
    } else if (classes.includes("equals")) {
        if (operator == "plus") {
          storedValue3 = Number(storedValue2) + Number(storedValue1);
        } else if (operator =="minus") {
          storedValue3 = Number(storedValue2) - Number(storedValue1);
        } else if (operator =="divide") {
          storedValue3 = Number(storedValue2) / Number(storedValue1);
        } else if (operator =="multiply") {
          storedValue3 = Number(storedValue2) * Number(storedValue1);
        } else {
          storedValue3 = storedValue1;
        }
      operator = "";
      storedValue1 = storedValue3;
      result.textContent = storedValue3;
    } else if (classes.includes("reset")) {
      storedValue1 = "";
      storedValue2 = "";
      storedValue3 = "";
      operator = "";
      result.textContent = 0;
    } else if (classes.includes("delete")) {
      storedValue1 = storedValue1.toString().slice(0, -1);
      result.textContent = storedValue1;
    }
  });
});

// changing theme
const first = document.getElementById("1");
const second = document.getElementById("2");
const third = document.getElementById("3");

first.addEventListener("click", () => {
  if (first.checked) {
    document.documentElement.style.setProperty(`--${"main-background"}`, `hsl(222, 26%, 31%)`);
    document.documentElement.style.setProperty(`--${"toggle-background"}`, `hsl(223, 31%, 20%)`);
    document.documentElement.style.setProperty(`--${"screen-background"}`, `hsl(224, 36%, 15%)`);
    document.documentElement.style.setProperty(`--${"del-background"}`, `hsl(225, 21%, 49%)`);
    document.documentElement.style.setProperty(`--${"del-shadow"}`, `hsl(224, 28%, 35%)`);
    document.documentElement.style.setProperty(`--${"equals-background"}`, `hsl(6, 63%, 50%)`);
    document.documentElement.style.setProperty(`--${"equals-shadow"}`, `hsl(6, 70%, 34%)`);
    document.documentElement.style.setProperty(`--${"key-background"}`, `hsl(30, 25%, 89%)`);
    document.documentElement.style.setProperty(`--${"key-shadow"}`, `hsl(28, 16%, 65%)`);
    document.documentElement.style.setProperty(`--${"key-text"}`, `hsl(221, 14%, 31%)`);
    document.documentElement.style.setProperty(`--${"equals-text"}`, `hsl(0, 0%, 100%)`);
    document.documentElement.style.setProperty(`--${"display-text"}`, `hsl(0, 0%, 100%)`);
    document.documentElement.style.setProperty(`--${"hover-key"}`, `#fffffe`);
    document.documentElement.style.setProperty(`--${"hover-reset"}`, `#a2b2e1`);
    document.documentElement.style.setProperty(`--${"hover-equals"}`, `#f96b5b`);
  }
})

second.addEventListener("click", () => {
    if (second.checked) {
     document.documentElement.style.setProperty(`--${"main-background"}`, `hsl(0, 0%, 90%)`);
     document.documentElement.style.setProperty(`--${"toggle-background"}`, `hsl(0, 5%, 81%)`);
     document.documentElement.style.setProperty(`--${"screen-background"}`, `hsl(0, 0%, 93%)`);
     document.documentElement.style.setProperty(`--${"del-background"}`, `hsl(185, 42%, 37%)`);
     document.documentElement.style.setProperty(`--${"del-shadow"}`, `hsl(185, 58%, 25%)`);
     document.documentElement.style.setProperty(`--${"equals-background"}`, `hsl(25, 98%, 40%)`);
     document.documentElement.style.setProperty(`--${"equals-shadow"}`, `hsl(25, 99%, 27%)`);
     document.documentElement.style.setProperty(`--${"key-background"}`, `hsl(45, 7%, 89%)`);
     document.documentElement.style.setProperty(`--${"key-shadow"}`, `hsl(35, 11%, 61%)`);
     document.documentElement.style.setProperty(`--${"key-text"}`, `hsl(221, 14%, 31%)`);
     document.documentElement.style.setProperty(`--${"equals-text"}`, `hsl(60, 10%, 19%)`);
     document.documentElement.style.setProperty(`--${"display-text"}`, `hsl(221, 14%, 31%)`);
     document.documentElement.style.setProperty(`--${"hover-key"}`, `#ffffff`);
     document.documentElement.style.setProperty(`--${"hover-reset"}`, `#62b5bc`);
     document.documentElement.style.setProperty(`--${"hover-equals"}`, `#ff8a38`);
   }
})

third.addEventListener("click", () => {
    if (third.checked) {
     document.documentElement.style.setProperty(`--${"main-background"}`, `hsl(268, 75%, 9%)`);
     document.documentElement.style.setProperty(`--${"toggle-background"}`, `hsl(268, 71%, 12%)`);
     document.documentElement.style.setProperty(`--${"screen-background"}`, `hsl(281, 89%, 26%)`);
     document.documentElement.style.setProperty(`--${"del-background"}`, `hsl(285, 91%, 52%)`);
     document.documentElement.style.setProperty(`--${"del-shadow"}`, `hsl(290, 70%, 36%)`);
     document.documentElement.style.setProperty(`--${"equals-background"}`, `hsl(176, 100%, 44%)`);
     document.documentElement.style.setProperty(`--${"equals-shadow"}`, `hsl(177, 92%, 70%)`);
     document.documentElement.style.setProperty(`--${"key-background"}`, `hsl(268, 47%, 21%)`);
     document.documentElement.style.setProperty(`--${"key-shadow"}`, `hsl(290, 70%, 36%)`);
     document.documentElement.style.setProperty(`--${"key-text"}`, `hsl(52, 100%, 62%)`);
     document.documentElement.style.setProperty(`--${"equals-text"}`, `hsl(198, 20%, 13%)`);
     document.documentElement.style.setProperty(`--${"display-text"}`, `hsl(52, 100%, 62%)`);
     document.documentElement.style.setProperty(`--${"hover-key"}`, `#6b34ac`);
     document.documentElement.style.setProperty(`--${"hover-reset"}`, `#8631af`);
     document.documentElement.style.setProperty(`--${"hover-equals"}`, `#93fff8`);
   }
})
