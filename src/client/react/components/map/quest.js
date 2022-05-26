import React, { useEffect, useState } from "react";
import { Read } from '@shared/components/Crud';
import { fetchURL } from '@shared/global';

export const Quest = () => {

    const [quest, setQuest] = useState({
        title: null,
        describe: null
    });

    useEffect(()=>{
        
        let url_quest = `${fetchURL}/getQuest?x=${store.coords.x}&y=${store.coords.y}`;

        Read(url_quest)
            .then(items => {

                if (items.quest.length > 0) {
                    setQuest(quest => ({
                        ...quest,
                        title: items.quest[0].title,
                        describe: items.quest[0].describe
                    }));
                    setStore(store => ({
                        ...store,
                        quest: {
                            ...store.quest,
                            showQuest: true
                        }
                    }))
                } 
            })

    }, [])

    return (
        <>
            {
                (store.quest.showQuest) ?
                    <div className = 'questContainer fadeOut' >
                        <h1 > 
                            {
                                (content.content) ? quest.title : 'unknown'
                            } 
                        </h1>

                        {
                            <div className = 'main_text' >{quest.describe}</div>
                }   </div> : <></ >
            }
        </>
    )
}