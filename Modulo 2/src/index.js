import fileJson from "./assets/files/arquivo.json";
import fileText from "./assets/files/arquivo.txt";
import Image from "./components/Image";
import Button from "./components/button";
import Title from "./components/title";
import "./styles/warning.css";
import Warning from "./templates/warning.html";

const title = new Title();
title.create("primeira pagina");
const image = new Image();
image.insertBlobImage();
const button = new Button();
button.create();

let obj = {
  name: "italo",
  age: 25,
};

let { name, age, ...teste } = obj;

console.log(name);
console.log(age);
console.log(teste);

const body = document.querySelector("body");
body.innerHTML += Warning;

const arquivoTxt = fileText;
console.log(arquivoTxt.toUpperCase());

const arquivoJson = fileJson;
console.log(fileJson);
