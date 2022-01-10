import logo from './logo.svg';
import './App.css';
import {useInput} from "./hooks";

const App = () => {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLength);

  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <input placeholder={"Name"} {...name}/>
    </header>
  </div>);
}

export default App;
