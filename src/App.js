import './App.css';
import HelloWorld from './components/HelloWorld'
import Phrase from './components/Phrase';
import SayMyName from './components/SayMyName';


function App() {


  return (
    <div className="App">
      <h1>Hi React</h1>
      <p>This is my first project</p>
      <p>Hello World</p>
      <SayMyName name={name} photo={url}/>
      <p>{name}</p>
      <img src={url} alt='test' />
    
      <HelloWorld/>
      <Phrase />
    </div>

  );

}

export default App;