import { useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { setNotes } from "../../../store/actionCreators";
import { Dispatch } from "redux";

import uuid from "react-uuid";
import "./writingSpace.css";

function WritingSpace({ value, setValue, setShowList, showList }) {
  const dispatch: Dispatch<any> = useDispatch();

  const notes: readonly NoteType[] = useSelector(
    (state: NotesState) => state.notes,
    shallowEqual
  );

  const updateNotes = useCallback(
    (updatedNotes: NoteType[]) => dispatch(setNotes(updatedNotes)),
    [dispatch]
  );

  const addTask = () => {
    const newTask = {
      id: uuid(),
      text: value,
      completed: false,
    };

    const updatedNotesArray = [...notes, newTask]
    updateNotes(updatedNotesArray)
    localStorage.setItem('notes', JSON.stringify(updatedNotesArray));
    setValue([""]);
    setShowList(true);
  };

  return (
    <div className="writing-space-wrapper">
      <img
        className={showList ? "" : "hide"}
        src={require("./icon/row.png")}
        onClick={() => setShowList(!showList)}
        alt="row"
      />

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        autoFocus
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default WritingSpace;
