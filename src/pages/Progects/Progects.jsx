import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import { selectorProjects } from "../../selectors"
import { actionFetchProjects } from "../../reducers"
import ListProjects from "../../component/ListProjects"
import ImgProjects from "../../component/ListProjects/ImgProjects"


import "./Progects.jsx"

const Projects = () => {

    return(
<ListProjects>
    <ImgProjects/>
</ListProjects>
    )
}

export default Projects