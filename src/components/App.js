import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
constructor(props){
  super(props);

  this.state = {
    vehicles: [],
    value: '',
    pilot: ''
  }
}
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
 handleNameChange = (e) =>{
   this.setState({
     value: e.target.value
   })
 }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleFormSubmit = (e) =>{
    e.preventDefault()
    this.setState ({
      pilot: this.state.value,
      value: ''
    })
  }



  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount(){
    var url ='https://swapi.co/api/vehicles/'
    fetch(url)
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data)
          this.setState({vehicles:data.results});
      })
  }


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1>Star Wars</h1>
            <p>The Vehicles of Star Wars</p>
          </div>
        </div>
          <div className="form">
              <form onSubmit={this.handleFormSubmit}>
                <h3>What is your name, pilot?</h3>
                <input type="text" placeholder="Enter Your Name" onChange={this.handleNameChange}></input><br />
                <input className="btn btn-primary btn-sm" type="submit" value="Submit"/>
              </form>
          </div>
          <div className="card">
            <div className="card-block">
            {this.state.vehicles.map(item => (
                <div className="wrapper" key={item.name}>
                  <div>Vehicle:{item.name}</div>
                  <div>Model:{item.model}</div>
                    <div>Specs</div>
                    <div>Manufacturer:{item.manufacturer}</div>
                    <div>Class:{item.vehicle_class}</div>
                    <div>passengers:{item.passengers}</div>
                    <div>Crew:{item.crew}</div>
                    <div>Lengeth:{item.length}</div>
                    <div>Max Speed:{item.max_atmosphering_speed}</div>
                    <div>Cargo Capacity:{item.cargo_capacity}</div>
              </div>
              </div>
                ))}
          </div>
      </div>
        );
      }
}

export default App;
