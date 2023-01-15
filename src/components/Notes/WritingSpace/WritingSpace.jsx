import uuid from 'react-uuid';
import './writingSpace.css'

function WritingSpace({notes, setNotes, value, setValue, setShowList, showList}) {

  const addTask = () => {
    const newTask = {
      id: uuid(),
      text: value,
      completed: false
    };

    setNotes([newTask, ...notes]);
    setValue(['']);
    setShowList(true);
  }

  return(
    <div className="writing-space-wrapper">

      <img 
        className={showList ? "" : "hide"}
        src={require('./icon/row.png')} 
        onClick={() => setShowList(!showList)}
        alt='row' 
      />

      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}  
        placeholder='What needs to be done?' 
        autoFocus
      />

      <button onClick={addTask}>Add</button>

    </div>
  )
}

export default WritingSpace;