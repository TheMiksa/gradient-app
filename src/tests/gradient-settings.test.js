import React from "react";
import { unmountComponentAtNode} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {act} from "react-dom/test-utils";
import {render} from "@testing-library/react";
import GradientSettings from "../components/gradient-settings";

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
    container = 0;
    localStorage.removeItem("gradientsList");
    gradientsList = null;
});

it("Should have right colors", () => {
   act(() => {
       render(<Router><GradientSettings id="newId" firstClr="abcdef" secondClr="012345"/></Router>, container);
   });
   expect(document.querySelector(".input-box").childNodes[0].childNodes[1].value).toBe("abcdef");
   expect(document.querySelector(".input-box").childNodes[1].childNodes[1].value).toBe("012345");
});

it("btn-gradient must to be active and btn-disabled not be active", () => {
    act(() => {
        render(<Router><GradientSettings id="50" firstClr="abcdef" secondClr="012345"/></Router>, container);
        document.querySelector(".btn-box").childNodes[0].click();
    });
    expect(document.querySelector(".btn-gradient")).toBeTruthy();
    expect(document.querySelector(".btn-disabled")).toBeFalsy();
});
it("added new gradient", () => {
    act(() => {
        render(<Router><GradientSettings id="50" firstClr="abcdef" secondClr="012345"/></Router>, container);
        document.querySelector(".btn-box").childNodes[0].click();
    });
    const curGrad = JSON.parse(localStorage.getItem("gradientsList")).find((el) => el.id === "50");
    expect(curGrad).toBeTruthy();
    expect(curGrad.firstColor === "#abcdef").toBeTruthy();
    expect(curGrad.secondColor === "#012345").toBeTruthy();
});
it("btn-disabled is active", () => {
    const gradListLength = JSON.parse(localStorage.getItem("gradientsList"));
    act(() => {
        render(<Router><GradientSettings/></Router>, container);
    });
    expect(document.querySelector(".btn-box").childNodes[0].className).toBe("btn btn-disabled");
});
