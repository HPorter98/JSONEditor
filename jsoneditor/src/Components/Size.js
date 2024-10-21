import { InputGroup, InputGroupText, Input } from "reactstrap";

function Size({triggers, index}) {
    return (
        <>
            <h3>Size</h3>
            <InputGroup id='inputGroup'>
                <InputGroupText>X</InputGroupText>
                <Input placeholder={triggers[index]?.Size[0] || 0}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Y</InputGroupText>
                <Input placeholder={triggers[index]?.Size[1] || 0}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Z</InputGroupText>
                <Input placeholder={triggers[index]?.Size[2] || 0}></Input>
            </InputGroup>
            <br/>
        </>
    );
}

export default Size;