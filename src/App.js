import logo from './logo.svg';
import './App.css';
import {ListArticles, TestComponent, FormDelivery} from './Components';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


const fakeDate =[
  {name : 'magarita', price : 25},
  {name : 'Regina', price : 32},
  {name : 'magarita sans prix'},
  {name : '4 saisons', price : 58},
  {name : 'la spécial Luigi', price : 150},
  {name : 'Calzone', price : 3000}
]
let point = 0

const addSomePoint = () =>{
  point = point + 1
  console.log(point)
}
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Routes>
              <Route path='/Delivery' element={<FormDelivery />}/>
              <Route path='/List' element={<ListArticles articles={fakeDate}/>}/>
              <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point}/>}/>
              <Route path='/Pomme' element={<h1>Quel idée des pommes sur une pizza ?</h1>}/>
            </Routes>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
