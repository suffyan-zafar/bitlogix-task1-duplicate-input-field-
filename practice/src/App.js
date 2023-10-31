import { useState } from "react";
import AddField from "./component/addField";
import CrossBtn from "./component/crossBtn";
import TextField from "./component/textField";
import Theme from "./component/theme";

function App() {
  const [fields, setFields] = useState([{id:1}]);
  const [counter, setCounter]=useState(2);
  const [toggle,setToggle]=useState(false);
  const handleCLick = () => {
    setFields([...fields, { id: counter }]);
    setCounter(counter+1);
  };
  const handleCrossBtn = (id) => {
    if(fields.length>1){
      const updatedField=fields.filter((field)=>field.id!==id);
      setFields(updatedField);
    }
    else{
      alert("Cant Delete !!")
    }
  };
  const toggleTheme=()=>{
    console.log("toggle");
    setToggle(!toggle);
  };

  const pageLayout={
    backgroundColor: toggle ? 'black' : 'white',
    color: toggle ? 'white' : 'black',
    height:"100vh"
  }
  return (
    <div className="App" style={pageLayout}>
      <Theme onClick={toggleTheme} isTheme={toggle}/>
      <AddField onClick={handleCLick} />
      {fields.length > 0 ? (
        fields.map((field) => (
          <div key={field.id}>
            <TextField />
            <CrossBtn onClick={ ()=>{handleCrossBtn(field.id)} } />
          </div>
        ))
      ) : 
       <div>
          <TextField />
          <CrossBtn onClick={()=>{handleCrossBtn(1)} } />
          </div>
      }
    </div>
  );
}

export default App;
