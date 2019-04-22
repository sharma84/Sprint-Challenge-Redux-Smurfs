import React from "react";
import { connect } from "react-redux";
//import Loader from "react-loader-spinner";
import { addNewSmurf } from "../actions";

class SmurfsForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddNewSmurf = (event) => {
    event.preventDefault();
    //const smurf = this.state;
    //this.props.addNewSmurf(smurf);
    this.props.addNewSmurf(this.state);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddNewSmurf}>
          <input
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            name="age"
            value={this.state.age}
            type="number"
            onChange={this.handleChange}
            placeholder="Age"
          />
          <input
            name="height"
            value={this.state.height}
            type="text"
            onChange={this.handleChange}
            placeholder="Height"
          />
          <button type="submit">
            {/* {" "}
            {this.props.addingSmurf ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> 
            ) : (
              "Add New Smurf"
            )} */}
            Add New Smurf
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  //addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { addNewSmurf }
)(SmurfsForm);
