import React, { useState } from "react";
import "./styles.css"

function CalculatorProject(){

    const [value, setValue] = useState("");

    function dis(event){
        if(value=="" && (event.target.value=="/" || event.target.value=="*" 
            || event.target.value=="-" || event.target.value=="+" 
            || event.target.value=="="))
            {
              setValue('');
              return;
            }

        const c=value.slice(value.length-1,value.length);
        const a=event.target.value;
        if((a=="+" || a=="-" || a=="/" || a=="*") && (c=="+" || c=="-" || c=="/" || c=="*"))
          setValue(value.slice(0,-1) + event.target.value);
        else setValue(value + event.target.value);
    }

    function equal(){
      if(value=='') return;
      const c=value.slice(value.length-1,value.length);
      if(c=="+" || c=="-" || c=="/" || c=="*") return;
      setValue(String(eval(value)));
    }

    function del(){
      if(value=="") return;
      setValue(value.slice(0, -1))
    }

    return(
        <>
        <h1>Simple Calculator</h1>
        <div className="cal-grid">
          <div className="output">
            <input type="text" value={value} onChange={() => (null)}/>
          </div>
          <input type="button" value="AC" className="span-two" onClick={_ => setValue('')}/>
          <input type="button" value="DEL" onClick={() => del()}/>
          <input type="button" value="/" onClick={(e) => dis(e)}/>
          <input type="button" value="7" onClick={(e) => dis(e)}/>
          <input type="button" value="8" onClick={(e) => dis(e)}/>
          <input type="button" value="9" onClick={(e) => dis(e)}/>
          <input type="button" value="*" onClick={(e) => dis(e)}/>
          <input type="button" value="4" onClick={(e) => dis(e)}/>
          <input type="button" value="5" onClick={(e) => dis(e)}/>
          <input type="button" value="6" onClick={(e) => dis(e)}/>
          <input type="button" value="-" onClick={(e) => dis(e)}/>
          <input type="button" value="1" onClick={(e) => dis(e)}/>
          <input type="button" value="2" onClick={(e) => dis(e)}/>
          <input type="button" value="3" onClick={(e) => dis(e)}/>
          <input type="button" value="+" onClick={(e) => dis(e)}/>
          <input type="button" value="." onClick={(e) => dis(e)}/>
          <input type="button" value="0" onClick={(e) => dis(e)}/>
          <input type="button" value="=" className="span-two" onClick={() => equal()}/>
        </div>
        </>
      );
}
export default CalculatorProject