import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { selectorProjects } from "../../../selectors"
import { actionFetchProjects } from "../../../reducers"
import { actionProjectPage } from "../../../reducers"
import { Link } from "react-router-dom"

import "./ImgProjects.scss"

const ImgProjects = () => {

    const dispatch = useDispatch()
    const projects = useSelector(selectorProjects)
    console.log(projects)

    useEffect(() => {
        dispatch(actionFetchProjects())
    }, [])

    const projectPage = (curentProject) => {
        dispatch(actionProjectPage(curentProject))
    }

    

    const item = projects?.map(({ id, name, description, img, siteLink, codeLink }) => (
        <Link to={`/${id}`}>
            <div onClick={() => projectPage({ id, name, description, img, siteLink, codeLink })} key={id} id={id}>
                <img className="screen-projects" src={img} alt="photo" />
            </div>
        </Link>


    ))


    return (
        <>
            {item}
        </>

    )
}

export default ImgProjects