import { Route, Routes } from "react-router-dom";
import LiveScore from "./Components/T20";
import Livescores from "./Components/Livescores";
import Menu from "./Components/Menu";
import Results from "./Components/Results";
import T20 from "./Components/T20";
import Qae from "./Components/Qae";
import T20Worldcup from "./Components/T20Worldcup"



function App() {
  return (
    <div>
      
      
      
      <Routes>
      
        <Route path="/T20Worldcup" element={ <Results/> }/>
        <Route path="/Livescores" element={ <Livescores/> }/>
        {/* <Route path="/T20 Timeout" element={<T20/>}/> */}
        <Route path="/QaeTrophy" element={<T20/>}/>
        <Route path="/T20 Worldcup" element={<T20Worldcup/>}/>


      </Routes>
      <Menu/>
      
      </div>
      
    
  );
}

export default App;
