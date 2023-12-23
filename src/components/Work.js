import "../assesst/css/workcard.css";
import WorkCard from  "../components/WorkCard";
import WorkCardData from  "../components/WorkCardData";
import React from 'react'

const Work = () => {
  return (
    <>
        <div className="work-container">
            <h1 className="project-headding" style={{color:'white'}}>Projects</h1>
            <div className="project-container">
                {WorkCardData.map((val,index)=>{
                    return(
                        <WorkCard 
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Work
