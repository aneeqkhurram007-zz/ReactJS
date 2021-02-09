import { Component } from 'react';
import './App.css';
import People from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

  state = {
    people: [
      {
        name: "Aneeq",
        age: 20
      }, {
        name: "John",
        age: 21
      }, {
        name: "Dave",
        age: 18
      }
    ],
    toggle: false
  };

  // const[people, setPeople] = useState([
  //   {
  //     name: "Aneeq",
  //     age: 20
  //   }, {
  //     name: "John",
  //     age: 21
  //   }, {
  //     name: "Dave",
  //     age: 18
  //   }
  // ]);

  changeState = (arg, id) => {


    const peopleIndex = id;
    const person = this.state.people[peopleIndex];

    person.name = arg.target.value;

    const persons = [...this.state.people];
    persons[peopleIndex] = person;

    this.setState({
      people: persons
    });
  }

  deletePerson = (index) => {
    const person = [...this.state.people];
    person.splice(index, 1);
    this.setState({
      people: person,
    });
  }


  toggleChange = () => {
    const doesShow = this.state.toggle;
    this.setState({
      toggle: !doesShow
    });
  }
  render() {
    let person = null;

    if (this.state.toggle) {
      person = <People
        people={this.state.people}
        deletePerson={this.deletePerson}
        changeState={this.changeState} />

    }
    return (<div className="App" >
      <Cockpit toggle={this.state.toggle} toggleChange={this.toggleChange} people={this.state.people} />
      { person}

    </div>);

  }
}

export default App;
