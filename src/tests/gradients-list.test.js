import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {act} from "@testing-library/react";
import {render, unmountComponentAtNode} from "react-dom";
import GradientsList from "../components/gradients-list";

let container = null;
let gradientsList = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    gradientsList = [
        {id: "50", firstColor: "#f1a1f3", secondColor: "#0ff0a1"},
        {id: "51", firstColor: "#f1f1f3", secondColor: "#fff0a1"},
        {id: "52", firstColor: "#11f1f3", secondColor: "#0ffba1"},
        {id: "53", firstColor: "#f1f1f3", secondColor: "#0cf0a1"},
   ];
    localStorage.setItem("gradientsList", JSON.stringify(gradientsList));
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    gradientsList = null;
    localStorage.removeItem("gradientsList");
});

it('should to return gradients list', () => {
    act(() => {
        render(<Router><GradientsList/></Router>, container);
    })
    expect(document.querySelector(".gradients-list").childNodes.length).toEqual(4);
    expect(document.querySelector(".gradient").className).toBe("gradient");
    expect(document.querySelector(".gradient").childNodes[1].childNodes[1].textContent)
        .toBe("#0ff0a1");
});