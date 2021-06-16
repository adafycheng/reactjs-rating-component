import React from 'react';

const containerStyle = {
    padding: '1em',
    display: 'flex',
    flexWrap: 'wrap'
}

const ratingStyle = {
    width: '150px'
}

let headingStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    width: '250px'
}

let subheadingStyle = {
    width: '250px'
}

let starStyle = {
//    color: 'green',
    fontSize: '1.5em',
    rowSpan: '2'
}

const RatingComponent = ({ heading, subheading, rate, headingColor='black', subheadingColor='grey', starColor='red' }) => {
    const final = [];
    headingStyle = {...headingStyle, color: headingColor};
    subheadingStyle = {...subheadingStyle, color: subheadingColor};
    starStyle = {...starStyle, color: starColor};
    /*
    if (starColor) {
      starStyle = {...starStyle, color: starColor};
    } else {
      starStyle = {...starStyle, color: 'green'};
    }
    */
    for (var i=1; i<=5; i++) {
        if (rate >=i) {
            final.push(<span style={starStyle}>&#9733;</span>);
        } else {
            final.push(<span style={starStyle}>&#9734;</span>);
        }
    }

    return (
        <div style={containerStyle}>
            <span>
              <div style={headingStyle}>{heading}</div>
              <div style={subheadingStyle}>{subheading}</div>
            </span>
            <span style={ratingStyle}>
                {final}
            </span>
        </div>
    )
}

export default RatingComponent

