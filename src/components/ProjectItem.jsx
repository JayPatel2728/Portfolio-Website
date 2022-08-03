import React from 'react'

function ProjectItem({ image, name, link, icons, desc}) {
  return (
      <div className='projectItem'>
          <a href={link}>
            <h1>{name}</h1>
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
          </a>
          <div className='icons'>
            {icons.map((icon)=>{
                  return(
                    <div className='icon'>
                      {icon}
                    </div>
                  )
                })}
          </div>
          <h5>{desc}</h5>
      </div>
  )
}

export default ProjectItem