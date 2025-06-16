// import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Lami from "./pages/Lami";
import Taxi from "./pages/Taxi";
import Luxury from "./pages/Luxury";
import {Route, BrowserRouter, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

        <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/lami"} element={<Lami />}/>
                    <Route path={"/taxi"} element={<Taxi />}/>
                    <Route path={"/lux"} element={<Luxury />}/>
                </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
