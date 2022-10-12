import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

const Index = ({children = 'test', timer = 1500}) => {

  const navigate = useNavigate();

  const [fade, setFade] = useState(true);
  
  useEffect(() => {
    
    setTimeout(() => {
      setFade(false)
    }, timer)
  }, [])

  useEffect(() => {
    if(!fade) {
      setTimeout(() => {
        navigate('/menu');
      }, timer)
    }
  }, [fade])

  return (
    <>
      <div className='company-intro'>
        <p className={`${fade ? 'fadeIn' : 'fadeOut'}`}>{children}</p>
      </div>
    </>
  )

};

export default Index;