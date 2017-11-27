import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      debt: '',
      tuition: '',
      // schoolData: {}
    }
  }

  fetchSchool(event) {
    event.preventDefault();

    const apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
    const fields = `_fields=school.name,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state&school.name=${this.state.schoolName}`;
    const requestUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?&api_key=${apiKey}&${fields}`;

     fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results[0]['school.name'])
      console.log(data.results[0])
      this.setState({
        schoolName: data.results[0]['school.name'],
        debt: data.results[0]['2015.aid.median_debt.completers.overall'],
        tuition: data.results[0]['2015.cost.tuition.in_state']
    })
    console.log(this.state.schoolName);
  });
};

  setSchool(event) {
    event.preventDefault();
    this.setState({
      schoolName: event.target.value,
      debt: event.target.value,
      tuition: event.target.value

    });
    this.setState({typed: event.target.value});
  };

  // getInitialState() {
  //     return {typed: ''};
  //   };
  // onBlur(event) {
  //   this.setState({typed: event.target.value});
  // };

  render() {
    // let message;
    // if(onclick === true) {
    //   message = this.state.schoolName;
    // } else {
    //   message = '';
    // }
    // const schoolname = this.state.schoolName[0];
    // const {schooName} = this.state;
    return (

      <div>
        <form action="/school" method="GET" id="create-course-form">
          <input type="text" className="form-control" id="enter_text" onBlur={this.setSchool.bind(this)} />
            <button  onClick={this.fetchSchool.bind(this)} type="submit" className="btn btn-primary" id="text-enter-button button submit">Submit</button>
        </form>
        <div>
        <p>School: { this.state.schoolName } </p>
        <p>Median Debt: { this.state.debt } </p>
        <p>Tuition: { this.state.tuition } </p>
        </div>
      </div>
    );
  }
}


export default App;
