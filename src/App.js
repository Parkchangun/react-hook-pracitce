import './App.css';
import {useInput, useTabs} from "./hooks";

const content = [{
  tab: "Section1", content: "This is Section 1",
}, {
  tab: "Section2", content: "This is Section 2",
}];

const App = () => {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLength);
  const {currenItem, changeItem} = useTabs(0, content);

  return (<div className="App">
    <header className="App-header">
      <input placeholder={"Name"} {...name}/>
      {content.map((section, index) => <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>)}
      <div>{currenItem.content}</div>
    </header>
  </div>);
}

export default App;
