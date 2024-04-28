function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(inputRef.value);
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert("Enter a number between 1 and 100");
    return;
  }
  destroyBoxes();

  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
      margin-bottom: 10px;
    `;
    boxes.push(box);
    size += 10;
  }

  boxesRef.append(...boxes);
  inputRef.value = "";
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
