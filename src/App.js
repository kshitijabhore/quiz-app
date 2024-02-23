// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Component/Quiz';
import HomePage from './Component/HomePage';
import PreviewPage from './Component/PreviewPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/previewPage' element={<PreviewPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
