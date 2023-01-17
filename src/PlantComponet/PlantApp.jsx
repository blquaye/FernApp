import React from "react";
import { Header } from "./Plant-Header";
import { Section } from "./SpecialsSection";

const container = {
    // Applying rems to the browser.
    width: "96rem",
    margin: "0 auto"
}


function PlantApp(){
    return(
        <div style={container}>
            <Header />
            <Section />
        </div>
    );
};

export {PlantApp};