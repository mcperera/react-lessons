import React from "react";

//Important

function Joke(props) {
  const styles = {};

  if (props.answer == null) {
    styles.display = "none";
  }

  return (
    <div>
      <h3
        style={{
          display: props.questions ? "block" : "none",
          color: !props.answer && "#3238a8",
        }}
      >
        Questions: {props.questions}
      </h3>
      <h3 style={styles}>Answer: {props.answer}</h3>
      <h3 style={{ display: !props.another && "none" }}>
        Another: {props.another}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;
