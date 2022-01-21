import './App.css';
import {
  useAxios,
  useBeforeLeave,
  useClick,
  useConfirm,
  useFadeIn,
  useFullScreen,
  useInput,
  useNetwork, useNotification,
  usePreventLeave,
  useScroll,
  useTabs,
  useTitle,
} from './hooks';

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

  const fadeRef = useFadeIn(2);


  const handleNetworkChange = (status) => {
    console.log(status ? 'Online' : 'Offline');
  };
  const status = useNetwork(handleNetworkChange);

  const { y } = useScroll();

  const checkFullscreen = (isFull) => {
    console.log(isFull ? 'We are Full!' : 'We are not Full');
  };
  const { element, triggerFull, exitFull } = useFullScreen(checkFullscreen);

  const triggerNotification = useNotification('This is Notification', {
    body: 'Notification Body',
  });

  const {loading, data, refetch} = useAxios({ url: '/api/v2/list_movies.json' });

  console.log(loading, data, error);
  return (<div className='App' style={{ height: '1000vh' }}>
    <header className='App-header'>
      <input ref={inputRef} placeholder={'Name'} {...name} />
      {content.map((section, index) => <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>)}
      <div>{currenItem.content}</div>
      <button onClick={() => confirmDelete()}>Delete Button</button>
      <button onClick={() => protect()}>Protect</button>
      <button onClick={() => unprotect()}>Unprotect</button>
      <div {...fadeRef}>useFadeIn</div>
      <h1>{status ? 'Online' : 'Offline'}</h1>
      <h2 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>useScrollTest</h2>
      <div ref={element}>
        <img src={'https://t1.daumcdn.net/cfile/tistory/9966BC445BEFEBBA01'} />
        <button onClick={() => exitFull()}>Exit Fullscreen</button>
      </div>
      <button onClick={() => triggerFull()}>Make Fullscreen</button>
      <button onClick={triggerNotification}>Notification</button>
      <div>
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
      </div>
      <button onClick={() => refetch()}>Refetch</button>
    </header>
  </div>);
};

export default App;
