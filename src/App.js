import React, { useState} from "react";
import { SingleColor } from "./myComponents/SingleColor";
import Values from "values.js";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#e71d36').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      let colors = new Values(color).all(5);
      setList(colors)
      setError(false);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#e71d36"
            className={`${error?'error':null}`}
          />
          {error && window.innerWidth<=477?<p className='red-error' >Not a valid hex value</p>:''}
          <button className="btn" type="submit">
            Generate
          </button>
          {error && window.innerWidth>477? <p className='red-error' >Not a valid hex value</p>:'' }
        </form>
      </div>
      <div className="color-box">
        {
          list.map((color,index)=>{
            console.log(color);
            return <SingleColor key={index} {...color} index={index}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
