import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
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