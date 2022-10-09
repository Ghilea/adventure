import { useEffect, useState} from 'react';
import './index.scss';

const Index = () => {

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, timer)
  }, [])

  useEffect(() => {
    if (fade) {
      func(fade)
    }
  }, [fade])

  return (
    <div className='gameCompany'>
      <p className={`${fade ? 'companyFadeOut' : 'companyFadeIn'}`}>{children}</p>
    </div>
  )

};

export default Index;