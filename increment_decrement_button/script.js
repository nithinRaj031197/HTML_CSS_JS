//reset

const counterElement = document.querySelector("#number");

const numberInputElement = document.querySelector("#increment");

const incrementButtonElement = document.querySelector("#add");

const decrementButtonElement = document.querySelector("#subtract");

const resetButtonElement = document.querySelector("#reset");

incrementButtonElement.addEventListener("click", () => {
  const prevCount = parseInt(counterElement.textContent);
  const incrementer = parseInt(numberInputElement.value);

  const total = prevCount + incrementer;

  counterElement.textContent = total;
});

decrementButtonElement.addEventListener("click", () => {
  const prevCount = parseInt(counterElement.textContent);
  const decrementer = parseInt(numberInputElement.value);

  const subtract = prevCount - decrementer;
  counterElement.textContent = subtract;
});

resetButtonElement.addEventListener("click", () => {
  counterElement.textContent = 0;
});
