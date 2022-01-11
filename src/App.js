import './App.css';
import { useBeforeLeave, useClick, useConfirm, useInput, usePreventLeave, useTabs, useTitle } from './hooks';

const content = [{
  tab: 'Section1', content: 'This is Section 1',
}, {
  tab: 'Section2', content: 'This is Section 2',
}];

const App = () => {
  const maxLength = (value) => !value.includes('@');
  const name = useInput('Mr.', maxLength);
  const { currenItem, changeItem } = useTabs(0, content);
  const titleUpdater = useTitle('Loading...');
  const onClick = () => {
    console.log('test');
  };
  const inputRef = useClick();

  setTimeout(() => titleUpdater('Home'), 2000);

  const deleteFeature = () => console.log('delete Feature');
  const abortFeature = () => console.log('Aborted.');
  const confirmDelete = useConfirm('Are you sure?', deleteFeature, abortFeature);

  const { enablePrevent: protect, disablePrevent: unprotect } = usePreventLeave();

  const beforeLeave = () => alert('Please Don`t Leave');

  useBeforeLeave(beforeLeave);

  return (<div className='App'>
    <header className='App-header'>
      <input ref={inputRef} placeholder={'Name'} {...name} />
      {content.map((section, index) => <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>)}
      <div>{currenItem.content}</div>
      <button onClick={() => confirmDelete()}>Delete Button</button>
      <button onClick={() => protect()}>Protect</button>
      <button onClick={() => unprotect()}>Unprotect</button>
    </header>
  </div>);
};

export default App;
