import React, { useState } from "react";
export default function About(props) {
  let changeMode = () => {
    if (myStyle.color === "black") {
      newStyle({
        color: "white",
        backgroundColor: "black",

        border: "1px solid gray",
      });
      setText("Enable whiteMode");
    } else {
      newStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid gray",
      });
      setText("Enable DarkMode");
    }
  };
  const [btnText, setText] = useState("Enable DarkMode");
  const [myStyle, newStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid",
  });
  return (
    <div className="container my-4" style={myStyle}>
      <div
        className="accordion accordion-flush container my-4 py-2"
        id="accordionFlushExample"
      >
        <h1 className="container" style={myStyle}>
          About Me
        </h1>
        <div className="accordion-item my-4" style={myStyle}>
          <h2
            className="accordion-header"
            id="flush-headingOne"
            style={myStyle}
          >
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item my-4" style={myStyle}>
          <h2
            className="accordion-header"
            id="flush-headingTwo"
            style={myStyle}
          >
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item my-4" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed "
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button
          type="button"
          className="btn btn-success mx-3  my-4"
          onClick={changeMode}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
