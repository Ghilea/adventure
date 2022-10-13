import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';
import { appWindow } from "@tauri-apps/api/window";
import { confirm } from '@tauri-apps/api/dialog';

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
                const confirmed = await confirm('Are you sure?');

                if (!confirmed) {
                    // user did not confirm closing the window; let's prevent it
                    event.preventDefault();
                }else{
                    appWindow.close()
                }
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