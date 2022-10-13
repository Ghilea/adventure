import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';
import { appWindow } from "@tauri-apps/api/window";

export const MenuButton = ({children, open}) => {
    
    const navigate = useNavigate();
    
    const handleButton = async (event) => {
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
                appWindow.close()
                break;
            case 'editor':
                navigate('/editor');
                break;
        }
    }

    return (
        <Button 
            className='button'
            onClick={handleButton}>{children}
        </Button>  
    )
}