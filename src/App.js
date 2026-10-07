import { Outlet } from "react-router";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";



const App = ()=>{
    return <div>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
}

export default App;