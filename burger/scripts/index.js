import {Choose} from "../components/Choose.js";

const root = document.querySelector("#root");
const ChooseBurg = new Choose(root);

document.addEventListener("DOMContentLoaded", function () {
    ChooseBurg.render()
})
