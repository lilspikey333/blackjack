import React from 'react'

function StandButton(props) {
    return (
        <div>
            <button onClick={props.handleStandClick}>STAND</button>
        </div>
    )
}

export default StandButton