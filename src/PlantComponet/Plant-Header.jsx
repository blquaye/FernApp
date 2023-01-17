import React from "react";

const header_h1_style = {
    fontSize: "6.2rem",
};

const header_img = {
    width: "100%",
    height: "47rem",
   
};

const header_text_box ={
    alignSelf: "center",
};

const header_text = {
    fontSize: "1.8rem",
    fontWeight: "lighter",
    marginTop: "2rem",
    marginBottom: "2rem",
    fontWeight: "400"
};

const btn ={
    fontSize: "2rem",
    borderRadius: ".5rem",
    padding: "1rem 3rem",
    backgroundColor: "#064635",
    textDecoration: "none",
    color: "white",
};




function Header(){
   return( <header>
            <div style={header_text_box}>
                <h1 style={header_h1_style}>We design and build better pottery, for a better life.</h1>
                <p style={header_text}> Our business is tailored to providing our customers with the best experience possible. We ensure that our
                    products are ubiquitous across all of our clients request. Making sure satisfaction is at the forefront of our 
                    business.
                </p>
                <a className='btn' href='#' style={btn}>shop here</a>

            </div>
            <img src="https://images.unsplash.com/photo-1583753075968-1236ccb83c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80" alt="plant" style={header_img} />
            </header>
   );
}

export {Header};