import { menu } from '@comp/store';

export const ExitButton = ({children}) => {

    const storeMenu = menu(state => state);
    
    const handleExit = () => {
        storeMenu.activateMenu(null)
    }

    return (
        <button type='button' onClick={() => handleExit()}>{children}</button>
    )
}