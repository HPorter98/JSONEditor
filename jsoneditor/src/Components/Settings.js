import { InputGroup, InputGroupText, Input } from "reactstrap";

function Settings({triggers, index}) {
    return (
        <>
            <h3>Settings</h3>
            <InputGroup id='inputGroup'>
                <InputGroupText>Eye Accom</InputGroupText>
                <Input placeholder={triggers[index].Breadcrumbs[0]?.EyeAccommodation || 0}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Raycast</InputGroupText>
                <Input placeholder={triggers[index].Breadcrumbs[0]?.UseRaycast || 0}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Radius</InputGroupText>
                <Input placeholder={triggers[index].Breadcrumbs[0]?.Radius || 0}></Input>
            </InputGroup>
            <br/>
        </>
    );
}

export default Settings;