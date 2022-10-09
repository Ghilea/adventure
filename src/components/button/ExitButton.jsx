import { useNavigate } from 'react-router-dom';
import useAudio from '@hooks/useAudio';
import buttonHover from '@assets/sounds/btnHover.mp3';

const ExitButton = ({children}) => {

    const navigate = useNavigate();
    
    const [play] = useAudio(buttonHover)

    const handleExit = () => {
        navigate('/menu');
    }

    return (
        <button 
        type='button' 
        onMouseEnter={() => play()} 
        onClick={() => handleExit()}>
            {children}
        </button>
    )
}

export default ExitButton