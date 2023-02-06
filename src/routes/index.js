import{Route, Routes} from "react-router-dom"
import Contacts from "../pages/Contacts"
import MainPage from "../pages/MainPage"
import Projects from "../pages/Progects"
import CurentProject from "../pages/CurentProject"





const RootRouters = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>} ></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/projects/:id" element={<CurentProject/>}></Route>
        </Routes>
    )
}

export default RootRouters