
import './App.css';
import { Todowrapper } from './components/Todowrapper';



function App() {
  return (
    <div className="flex justify-center items-center border- rounded-md h-screen bg-purple-600" >

      <div className=' w-[80%] lg:w-[50%]      h-[80vh] bg-[#141437]  border-1 rounded-[10px]' >




        <Todowrapper />
      </div>

    </div>
  );
}

export default App;
