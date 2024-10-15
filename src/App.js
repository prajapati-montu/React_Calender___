import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import CustomToolbar from "./Component/CustomToolbar";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      <Route path="customtoolbar" element={<CustomToolbar/>}/>  
    
      </Routes>
    </>
  );
}

export default App;


