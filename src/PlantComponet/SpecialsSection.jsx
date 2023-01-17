import React from "react";

const feature_title ={
  fontSize: "4rem",
  marginTop: "5rem",
  marginBottom: "5rem"
};

const feature_text ={
    fontSize: "2.5rem",
    marginBottom: "1rem"
};

const feature_content = {
    fontSize: "1.3rem",
};

function Section(){
   return (
        <section>
            <h2 style={feature_title}>What makes our pottery so special</h2>
            <div className="grid-3-cols">
                <div>
                <p style={feature_text}>
                    <strong>Science meets design</strong>
                </p>
                <p style={feature_content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas expedita cupiditate eveniet quis fugiat voluptatibus, quia at labore, ab a illo repellendus commodi suscipit eligendi aliquid, nulla non rerum!
                </p>
                </div>
                <div>
                <p style={feature_text}>
                    <strong>Science meets design</strong>
                </p>
                <p style={feature_content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas expedita cupiditate eveniet quis fugiat voluptatibus, quia at labore, ab a illo repellendus commodi suscipit eligendi aliquid, nulla non rerum!
                </p>
                </div>
                <div>
                <p style={feature_text}>
                    <strong>Science meets design</strong>
                </p>
                <p style={feature_content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas expedita cupiditate eveniet quis fugiat voluptatibus, quia at labore, ab a illo repellendus commodi suscipit eligendi aliquid, nulla non rerum!
                </p>
                </div>
            </div>
        </section>
   );
}

export {Section};