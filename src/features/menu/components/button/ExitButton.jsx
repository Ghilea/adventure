import { menu } from '@comp/store';
import useAudio from '@comp/misc/useAudio';
import buttonHover from '@shared/assets/sounds/btnHover.mp3';

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