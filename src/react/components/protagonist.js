import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import Read from '../crud/read';
import Create from '../crud/create';

const Protagonist = () => {
//const url = `http://localhost:1234/createProtagonist`;
    const [set, setState] = useState({
        heroName: null,
        img: null,
        experience: 0,
        health: 0,
        strength: 0,
        intellect: 0,
        dexterity: 0,
        dps: 0
    })

    /*
    name: 'test',
        img: 'FantasyCharacters_h_warrior_male',
        hp: 150,
        str: 2,
        int: 3,
        dex: 1
    */

    useEffect(() => {
        let url = `http://localhost:1234/getAllProtagonist`;

        let mounted = true;

        Read(url)
            .then(items => {

                if (mounted && items.protagonist.length > 0) {
                    setState(set => ({
                        ...set,
                        heroName: items.protagonist[0].name,
                        experience: items.protagonist[0].experience,
                        img: `assets/images/fantasycharacters/${items.protagonist[0].img}.png`,
                        health: items.protagonist[0].health,
                        strength: items.protagonist[0].strength,
                        intellect: items.protagonist[0].intellect,
                        dexterity: items.protagonist[0].dexterity,
                        dps: (items.protagonist[0].strength + items.protagonist[0].intellect + items.protagonist[0].dexterity) / 2
                    }));

                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div className='protagonistContainer'>
            <div className='list'></div>
            <h1></h1>
        </div>
    )
}

export default Protagonist;