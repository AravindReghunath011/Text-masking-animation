
import { useState } from 'react';
import useMousemove from '../customHooks/useMousemove.tsx'
import {motion} from 'framer-motion'

const Mask = () => {
    const  {x,y}  = useMousemove()
    const [hovered,setHovered] = useState(false)  
    let size = hovered ? 400 :40
    
  return (
    <> 
    <div className='main'>
    <motion.div animate={{ 
          WebkitMaskPosition: `${x -size/2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          
        }}  transition={{type:'tween',ease:'backOut'}} className="mask">
      <p onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
       19 year old high school grad who make cool shit for living who loves what he do and also hates it sometimes
        </p>
      </motion.div> 
    <div className="body" >
        <p>
          19 year old <span>fullstack developer</span> who love to make userfriendly and scalable projects and also curious. 
          
        </p>
      </div>
    </div>
      
      
    </>
  );
};

export default Mask;




