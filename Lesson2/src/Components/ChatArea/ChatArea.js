import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

export const ChatArea = (props) => {
    
    const [TextIn, setTextIn] = useState("");
    const [Btrigger, setBtrigger] = useState(true);
    const [NoRender, setNoRender] = useState(true);
    

    const sub = (e) => {
        e.preventDefault();
        props.mesChange((prev) => [...prev, {
            author: "Admin",
            message: TextIn
        }]);  
        setTextIn("");   
    }

    const RobotTrigger = () => {
        if (Btrigger == true){
            setBtrigger(() => false);
            console.log("=>fasle");
        } else {
            setBtrigger(() => true);
            console.log("=>true");
        };
    };

    const click = (e) => {
        sub(e);
        RobotTrigger();
    }

    useEffect(() => {
        if(NoRender == false)
        props.mesChange((prev) => [...prev, {
            author: "Robot",
            message: "I'm Robot"
        }]);
        console.log("obama");
        return setNoRender((e) => false);
    }, [Btrigger]);

    return (
        <>
            {props.mes.map(mes => 
            <ul>
                <li className="author" key={mes.author}>{mes.author}</li>
                <li className="text" key={mes.message}>{mes.message}</li>
            </ul>
            )}
            <input  value={TextIn} onChange={(t) => setTextIn([t.target.value])} />

            <button onClick={(e) => click(e)}>Send</button>
        </>
    )
}
// onClick={(e) => sub(e) - click()}