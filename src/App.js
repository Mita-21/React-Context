import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación
        </a>
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;
