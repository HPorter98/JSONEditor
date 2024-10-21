import { InputGroup, InputGroupText, Input } from "reactstrap";
import { useState } from "react";

function Position({triggers, index, updateTrigger}) {
    const [tempX, setTempX] = useState('')
    const [tempY, setTempY] = useState('')
    const [tempZ, setTempZ] = useState('')
    
    function updatePosition() {
        var temp = triggers

        if(tempX !== ''){
            temp[index].Position[0] = parseFloat(tempX);
        }

        if (tempY !== '') {
            temp[index].Position[1] = parseFloat(tempY);
        }

        if (tempZ !== '') {
            temp[index].Position[2] = parseFloat(tempZ);
        }

        // temp[index].Position[0] = parseFloat(tempX);

        // temp[index].Position[1] = parseFloat(tempY);

        // temp[index].Position[2] = parseFloat(tempZ);

        updateTrigger(temp)

        setTempX('')
        setTempY('')
        setTempZ('')
    }
    
    return (
        <>
            <h3>Position</h3>
            <InputGroup id='inputGroup'>
                <InputGroupText>X: {triggers[index].Position[0]}</InputGroupText>
                <Input value={tempX} onChange={e => setTempX(e.target.value)}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Y: {triggers[index].Position[1]}</InputGroupText>
                <Input value={tempY} onChange={e => setTempY(e.target.value)}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Z: {triggers[index].Position[2]}</InputGroupText>
                <Input value={tempZ} onChange={e => setTempZ(e.target.value)}></Input>
            </InputGroup>
            <br/>

            <button onClick={updatePosition}>Save</button>
        </>
    );
}

export default Position;