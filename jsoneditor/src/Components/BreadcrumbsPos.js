import { InputGroup, InputGroupText, Input } from "reactstrap";

function BreadcrumbsPos({triggers, index}) {
    return (
        <>
            <h3>Position</h3>
            <InputGroup id='inputGroup'>
                <InputGroupText>X</InputGroupText>
                <Input placeholder={triggers[index].Breadcrumbs[0]?.Position[0] || 0}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Y</InputGroupText>
                <Input placeholder={triggers[index].Breadcrumbs[0]?.Position[1] || 0}></Input>
            </InputGroup>
            <br />
            <InputGroup id='inputGroup'>
                <InputGroupText>Z</InputGroupText>
                <Input placeholder={triggers[index].Breadcrumbs[0]?.Position[2] || 0}></Input>
            </InputGroup>
            <br/>
        </>
    );
}

export default BreadcrumbsPos;