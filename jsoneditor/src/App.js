import './App.css';
import { useState } from 'react';
import TriggerForm from './Components/TriggerForm';  

function App() {

  const [file, setFile] = useState()
  const [data, setData] = useState()
  const [length, setLength] = useState(0)
  const [index, setIndex] = useState(0)

  function handleChange(event) {
    setFile(event.target.files[0])
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = JSON.parse(e.target.result);
      setData(data);
      setLength(data.Triggers.length - 1);
      
    };

    reader.readAsText(event.target.files[0])
    
  }

  function decrementindex() {
    if(index > 0) {
      setIndex(index - 1)
    }
  }

  function incrementindex() {
    if(index < data.Triggers.length - 1){
      setIndex(index + 1)
    }
  }

  const downloadFile = () =>{
    const fileName = "cfgundergroundtriggers"
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], {type: "application/json"})
    const href = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = href
    link.download = fileName + ".json"
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  function addExample(){
    let temp = data;

    data.Triggers.push(data.Triggers[0]);

    setData(data);
    setLength(length + 1);
  }

  function updateTrigger(temp) {
    const newTriggers = {
      Triggers: temp
    }
    //setData([...data.Triggers, temp]);
    setData(newTriggers);
  }

  function deleteTrigger() {
    setData(data.Triggers.filter(trigger => trigger[index] !== data.Triggers[index]))
  }

  function renderTrigger() {
    return (
      <div>
        <TriggerForm data={data} index={index} updateTrigger={updateTrigger}/>
        {/* <button onClick={decrementindex}>Prev</button>
        <button onClick={incrementindex}>Next</button> */}
        <button onClick={downloadFile}> Download </button>
        <button onClick={addExample}> Add Example </button>
        {/* <button onClick={deleteTrigger}>Delete</button> */}
      </div>
    )
  }

  return (
    <div className="App">
      <form>
        <h1>DayZ cfgundergroundtriggers Editor </h1>
        <input type="file" onChange={handleChange}/>
      </form>

      {length < 1 ? <></> : renderTrigger()}
    </div>
  );
}

export default App;
