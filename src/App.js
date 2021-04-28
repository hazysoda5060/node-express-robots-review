import {Component} from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robotArr: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('/api/robots')
    .then(res => this.setState({ robotArr: res.data }))
    .catch(err => console.log(err))
  }

  handleDelete(id) {
    axios.delete(`/api/robots/${id}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div>ROBOT ROCK</div>
        {
          this.state.robotArr.map(robotObj => {
            return (
              <div key={robotObj.id}>
                <h2>{robotObj.name}</h2>
                < br />
                <img src={robotObj.image} alt={robotObj.name}/>
                <button onClick={() => this.handleDelete(robotObj.id)} >destroy robot</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
