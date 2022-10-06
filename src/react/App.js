import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './components/Question'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appName: '',
//       appVersion: '',
//     };
//     ipcRenderer.send(channels.APP_INFO);
//     ipcRenderer.on(channels.APP_INFO, (event, arg) => {
//       ipcRenderer.removeAllListeners(channels.APP_INFO);
//       const { appName, appVersion } = arg;
//       this.setState({ appName, appVersion });
//     });
//   }
//   render() {
//     const { appName, appVersion } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{appName} version {appVersion}</p>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div >
      <h1> My Todos </h1>
      <Question />
      <Question />
      <Question />
    </div>
  );
}



export default App;
