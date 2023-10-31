import "./App.css";
import { useCallback, useState } from "react";
import AddField from "./component/addField";
import CrossBtn from "./component/crossBtn";
import TextField from "./component/textField";
import Theme from "./component/theme";
import HOC from "./component/hoc";
const App: React.FC = () => {
  const [fields, setFields] = useState<string[]>(['']);
  const [toggle,setToggle]=useState<boolean>(false);
  
  const handleCLick = () => {
    setFields([...fields,'']);
  };

  const handleCrossBtn = (index:number) => {
    if (fields.length > 1) {
      const temp = [...fields]
    temp.splice(index, 1)
     setFields(temp)  
    } else {
      alert('cant delete last')
    }
   }



  const toggleTheme=()=>{
    setToggle(!toggle);
  };

  const handleChange:any = (val:string, index:number) => {
    const tempFileds:string[] = [...fields]
    tempFileds[index] = val
    setFields(tempFileds)
  }

  const pageLayout={
    backgroundColor: toggle ? 'black' : 'white',
    color: toggle ? 'white' : 'black',
    height:"100vh"
  }
  return (
    <div className="App" style={pageLayout}>
      <HOC cmp={Theme} onClick={toggleTheme} isTheme={toggle}/>
    {/* <Theme onClick={toggleTheme} isTheme={toggle}/> */}
    <AddField onClick={handleCLick} />
    {fields.length && fields.map((field:string, i:number) => (
        <div key={i}>
          <TextField val={field} onChange={(val:string)=>handleChange( val, i)}/>
          <CrossBtn  onClick={() => handleCrossBtn(i)}/>
        </div>
      ))}
  </div>
  );
};

export default App;
