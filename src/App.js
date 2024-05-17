
import './App.css';
import { Listitem } from './components/Listitem';



function App() {
  return (
  <div className="flex justify-center items-center border- rounded-md h-screen bg-[url('https://res.cloudinary.com/dlpitjizv/image/upload/v1685725475/impact/20211207_Impact_what_is_low_code_automation_blog_Hero_25bd97e513.jpg')] bg-no-repeat bg-cover" >
   
   <div className=' w-[80%] lg:w-[50%]      h-[80vh] bg-purple-300  border-1 rounded-[10px]' >
   
  
 
   
<Listitem/>
   </div>
   
   </div>
  );
}

export default App;
