import React, {
    useEffect,
    useState
} from 'react';

const getEnemy = () => {
    
    const state = {
        enemyName: null,
        experience: 0,
        img: null,
        health: 0,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        dps: 0
    };

    const [set, setState] = useState({
        ...state
    });

    const [coord, setCoord] = useContext(CoordContext);

    useEffect(() => {

        let url = `http://localhost:1234/getProtagonist?id=1`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name
                    }));
                    setState(set => ({
                        ...set,
                        experience: items.protagonist[0].experience
                    }));
                    setState(set => ({
                        ...set,
                        img: items.protagonist[0].img
                    }));
                    setState(set => ({
                        ...set,
                        health: items.protagonist[0].health
                    }));
                    setState(set => ({
                        ...set,
                        strength: items.protagonist[0].strength
                    }));
                    setState(set => ({
                        ...set,
                        intellect: items.protagonist[0].intellect
                    }));
                    setState(set => ({
                        ...set,
                        dexterity: items.protagonist[0].dexterity
                    }));

                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div className='enemy'>
            <img className='skull' src='assets/images/fantasy_gui_png/button_10_s03.png' />
            <p className='skull_p'>En fiende uppenbarade sig. Var redo för strid eller fly för ditt liv.</p>
            <img className='skull_2' src='assets/images/fantasy_gui_png/button_10_s03.png' />
        </div>
    )
}

export default getEnemy;