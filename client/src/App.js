import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
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
      console.log(data.results[0]['school.name'])
      this.setState({
        schoolName: data.results[0]['school.name'],
        schoolData: data.results
      // schoolData: school
    })
    console.log(this.state.schoolName);
  });
};

  setSchool(event) {
    event.preventDefault();
    this.setState({
      schoolName: event.target.value
    });
  };

  cancelCourse = () => {
  document.getElementById("create-course-form").reset();
}


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
        <form id="create-course-form" action="/school" method="GET" id="myform">
          <input type="text" className="form-control" id="enter_text" onChange={this.setSchool.bind(this)} />
            <button onClick={this.fetchSchool.bind(this)} type="submit" className="btn btn-primary" id="text-enter-button button submit">Submit</button>
        </form>
        <div>
        <p>School: { this.state.schoolName } </p>
        </div>
      </div>
    );
  }
}


export default App;
