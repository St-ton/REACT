import './App.css';
import Greeting from './components/Greeting/Greeting';

const App = () =>{
  const course = "Frontend Pro"
  const part1 = "Вводные занятия по React"
  const tasks1 = 10
  const part2 = "Использование React хуков"
  const tasks2 = 5
  const part3 = "Использование библиотеки react-router-dom"
  const tasks3 = 15

  return (
    <div className="App">      
      <Header course={ course} />
      <Content />
      <Total  />
      
      
      
      {/* <h1>{course}</h1>
      <p>{part1}{task1}</p>
      <p>{part2}{task2}</p>
      <p>{part3}{task3}</p>
      <p>Общее количество задач</p> */}

      

      {/* <Greeting name="Ivan" surname="Ivanov"/>
      <Greeting name="Arsen" age="35" />
      <Greeting name="Nikolay" adress="Berlin"/> */}
    
    </div>
  );
}

export default App;
