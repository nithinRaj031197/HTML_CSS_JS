const inputElements = document.querySelectorAll(".input");

inputElements.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const val = e.target.value;
    if (isNaN(val)) {
      input.value = "";
      return;
    }

    const nextInput = input.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      input.value = "";
      const prevInput = input.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});
