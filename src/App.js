import logo from './logo.svg';
import './App.css';
import Sample from './Pages/sample';
import Mounting from './Pages/mounting';
import Home, {Home1} from './Class2/Home';
import Parent from './Class3/Parent';
import Employees from './Class4/Employees';
import CreatePost from './Class4/CreatePost';
import Posts from './Class4/Posts';
import Photos from './Class4/Photos';
import SampleClassForm from './Class5/SampleClassForm';
import SampleFControlledForm from './Class5/SampleFControlledForm';
import SampleFUnControlledForm from './Class5/SampleFUnControlledForm';
import Register from './Class5/Register';
import Mounting1 from './Class6/Mounting/Mounting1';
import UseState from './Hooks/usestate';
import UseEffect from './Hooks/useeffect';
import Component1 from './Hooks/usecontext/component1';
import Count from './Hooks/usereducer/count';
import UseMemotest from './Hooks/usememo/usememotest';


function App() {  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1111
        </a>
      </header> */}
      {/* <Mounting /> */}
      {/* <Home/>
      <Home1/>
      <Parent/>
      <Employees/>
      <CreatePost/>
      <Posts/> */}
      {/* <Photos/> */}
      {/* <SampleClassForm/>
      <SampleFControlledForm/>
      <SampleFUnControlledForm/>
      <Register/>
      <Mounting1/> */}
      <UseState/>
      {/* <UseEffect/> */}
      <Component1/>
      <Count/>
      <UseMemotest/>
    </div>
    
    
  );
}

export default App;
