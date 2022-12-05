import { useState } from "react";


const Todolist = ({taskListInput}) => {
  const [checkbox,setCheckbox] = useState(false);
  const handleClick = () => setCheckbox(!checkbox)
  const classView = (checkbox===true)? 'completed' : 'view'

    return(
          <li className={classView}>
            <div className='view'>
              <input className='toggle' type="checkbox" checked={checkbox} onClick={handleClick} readOnly/>
              {/* bu kısımda okundu işareti konuyor*/}
              <label>
                {taskListInput}
              </label>
              <button className='destroy'></button>
            </div>
          </li>
          )};

export default Todolist;