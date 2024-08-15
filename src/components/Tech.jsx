import { useEffect } from "react"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  

  
    const mediaQuery=window.matchMedia('(max-width: 500px)');
    
    console.log(mediaQuery);
    var technoologies=technologies;
    if(mediaQuery.matches)
    {
     technoologies=technologies.slice(8,14);
    }

    
  
  return (
    <div
    className="flex flex-row flex-wrap justify-center gap-10">
      {technoologies.map((technology)=>(
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon}/>

        </div>
      ))}
      </div>
  )
}

export default SectionWrapper(Tech,'');