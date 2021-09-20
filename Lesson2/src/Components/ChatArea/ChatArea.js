import React from 'react'
import { useState } from 'react'

export const ChatArea = (props) => {

    const [TextIn, setTextIn] = useState("");

    const sub = (e) => {
        e.preventDefault();
        props.mesChange((prev) => [...prev, {
            author: "Admin",
            message: TextIn
        }]);  
        setTextIn("");   
    }
    return (
        <>
            {props.mes.map(mes => 
            <ul>
                <li className="author" key={mes.author}>{mes.author}</li>
                <li className="text" key={mes.message}>{mes.message}</li>
            </ul>
            )}
            <input value={TextIn} onChange={(t) => setTextIn([t.target.value])} />

            <button onClick={(e) => sub(e)}>Send</button>
        </>
    )
}
