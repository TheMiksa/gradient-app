import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {shallow} from "enzyme";
import {BrowserRouter as Router} from "react-router-dom";
import Gradient from "../components/gradient";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Should to return Gradient which includes these properties.', () => {
    const onDeleteGradient = (id) => console.log(`Gradient ${id} deleted`);

    act(() => {
        render(<Router><Gradient id="id1" firstColor="#firstС" secondColor="#secondС" onDeleteGradient={onDeleteGradient}/></Router>, container);
    });
    expect(document.getElementById("id1").id).toBe("id1");
    expect(document.querySelector(".colors").childNodes[0].textContent).toBe("#firstС");
    expect(document.querySelector(".colors").childNodes[1].textContent).toBe("#secondС");

});

it ('Should to return the right text colors.', () => {
    act(() => {
        render(<Router><Gradient id="id1" firstColor="#fff" secondColor="#aaf" /></Router>, container);
    });
    expect(document.querySelector(".colors").childNodes[0].style.color).toBe("black");
    expect(document.querySelector(".colors").childNodes[1].style.color).toBe("white");

    act(() => {
        render(<Router><Gradient id="id1" firstColor="#000" secondColor="#f0f" /></Router>, container);
    });
    expect(document.querySelector(".colors").childNodes[0].style.color).toBe("white");
    expect(document.querySelector(".colors").childNodes[1].style.color).toBe("white");

    act(() => {
        render(<Router><Gradient id="id1" firstColor="#0f0" secondColor="#fff" /></Router>, container);
    });
    expect(document.querySelector(".colors").childNodes[0].style.color).toBe("white");
    expect(document.querySelector(".colors").childNodes[1].style.color).toBe("black");
});

describe("text", () => {
    let container = null
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);

        const gradientsListClone = [{id: 5, firstColor: "#f1f1f3", secondColor: "#0ff0a1"}];
        localStorage.setItem("gradientsListClone", JSON.stringify(gradientsListClone));


        const onDeleteGradient = (id) => {
            const gradListClone = JSON.parse(localStorage.getItem("gradientsListClone"));
            const newGradientsList = gradListClone.filter((el) => el.id !== id);
            localStorage.setItem("gradientsListClone", JSON.stringify(newGradientsList));
        };

        render(<Router><Gradient id="id1" firstColor="#0f0" secondColor="#fff" onDeleteGradient={() => onDeleteGradient(5)}/></Router>, container);
    });

    afterEach(() => {
        localStorage.removeItem("gradientsListClone");
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    it('Should to', () => {
        document.querySelector(".btn-delete").click();
        expect(JSON.parse(localStorage.getItem("gradientsListClone")).includes(el => el.id === 5)).toBe(false);

    });
});
