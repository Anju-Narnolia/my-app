// import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Textform(props) {
  const handelClick1 = () => {
    setCount("write here " + count);
    let newtext = count.toUpperCase();
    setCount(newtext);
    props.showAlert("success","Converted to uppercase!");
  };
  const handelClick2 = () => {
    setCount("write here " + count);
    let newtext = count.toLowerCase();
    setCount(newtext);
    props.showAlert("success","Converted to lowercase!");
  };
  const extraSpace = () => {
    let newTxt = count.split(/[ ]+/);
    setCount(newTxt.join(" "));
    props.showAlert("success","extra space removed!");
  };

  const handelClick3 = () => {
    setCount("");
    props.showAlert("success","text cleared!");
  };

  const handelClick4 = () => {
    var copyT = document.getElementById("myText");
    copyT.select();
    // copy.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(copy);
    document.execCommand("copy");
    alert("Text Copied!" + copyT.value);
    props.showAlert("success","text copied");
  };

  const handelOnChange = (e) => {
    setCount(e.target.value);
    // console.log(e.target.value);
  };

  const [count, setCount] = useState("Enter text here"); //defult text is useState

  return (
    <div style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3 container">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>{props.tittle}</h1>
          </label>
          <textarea
            className="form-control"
            id="myText"
            rows="10"
            value={count}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            // placeholder={count}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={handelClick1}
        >
          To Upercase
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={handelClick2}
        >
          To Lowecase
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={handelClick3}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={extraSpace}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={handelClick4}
        >
          Copy Text
        </button>
        <h1>Text summary</h1>
        <p>
          {count.split(" ").length} Words And {count.length}Character
        </p>
        <p>Maximum time to read {count.split(" ").length * 0.42} sec</p>
        <h2>Preview</h2>
        <p>{count}</p>
      </div>
    </div>
  );
}
