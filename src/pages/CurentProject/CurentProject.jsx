import { useSelector, useDispatch } from "react-redux"
import { selectorProjectPage } from "../../selectors"
import {ReactComponent as RightArrow} from "./images/right-arrow.svg"
import { Link } from "react-router-dom"


import "./CurentProject.scss"

const CurentProject = () => {
    const page = useSelector(selectorProjectPage)
    const { id, img, name, siteLink, codeLink, description } = page




    return (
        <div id={id} className="curent_project_wraper">
            <Link to="/projects" className="btn-back"><RightArrow/></Link>
            <h1 className="curent_project_header">{name}</h1>
            <img className="curent_project_img" src={`../${img}`} alt="photo" />
            <div className="btn_block">
                <button className="btn_link" onClick={() => window.open(`${codeLink}`)}> Go to code</button>
                <button className="btn_link"onClick={() => window.open(`${siteLink}`)}> Go to site</button>
            </div>
            <h2 className="description">Description:</h2>
            <p className="description_text">{description}</p>
        </div>

    )
}

export default CurentProject
