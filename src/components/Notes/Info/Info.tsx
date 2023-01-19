import { useState} from "react";
import { useSelector, shallowEqual } from "react-redux";

import "./info.css";

function Info({ setFilter }) {
  const notes: readonly NoteType[] = useSelector(
    (state: NotesState) => state.notes,
    shallowEqual
  );
  const [activePage, setActivePage] = useState("1");

  const getNotCompleted = () => {
    return notes.filter((note) => note.completed === false);
  };

  const clearCompleted = () => {
    const updatedNotesArray: any = notes.filter(
      (note) => note.completed === false
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotesArray));
  };

  return (
    <div className="info">
      <div className="info-left">
        <span>{getNotCompleted().length} items left</span>
      </div>

      <div className="info-center">
        <div
          onClick={() => {
            setFilter([true, false]);
            setActivePage("1");
          }}
        >
          <span className={`page-btn ${activePage === "1" && "active-page"}`}>
            All
          </span>
        </div>

        <div
          onClick={() => {
            setFilter([false]);
            setActivePage("2");
          }}
        >
          <span className={`page-btn ${activePage === "2" && "active-page"}`}>
            Active
          </span>
        </div>

        <div
          onClick={() => {
            setFilter([true]);
            setActivePage("3");
          }}
        >
          <span className={`page-btn ${activePage === "3" && "active-page"}`}>
            Completed
          </span>
        </div>
      </div>

      <div className="info-right">
        <span className="clear" onClick={clearCompleted}>
          Clear completed
        </span>
      </div>
    </div>
  );
}

export default Info;
