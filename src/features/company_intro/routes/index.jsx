import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loading } from '@store/store';

import './index.scss';

const Index = ({ children = 'Adventures', timer = 1500 }) => {

  const store = loading(state => state);

  const navigate = useNavigate();

  const [fade, setFade] = useState(true);

  useEffect(() => {
    store.setIsLoading(true)

    setTimeout(() => {
      setFade(false)
    }, timer)
  }, [])

  useEffect(() => {
    if (!fade) {
      setTimeout(() => {
        navigate('/login');
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