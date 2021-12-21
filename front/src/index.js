import "./style.css";
import json from "./data.json5";

console.log(json.title);
console.log(json.owner.name);
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello from WebPack";

  return element;
}

document.body.appendChild(component());
