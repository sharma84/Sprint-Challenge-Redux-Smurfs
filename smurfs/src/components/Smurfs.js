import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";
import "./App.css";

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }
  render() {
    return (
      <div>
        {this.props.smurfs.map((smurf) => (
          <div key={smurf.id} className="Form">
            <h1>Name: {smurf.name}</h1>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    //fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(Smurfs);
