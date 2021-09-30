import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button, TextField } from '@material-ui/core';



export const ChatArea = (props) => {
    
    const [TextIn, setTextIn] = useState("");
    const [Btrigger, setBtrigger] = useState(true);
    const [NoRender, setNoRender] = useState(true);
    const refFocus = useRef(null);
    

    const sub = (e) => {
        e.preventDefault();
        props.mesChange((prev) => [...prev, {
            author: "Admin",
            message: TextIn
        }]);  
        setTextIn("");
    }

    const RobotTrigger = () => {
        if (Btrigger === true){
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
        if(NoRender === false)
        props.mesChange((prev) => [...prev, {
            author: "Robot",
            message: "I'm Robot"
        }]);
        refFocus?.current.focus();
        return setNoRender((e) => false);
    }, [Btrigger]);

    return (
        <>  
            <ul>
                {props.mes.map(mes => 
                <div key={mes.id} >
                    <li className="author" key={mes.author}>{mes.author}</li>
                    <li className="text" key={mes.message}>{mes.message}</li>
                    <br />
                </div>
                )}
            </ul>
            <TextField  id="filled-basic" label="Message" variant="filled" color="info" value={TextIn} ref={refFocus} onChange={(t) => setTextIn([t.target.value])} />
            

            <Button variant="contained" onClick={(e) => click(e)}>Send</Button>
            
        </>
    )
}