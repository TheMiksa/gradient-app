if (!localStorage.getItem("gradientsList")) {
    const gradientsList = [
        {
            id: "ssfd1345",
            firstColor: "#FFC300",
            secondColor: "#F0F000"
        },
        {
            id: "ssfd1346",
            firstColor: "#1FC300",
            secondColor: "#FF0FFF"
        },
        {
            id: "ssfd1347",
            firstColor: "#FFC3F0",
            secondColor: "#0FFFFF"
        }
    ];
    localStorage.setItem("gradientsList", JSON.stringify(gradientsList));
}