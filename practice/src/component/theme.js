import "../css/theme.css"
const Theme = ({onClick, isTheme}) => {

    console.log(isTheme,"onClick")
  return (
    <div>
        <button className='field2' onClick={onClick} style={{backgroundColor: isTheme ? "white" :"black" , color:isTheme?"black": "white"}}>
         {isTheme ? "Dark Theme" : "Light Theme"}
        </button>
    </div>
  );
};

export default Theme;
