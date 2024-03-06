let btn = document.querySelector("#btn");
let btns = document.querySelector("#btns");
let input = document.querySelector("#input");
let msg = document.querySelector("#msg");

btn.onclick = function () {
  let inputvalue = input.value;
  msg.innerHTML = inputvalue;
  input.value = "";
};
btns.onclick = function () {
  msg.remove();
};
