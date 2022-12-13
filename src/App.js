import './App.css';
import HomeScreen from './components/HomeScreen';
//import Conditional from './components/Conditional';
import OtherList from './components/OherList';
//import Event from './components/Event';
//import Form from './components/Form';

function App() {

    const myItems = ['react', 'JavaScript', 'HTML', 'CSS']

  return (
    <div className="App">
      <h1>Lists render</h1>
      <OtherList items={myItems}/>
      <h1>Lists render 2</h1>
      <OtherList items={[]} />
      <HomeScreen />
    </div>

  );

}

export default App;