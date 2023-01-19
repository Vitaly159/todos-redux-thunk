import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useCallback } from "react";
import { Dispatch } from "redux";
import { setNotes } from "../../../store/actionCreators";
import './tasks.css';

function Tasks({filter, showList}) {

  const notes: readonly NoteType[] = useSelector(
    (state: NotesState) => state.notes,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const changeNotes = useCallback(
    (updatedNotes: NoteType[]) => dispatch(setNotes(updatedNotes)),
    [dispatch]
  );

  const onDeleteNote = (note: any) => {
    const updatedNotes = notes.filter(n => n.id !== note.id)
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  const onUpdateNote = (value: any, updateNote: NoteType) => {
    const updatedNotesArray: any = notes.map((note) => {
      if (note.id === value) {
        return updateNote;
      }
      return note;
    });
    localStorage.setItem('notes', JSON.stringify(updatedNotesArray));
  }
  
  const onEditField = (value: string | number, value2: string, value3: boolean) => {
    onUpdateNote(value, {
      id: value,
      text: value2,
      completed: !value3
    })
  }

  useEffect(()=> {
    changeNotes(JSON.parse(localStorage.notes))
  }, [notes, changeNotes])
  
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
            <span className="del" onClick={() => onDeleteNote(note)}>X</span>
          </div>

        </div>
      )}
    </div>
  )
}

export default Tasks;