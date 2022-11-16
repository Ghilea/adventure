import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';

const Index = () => {

    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/menu');
    }

    return (
        <div className='boxMenuContainer'>
            <Button
                className='bg-black texture-bg button'
                onClick={() => handleExit()}>Exit</Button>
        </div>
    )
}

export default Index