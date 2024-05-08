import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper fontSize="40px" color="lightblue">
        <h2>Text inside of the wrapper</h2>
        <button>Click me!</button>
      </Wrapper>{' '}
      <Wrapper width="500px" color="lightgreen">
        <h2>Another text</h2>
        <p>Some description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
      <Wrapper color="red" width="300px" fontSize="25px">
        <div>Text Text Text Text Text Text Text Text Text Text Text Text</div>
        <ul>
          <ol>1</ol>
          <ol>2</ol>
          <ol>3</ol>
          <ol>4</ol>
          <ol>5</ol>
        </ul>
      </Wrapper>
    </div>
  );
}

export default App;
