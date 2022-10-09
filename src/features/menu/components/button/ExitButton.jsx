import { menu } from '@store/store';
import useAudio from '@hooks/useAudio';
import buttonHover from '@assets/sounds/btnHover.mp3';

export const ExitButton = ({children}) => {

    const storeMenu = menu(state => state);
    
    const [play] = useAudio(buttonHover)

    const handleExit = () => {
        storeMenu.activateMenu(null)
    }

    return (
        <button type='button' onMouseEnter={() => play()} onClick={() => handleExit()}>{children}</button>
    )
}