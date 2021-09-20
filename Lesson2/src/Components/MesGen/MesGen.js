import React from 'react'
import { useState } from 'react'

export const MesGen = (props) => {
        const [TextIn, setTextIn] = useState("")
        const txt = {
            author: "Admin",
            message: {TextIn}
        }
    return (
        <>
            <input value={TextIn} onChange={(t) => setTextIn([t.target.value])} />

            <button onClick={props.mes.map((s) => s, {txt})}>Send</button>
        </>
    )
}
