import { InputGroup, InputGroupText, Input } from "reactstrap";
import { useState } from "react";

function Lighting({triggers, index, updateTrigger}) {
    const [tempEyeAccom, setTempEyeA] = useState('')
    const [tempInterSpeed, setTempInterS] = useState('')

    function updateLighting() {
        var temp = triggers

        if(tempEyeAccom !== ''){
            temp[index].EyeAccommodation = parseFloat(tempEyeAccom);
        }

        if (tempInterSpeed !== '') {
            temp[index].InterpolationSpeed = parseFloat(tempInterSpeed);
        }


        updateTrigger(temp)

        setTempEyeA('')
        setTempInterS('')
    }
    return (
        <>
            <h3>Lighting</h3>
            <InputGroup id='inputGroup'>
                <InputGroupText>Eye Accom: {triggers[index].EyeAccommodation}</InputGroupText>
                <Input value={tempEyeAccom} onChange={e => setTempEyeA(e.target.value)}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Inter Speed: {triggers[index].InterpolationSpeed}</InputGroupText>
                <Input value={tempInterSpeed} onChange={e => setTempInterS(e.target.value)}></Input>
            </InputGroup>
            <br />

            <button onClick={updateLighting}>Save</button>
        </>
    );  
}

export default Lighting;