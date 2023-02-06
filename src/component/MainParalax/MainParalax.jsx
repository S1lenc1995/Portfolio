
import MyPhoto from './img/Face.png'
import logoEducation from './img/dan-it-1200.png'
import './MainParalax.scss'

const MainParalax = () => {

    return(
        <>
        <div className='paralax'>
            <h1 className='hello'>Hello, my name is <br/>Bohdan</h1> 
        </div>
        <div className='skils'>
            <h2 className='header-skils'>Work with:</h2>
            <p className='description'>HTML, CSS, JS, React, NPM, SCSS, Bootstrap, Redax, Webpack, Gulp, create responsive and flexible layouts.</p>
            <img className='my-photo' src={MyPhoto} alt="photo" />
            <h2 className='header-skils'> IT Education:</h2>
            <img className='my-photo' src={logoEducation} alt="photo" />
            <p className='description-year'>2022-2023</p>
            <h2 className='header-skils'> English level:</h2>
            <p className='description'> Intermediate (B1)</p>
            <h2 className='header-skils'> About me:</h2>
            <p className='description'>I like sport especially football, box and sometimes I go to the fishing with my friens. Every day I improve my skils in IT, because for me it`s very intresting. Also I have new 
hobby, it`s Codewars, you can check in all my profiels in footer</p>
     
        </div>
        
        </>
       
       
    )
}

export default MainParalax