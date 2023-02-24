import './App.css';
import Title from './Components/Title/Title';
import Box from './Components/Box/Box';
import AddTask from './Components/AddTask/AddTask';
import PressMe from './Components/Pressme/PressMe';

function App() {
  return (
    <div className="App">
      
      <Title/>
      <PressMe/>
      <Box />
    </div>
  );
}

export default App;
