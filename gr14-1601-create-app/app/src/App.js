import ToDo from './components/ToDo';
//import { a, b, c } from './test';
//import random_name from './test';

function App() {
  //  console.log(a, b, c);
  //  random_name();

  return (
    <div>
      <ToDo title={'Побегать'} done={true} />
      <ToDo title={'Поесть'} done={false} />
    </div>
  );
}

export default App;
