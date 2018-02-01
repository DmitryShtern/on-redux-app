import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        const { name, surname, age } = this.props.user
        return <div>
          <p>Привет из App, {name} {surname}!</p>
          <p>Тебе уже {age} ?</p>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return <div>Привет из App</div>
//   }
// }

////

// import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
