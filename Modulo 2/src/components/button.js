import "./button.scss";
export default class Button {
  create() {
    const button = document.createElement("button");
    button.innerText = "Clique aqui";
    button.classList.add("btn");
    document.querySelector("body").appendChild(button);
  }
}
