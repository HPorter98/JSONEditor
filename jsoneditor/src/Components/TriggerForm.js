import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupText, Input } from "reactstrap";
import { useState } from 'react';

import Position from './Position';
import Orientation from './Orientation';
import Size from './Size';
import Lighting from './Lighting';
import Settings from './Settings';
import BreadcrumbsPos from './BreadcrumbsPos';

function TriggerForm({data, index, updateTrigger}) {
    const [tempPosX, setTempPosX] = useState('')
    const [tempPosY, setTempPosY] = useState('')
    const [tempPosZ, setTempPosZ] = useState('')

    const [tempOriX, setTempOriX] = useState('')
    const [tempOriY, setTempOriY] = useState('')
    const [tempOriZ, setTempOriZ] = useState('')

    const [tempSizeX, setTempSizeX] = useState('')
    const [tempSizeY, setTempSizeY] = useState('')
    const [tempSizeZ, setTempSizeZ] = useState('')

    const [tempEyeAccom, setTempEyeA] = useState('')
    const [tempInterSpeed, setTempInterS] = useState('')

    const [tempBreadXPos, setTempBreadXPos] = useState('')
    const [tempBreadYPos, setTempBreadYPos] = useState('')
    const [tempBreadZPos, setTempBreadZPos] = useState('')

    const [tempBreadEye, setTempBreadEye] = useState('')
    const [tempRaycast, setTempRaycast] = useState('')
    const [tempRadius, setTempRadius] = useState('')

    function resetValues() {
        setTempPosX('')
        setTempPosY('')
        setTempPosZ('')

        setTempOriX('')
        setTempOriY('')
        setTempOriZ('')

        setTempSizeX('')
        setTempSizeY('')
        setTempSizeZ('')

        setTempEyeA('')
        setTempInterS('')

        setTempBreadXPos('')
        setTempBreadYPos('')
        setTempBreadZPos('')

        setTempBreadEye('')
        setTempRaycast('')
        setTempRadius('')
    }

    function updateValues(params) {
        var temp = data.Triggers
        
        if (tempPosX !== '') {
            temp[index].Position[0] = parseFloat(tempPosX)    
        }

        if (tempPosY !== '') {
            temp[index].Position[1] = parseFloat(tempPosY)    
        }

        if (tempPosZ !== '') {
            temp[index].Position[2] = parseFloat(tempPosZ)    
        }

        if (tempOriX !== '') {
            temp[index].Orientation[0] = parseFloat(tempOriX)    
        }

        if (tempOriY !== '') {
            temp[index].Orientation[1] = parseFloat(tempOriY)    
        }

        if (tempOriZ !== '') {
            temp[index].Orientation[2] = parseFloat(tempOriZ)    
        }

        if (tempSizeX !== '') {
            temp[index].Size[0] = parseFloat(tempSizeX)    
        }

        if (tempSizeY !== '') {
            temp[index].Size[1] = parseFloat(tempSizeY)    
        }

        if (tempSizeZ !== '') {
            temp[index].Size[2] = parseFloat(tempSizeZ)    
        }

        if (tempEyeAccom !== '') {
            temp[index].EyeAccommodation = parseFloat(tempEyeAccom)    
        }

        if (tempInterSpeed !== '') {
            temp[index].InterpolationSpeed = parseFloat(tempInterSpeed)    
        }

        if (tempBreadXPos !== '') {
            temp[index].Breadcrumbs[0].Position[0] = parseFloat(tempBreadXPos)    
        }

        if (tempBreadYPos !== '') {
            temp[index].Breadcrumbs[0].Position[1] = parseFloat(tempBreadYPos)    
        }

        if (tempBreadZPos !== '') {
            temp[index].Breadcrumbs[0].Position[2] = parseFloat(tempBreadZPos)    
        }

        if (tempBreadEye !== '') {
            temp[index].Breadcrumbs[0].EyeAccommodation = parseFloat(tempBreadEye)    
        }

        if (tempRaycast !== '') {
            temp[index].Breadcrumbs[0].UseRaycast = parseFloat(tempRaycast)    
        }

        if (tempRadius !== '') {
            temp[index].Breadcrumbs[0].Radius = parseFloat(tempRadius)    
        }

        updateTrigger(temp);
        resetValues();
    }
    return (
        <>
            <Container>
                <Row>
                    <Col className="bg-light border">
                        <h3>Position</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X: {data.Triggers[index].Position[0]}</InputGroupText>
                            <Input value={tempPosX} onChange={e => setTempPosX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y: {data.Triggers[index].Position[1]}</InputGroupText>
                            <Input value={tempPosY} onChange={e => setTempPosY(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z: {data.Triggers[index].Position[2]}</InputGroupText>
                            <Input value={tempPosZ} onChange={e => setTempPosZ(e.target.value)}></Input>
                        </InputGroup>
                        <br/>
                    </Col>
                    <Col className="bg-light border">
                    <h3>Orientation</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X: {data.Triggers[index].Orientation[0]}</InputGroupText>
                            <Input value={tempOriX} onChange={e => setTempOriX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y: {data.Triggers[index]?.Orientation[1]}</InputGroupText>
                            <Input value={tempOriY} onChange={e => setTempOriY(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z: {data.Triggers[index]?.Orientation[2]}</InputGroupText>
                            <Input value={tempOriZ} onChange={e => setTempOriZ(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col className="bg-light border">
                    <h3>Size</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X:{data.Triggers[index].Size[0]}</InputGroupText>
                            <Input placeholder={tempSizeX} onChange={e => setTempSizeX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y:{data.Triggers[index].Size[1]}</InputGroupText>
                            <Input placeholder={tempSizeY} onChange={e => setTempSizeY(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z:{data.Triggers[index].Size[2]}</InputGroupText>
                            <Input placeholder={tempSizeZ} onChange={e => setTempSizeX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                    <Col className="bg-light border">
                        <h3>Lighting</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Eye Accom: {data.Triggers[index].EyeAccommodation}</InputGroupText>
                            <Input value={tempEyeAccom} onChange={e => setTempEyeA(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Inter Speed: {data.Triggers[index].InterpolationSpeed}</InputGroupText>
                            <Input value={tempInterSpeed} onChange={e => setTempInterS(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <h3>Breadcrumbs</h3>
                    <Col className='bg-light border'>
                        <h3>Position</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X: {data.Triggers[index].Breadcrumbs[0]?.Position[0]}</InputGroupText>
                            <Input placeholder={tempBreadXPos} onChange={e => setTempBreadXPos(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y: {data.Triggers[index].Breadcrumbs[0]?.Position[1]}</InputGroupText>
                            <Input placeholder={tempBreadYPos} onChange={e => setTempBreadYPos(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z: {data.Triggers[index].Breadcrumbs[0]?.Position[2]}</InputGroupText>
                            <Input placeholder={tempBreadZPos} onChange={e => setTempBreadZPos(e.target.value)}></Input>
                        </InputGroup>
                    </Col>
                    <Col className='bg-light border'>
                        <h3>Settings</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Eye Accom: {data.Triggers[index].Breadcrumbs[0]?.EyeAccommodation}</InputGroupText>
                            <Input placeholder={tempBreadEye} onChange={e => setTempBreadEye(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Raycast: {data.Triggers[index].Breadcrumbs[0]?.UseRaycast}</InputGroupText>
                            <Input placeholder={tempRaycast} onChange={e => setTempRaycast(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Radius:{data.Triggers[index].Breadcrumbs[0]?.Radius}</InputGroupText>
                            <Input placeholder={tempRadius} onChange={e => setTempRadius(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                </Row>
                <button onClick={updateValues}>Save</button>
            </Container>
        </>
    )
}

export default TriggerForm;