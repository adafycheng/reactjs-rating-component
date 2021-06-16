import React from 'react'

import RatingComponent from 'reactjs-rating-component'
import 'reactjs-rating-component/dist/index.css'


const App = () => {
  return <>
    <RatingComponent heading="C#" subheading="6 months" rate="2" starColor="purple" />
    <RatingComponent heading="Java" subheading="11 years" rate="4" />
    <RatingComponent heading="JavaScript" subheading="10 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
    <RatingComponent heading="Node.js" subheading="6 months" rate="3" starColor="purple" />
    <RatingComponent heading="React" subheading="6 months" rate="2" starColor="purple" />
  </>
}

export default App
