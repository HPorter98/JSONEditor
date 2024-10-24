import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupText, Input } from "reactstrap";
import { useState } from 'react';

function TriggerForm({data, updateTrigger}) {
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

    const [triggerIndex, setTriggerIndex] = useState(0)
    const [breadIndex, setBreadIndex] = useState(0)

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

    function updateValues() {
        var temp = data.Triggers

        console.log("update: ", temp[triggerIndex]);
        
        if (tempPosX !== '') {
            //newTrigger.Position[0] = parseFloat(tempPosX)
            temp[triggerIndex].Position[0] = parseFloat(tempPosX)    
        }

        if (tempPosY !== '') {
            //newTrigger.Position[1] = parseFloat(tempPosY)
            temp[triggerIndex].Position[1] = parseFloat(tempPosY)    
        }

        if (tempPosZ !== '') {
            //newTrigger.Position[2] = parseFloat(tempPosZ)
            temp[triggerIndex].Position[2] = parseFloat(tempPosZ)    
        }

        if (tempOriX !== '') {
            //newTrigger.Orientation[0] = parseFloat(tempOriX)
            temp[triggerIndex].Orientation[0] = parseFloat(tempOriX)    
        }

        if (tempOriY !== '') {
            //newTrigger.Orientation[1] = parseFloat(tempOriY)
            temp[triggerIndex].Orientation[1] = parseFloat(tempOriY)    
        }

        if (tempOriZ !== '') {
            //newTrigger.Orientation[2] = parseFloat(tempOriZ)
            temp[triggerIndex].Orientation[2] = parseFloat(tempOriZ)    
        }

        if (tempSizeX !== '') {
            //newTrigger.Size[0] = parseFloat(tempSizeX)
            temp[triggerIndex].Size[0] = parseFloat(tempSizeX)    
        }

        if (tempSizeY !== '') {
            //newTrigger.Size[1] = parseFloat(tempSizeY)
            temp[triggerIndex].Size[1] = parseFloat(tempSizeY)    
        }

        if (tempSizeZ !== '') {
            //newTrigger.Size[2] = parseFloat(tempSizeZ)
            temp[triggerIndex].Size[2] = parseFloat(tempSizeZ)    
        }

        if (tempEyeAccom !== '') {
            //newTrigger.EyeAccommodation = parseFloat(tempEyeAccom)
            temp[triggerIndex].EyeAccommodation = parseFloat(tempEyeAccom)    
        }

        if (tempInterSpeed !== '') {
            //newTrigger.InterpolationSpeed = parseFloat(tempInterSpeed)
            temp[triggerIndex].InterpolationSpeed = parseFloat(tempInterSpeed)    
        }

        if (temp[triggerIndex].Breadcrumbs.length > 0) {
            if (tempBreadXPos !== '') {
                temp[triggerIndex].Breadcrumbs[breadIndex].Position[0] = parseFloat(tempBreadXPos)    
            }
    
            if (tempBreadYPos !== '') {
                temp[triggerIndex].Breadcrumbs[breadIndex].Position[1] = parseFloat(tempBreadYPos)    
            }
    
            if (tempBreadZPos !== '') {
                temp[triggerIndex].Breadcrumbs[breadIndex].Position[2] = parseFloat(tempBreadZPos)    
            }
    
            if (tempBreadEye !== '') {
                temp[triggerIndex].Breadcrumbs[breadIndex].EyeAccommodation = parseFloat(tempBreadEye)    
            }
    
            if (tempRaycast !== '') {
                temp[triggerIndex].Breadcrumbs[breadIndex].UseRaycast = parseFloat(tempRaycast)    
            }
    
            if (tempRadius !== '') {
                temp[triggerIndex].Breadcrumbs[breadIndex].Radius = parseFloat(tempRadius)    
            } 
        }

        //temp[triggerIndex] = newTrigger

        updateTrigger(temp);
        resetValues();
    }

    function addNewBreadcrumb() {
        var triggers = data.Triggers;

        var newTrigger = {
            "Position": [
                triggers[triggerIndex].Position[0],
                triggers[triggerIndex].Position[1],
                triggers[triggerIndex].Position[2]
              ],
              "Orientation": [
                triggers[triggerIndex].Orientation[0],
                triggers[triggerIndex].Orientation[1],
                triggers[triggerIndex].Orientation[2]
              ],
              "Size": [
                triggers[triggerIndex].Size[0],
                triggers[triggerIndex].Size[1],
                triggers[triggerIndex].Size[2]
              ],
              "EyeAccommodation": triggers[triggerIndex].EyeAccommodation,
              "Breadcrumbs": [],
              "InterpolationSpeed": triggers[triggerIndex].InterpolationSpeed
        }
        var newBreadcrumb = {
            "Position": [
                0,
                0,
                0
            ],
            "EyeAccommodation": 0,
            "UseRaycast": 0,
            "Radius": 0
        }

        if (triggers[triggerIndex].Breadcrumbs !== undefined) {
            newTrigger.Breadcrumbs = triggers[triggerIndex].Breadcrumbs;
            console.log("Breadcrumb push: ", newTrigger.Breadcrumbs);
        }

        newTrigger.Breadcrumbs.push(newBreadcrumb)

        triggers[triggerIndex] = newTrigger;

        updateTrigger(triggers);
        
    }

    function decrementBreadIndex() {
        if (breadIndex !== 0) {
            setBreadIndex(breadIndex - 1)
        }
    }

    function incrementBreadIndex() {
        if (breadIndex < data.Triggers[triggerIndex].Breadcrumbs.length - 1) {
            setBreadIndex(breadIndex + 1)

        }
    }

    function decrementTrigIndex() {
        if(triggerIndex > 0) {
            setTriggerIndex(triggerIndex - 1)
            setBreadIndex(0)
          }
    }

    function incrementTrigIndex() {
        if(triggerIndex < data.Triggers.length - 1){
            setTriggerIndex(triggerIndex + 1)
            setBreadIndex(0)
          }
    }

    function renderBreadcrumb() {
        return (
            <>
                <h3>Breadcrumbs</h3>
                <Col className='bg-light border'>
                    <h3>Position</h3>
                    <InputGroup id='inputGroup'>
                        <InputGroupText>X: {data.Triggers[triggerIndex].Breadcrumbs[breadIndex]?.Position[0]}</InputGroupText>
                        <Input value={tempBreadXPos} onChange={e => setTempBreadXPos(e.target.value)}></Input>
                    </InputGroup>
                    <br />
                    <InputGroup id='inputGroup'>
                        <InputGroupText>Y: {data.Triggers[triggerIndex].Breadcrumbs[breadIndex]?.Position[1]}</InputGroupText>
                        <Input value={tempBreadYPos} onChange={e => setTempBreadYPos(e.target.value)}></Input>
                    </InputGroup>
                    <br />
                    <InputGroup id='inputGroup'>
                        <InputGroupText>Z: {data.Triggers[triggerIndex].Breadcrumbs[breadIndex]?.Position[2]}</InputGroupText>
                        <Input value={tempBreadZPos} onChange={e => setTempBreadZPos(e.target.value)}></Input>
                    </InputGroup>

                </Col>
                <Col className='bg-light border'>
                    <h3>Settings</h3>
                    <InputGroup id='inputGroup'>
                        <InputGroupText>Eye Accom: {data.Triggers[triggerIndex].Breadcrumbs[breadIndex]?.EyeAccommodation}</InputGroupText>
                        <Input value={tempBreadEye} onChange={e => setTempBreadEye(e.target.value)}></Input>
                    </InputGroup>
                    <br />
                    <InputGroup id='inputGroup'>
                        <InputGroupText>Raycast: {data.Triggers[triggerIndex].Breadcrumbs[breadIndex]?.UseRaycast}</InputGroupText>
                        <Input value={tempRaycast} onChange={e => setTempRaycast(e.target.value)}></Input>
                    </InputGroup>
                    <br />
                    <InputGroup id='inputGroup'>
                        <InputGroupText>Radius:{data.Triggers[triggerIndex].Breadcrumbs[breadIndex]?.Radius}</InputGroupText>
                        <Input value={tempRadius} onChange={e => setTempRadius(e.target.value)}></Input>
                    </InputGroup>
                    <br />
                </Col>
                <button onClick={decrementBreadIndex}>Prev Bread</button>
                <button onClick={incrementBreadIndex}>Next Bread</button>
            </>
        )
    }
    
    return (
        <>
            <Container>
                <Row>
                    <Col className="bg-light border">
                        <h3>Position</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X: {data.Triggers[triggerIndex].Position[0]}</InputGroupText>
                            <Input value={tempPosX} onChange={e => setTempPosX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y: {data.Triggers[triggerIndex].Position[1]}</InputGroupText>
                            <Input value={tempPosY} onChange={e => setTempPosY(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z: {data.Triggers[triggerIndex].Position[2]}</InputGroupText>
                            <Input value={tempPosZ} onChange={e => setTempPosZ(e.target.value)}></Input>
                        </InputGroup>
                        <br/>
                    </Col>
                    <Col className="bg-light border">
                    <h3>Orientation</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X: {data.Triggers[triggerIndex].Orientation[0]}</InputGroupText>
                            <Input value={tempOriX} onChange={e => setTempOriX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y: {data.Triggers[triggerIndex]?.Orientation[1]}</InputGroupText>
                            <Input value={tempOriY} onChange={e => setTempOriY(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z: {data.Triggers[triggerIndex]?.Orientation[2]}</InputGroupText>
                            <Input value={tempOriZ} onChange={e => setTempOriZ(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col className="bg-light border">
                    <h3>Size</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>X: {data.Triggers[triggerIndex].Size[0]}</InputGroupText>
                            <Input value={tempSizeX} onChange={e => setTempSizeX(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Y: {data.Triggers[triggerIndex].Size[1]}</InputGroupText>
                            <Input value={tempSizeY} onChange={e => setTempSizeY(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Z: {data.Triggers[triggerIndex].Size[2]}</InputGroupText>
                            <Input value={tempSizeZ} onChange={e => setTempSizeZ(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                    <Col className="bg-light border">
                        <h3>Lighting</h3>
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Eye Accom: {data.Triggers[triggerIndex].EyeAccommodation}</InputGroupText>
                            <Input value={tempEyeAccom} onChange={e => setTempEyeA(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                        <InputGroup id='inputGroup'>
                            <InputGroupText>Inter Speed: {data.Triggers[triggerIndex].InterpolationSpeed}</InputGroupText>
                            <Input value={tempInterSpeed} onChange={e => setTempInterS(e.target.value)}></Input>
                        </InputGroup>
                        <br />
                    </Col>
                </Row>
                <Row>
                    {/* {console.log("Breadcrumbs: ", data.Triggers[triggerIndex].Breadcrumbs.length)}
                    {console.log(data.Triggers[triggerIndex].Breadcrumbs[breadIndex])} */}
                    <p>{data.Triggers[triggerIndex].Breadcrumbs.length}</p>
                    {renderBreadcrumb()}
                    {/* {data.Triggers[triggerIndex].Breadcrumbs.length > 1 ? renderBreadcrumb() : <></>} */}
                </Row>
                <button onClick={updateValues}>Save</button>
                <button onClick={addNewBreadcrumb}>Add Breadcrumb</button>
            </Container>

            <p>{triggerIndex} / {data.Triggers.length - 1}</p>

            <button onClick={decrementTrigIndex}>Prev</button>
            <button onClick={incrementTrigIndex}>Next</button>
        </>
    )
}

export default TriggerForm;