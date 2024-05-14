import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({id,title,info}) => {
  const [more,setMore]=useState(false)


  return< article className='question'>
    <header>
  <h4>{title}</h4>

  <button className="btn" onClick={()=>setMore(!more)}>{!more?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
  
  
</header>
{more && <p>{info}</p>}
      
  </article>
};

export default Question;
