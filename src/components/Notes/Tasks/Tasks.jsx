import './tasks.css';

function Tasks({notes, setNotes, filter, showList}) {

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const onUpdateNote = (value, updateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === value) {
        return updateNote;
      }
      return note;
    });
  
    setNotes(updatedNotesArray);
  }

  const onEditField = (value, value2, value3) => {
    onUpdateNote(value, {
      id: value,
      text: value2,
      completed: !value3
    })
  }
  
  return(
    <div className="tasks">
      {notes.map((note, index) =>  (filter.includes(note.completed) && showList) &&
        <div key={index} className="task-wrapper">
          
          <div>
            <input 
              type='checkbox' 
              className="checkbox"
              onClick={() => onEditField(note.id, note.text, note.completed)}
              checked={note.completed ? true : false}
              readOnly
            />

            <span className={`text ${note.completed && "text-cross-out"}`}>{note.text}</span>
          </div>

          <div>
            <span className="del" onClick={() => onDeleteNote(note.id)}>X</span>
          </div>

        </div>
      )}
    </div>
  )
}

export default Tasks;