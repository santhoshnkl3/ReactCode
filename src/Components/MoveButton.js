import React from 'react';
import {Button} from './style';
function MoveButton(props) {
    return (
        <>
            <Button className="MoveButton"  onClick={()=>{props.DataExchangeHandler(props.TypeOfList)}}>{props.button}</Button> 
        </>
    )
}

export default MoveButton;
