import React from "react";

const containerStyle = {
  padding: "1em",
  display: "flex",
  flexWrap: "wrap",
};

const ratingStyle = {
  width: "120px",
};

let headingStyle = {
  fontSize: "1em",
  fontWeight: "bold",
  width: "180px",
};

let subheadingStyle = {
  width: "180px",
};

let starStyle = {
  fontSize: "1em",
  rowSpan: "2",
};

const RatingComponent = ({
  heading,
  subheading,
  rate,
  headingColor = "black",
  subheadingColor = "grey",
  starColor = "red",
}) => {
  const final = [];
  headingStyle = { ...headingStyle, color: headingColor };
  subheadingStyle = { ...subheadingStyle, color: subheadingColor };
  starStyle = { ...starStyle, color: starColor };

  // Draw the stars
  for (let i = 1; i <= 5; i++) {
    if (rate >= i) {
      final.push(
        <span style={starStyle} key={heading + " " + i}>
          &#9733;
        </span>
      );
    } else {
      final.push(
        <span style={starStyle} key={heading + " " + i}>
          &#9734;
        </span>
      );
    }
  }

  return (
    <div style={containerStyle}>
      <span>
        <div style={headingStyle}>{heading}</div>
        <div style={subheadingStyle}>{subheading}</div>
      </span>
      <span style={ratingStyle}>{final}</span>
    </div>
  );
};

export default RatingComponent;
