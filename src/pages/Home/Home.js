import React from "react";
import { connect } from "react-redux";
import { addCountAC, subCountAC } from "../../redux/reducers/homeReducer";

const Home = (props) => {
  return (
    <div className="home">
      <div className="result">result: {props.counter}</div>
      <section className="buttons">
        <button onClick={props.onAdd} className="btn">Add</button>
        <button onClick={props.onSub} className="btn">Subtract</button>
      </section>
      <h1>{props.title}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.home.title,
    counter: state.home.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(addCountAC()),
    onSub: () => dispatch(subCountAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
