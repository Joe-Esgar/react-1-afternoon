import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      dogs: [
        {
          name: "Pat",
          age: 12,
          favToy: "Ball"
        },
        {
          name: "Rufus",
          age: 3,
          favFood: "Steak"
        },
        {
          name: "Tiny",
          weight: "170 lbs",
          favFood: "Cats"
        }
      ],
      userInput: "",
      filteredDogs: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterDogs(prop) {
    console.log(prop);
    const { dogs } = this.state;
    let filteredDogs = [];
    for (let i = 0; i < dogs.length; i++) {
      if (dogs[i].hasOwnProperty(prop)) {
        console.log("hit");
        filteredDogs.push(dogs[i]);
      }
    }
    console.log(filteredDogs);
    this.setState({ filteredDogs: filteredDogs });
  }

  render() {
    // console.log(this.state.dogs);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          unFilteredArray: {JSON.stringify(this.state.dogs, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterDogs(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectPB">
          filteredArray: {JSON.stringify(this.state.filteredDogs, null, 10)}
        </span>
      </div>
    );
  }
}
