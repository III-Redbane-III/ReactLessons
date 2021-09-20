import React from 'react'

export const ChatArea = (props) => {
    return (
        <>
            {props.mes.map(mes => 
            <ul key={mes.id}>
                <li key={mes.author}>{mes.author}</li>
                <li key={mes.message}>{mes.message}</li>
            </ul>
            )}
        </>
    )
}
