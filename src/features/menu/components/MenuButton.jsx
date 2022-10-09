import { useNavigate } from 'react-router-dom';
import useAudio from '@hooks/useAudio';
import soundEffect from '@assets/sounds/button.mp3';

export const MenuButton = ({children, open}) => {
    
    const navigate = useNavigate();
    
    const [play] = useAudio(soundEffect, {
        volume: 0.5,
    });

    const handleButton = () => {
        switch (open) {
            case 'view':
                navigate('/view-character');
                break;
            case 'create':
                navigate('/create-character');
                break;
            case 'options':
                navigate('/view-options');
                break;
            case 'exit':
                window.opener = null;
                window.open("", "_self");
                window.close();
                break;
            case 'editor':
                navigate('/editor');
                break;
        }
    }

    return (
        <button 
        type='button' 
        onMouseEnter={() => play()} 
        onClick={handleButton}>
            {children}
        </button>
    )
}