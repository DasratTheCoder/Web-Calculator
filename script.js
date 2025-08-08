const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");
let input = "";
btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      input = input
        .replace(/÷/g, "/")
        .replace(/×/g, "*")
        .replace(/−/g, "-")
        

      try {
        let result = eval(input);
        input = result.toString();
        screen.textContent = input;
      } catch (e) {
        screen.textContent = "error";
        input = "";
      }
      return;
    } else if (button.textContent == "C") {
      screen.textContent = "0";
      input = "";
      return;
    }
    input += button.textContent;
    screen.textContent = input;
  });
});