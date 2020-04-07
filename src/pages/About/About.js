import React from "react";
import { connect } from "react-redux";

const About = (props) => {
  return <h1>{props.title}</h1>;
};

const mapStateToProps = (state) => {
  return {
    title: state.about.title,
  };
};

export default connect(mapStateToProps)(About);
