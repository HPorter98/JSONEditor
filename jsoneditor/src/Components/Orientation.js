import { InputGroup, InputGroupText, Input } from "reactstrap";
import { useState } from 'react';

function Orientation({triggers, index, updateTrigger}) {
    const [tempX, setTempX] = useState('')
    const [tempY, setTempY] = useState('')
    const [tempZ, setTempZ] = useState('')

    function updateOrientation() {
        var temp = triggers

        if(tempX !== ''){
            temp[index].Orientation[0] = parseFloat(tempX);
        }

        if (tempY !== '') {
            temp[index].Orientation[1] = parseFloat(tempY);
        }

        if (tempZ !== '') {
            temp[index].Orientation[2] = parseFloat(tempZ);
        }


        updateTrigger(temp)

        setTempX('')
        setTempY('')
        setTempZ('')
    }
    return (
        <>
            <h3>Orientation</h3>
            <InputGroup id='inputGroup'>
                <InputGroupText>X: {triggers[index].Orientation[0]}</InputGroupText>
                <Input value={tempX} onChange={e => setTempX(e.target.value)}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Y: {triggers[index]?.Orientation[1]}</InputGroupText>
                <Input value={tempY} onChange={e => setTempY(e.target.value)}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Z: {triggers[index]?.Orientation[2]}</InputGroupText>
                <Input value={tempZ} onChange={e => setTempZ(e.target.value)}></Input>
            </InputGroup>
            <br />

            <button onClick={updateOrientation}>Save</button>
        </>
    );
}

export default Orientation;