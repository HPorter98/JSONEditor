import './App.css';
import { useState } from 'react';
import TriggerForm from './Components/TriggerForm';  

function App() {

  const [file, setFile] = useState()
  const [hasFile, setHasFile] = useState(false)
  const [data, setData] = useState()
  const [length, setLength] = useState(0)

  function handleChange(event) {
    setFile(event.target.files[0])
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = JSON.parse(e.target.result);
      setData(data);
      setLength(data.Triggers.length - 1);
      setHasFile(true)
      
    };

    reader.readAsText(event.target.files[0])
    
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

  function updateTrigger(temp) {
    const newTriggers = {
      Triggers: temp
    }
    setData(newTriggers);
  }

  function renderTrigger() {
    return (
      <div>
        <TriggerForm data={data} updateTrigger={updateTrigger}/>
        <br />
        <button style={{marginTop: "5px"}}onClick={downloadFile}> Download </button>
      </div>
    )
  }

  return (
    <div className="App">
      <form>
        <h1>DayZ cfgundergroundtriggers Editor </h1>
        <input type="file" onChange={handleChange} disabled={hasFile}/>
        <button onChange={() => setFile('')}>Reset</button>
      </form>

      {length < 1 ? <></> : renderTrigger()}
    </div>
  );
}

export default App;
