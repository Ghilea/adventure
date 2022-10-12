import { useNavigate } from 'react-router-dom';
import Button from '@comp/button/buttons';

export const MenuButton = ({children, open}) => {
    
    const navigate = useNavigate();

    const handleButton = (e) => {
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
                setTimeout(() => {
                    window.close();
                },1000)
                
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