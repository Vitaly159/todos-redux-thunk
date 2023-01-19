import { useState } from "react";

import WritingSpace from "./WritingSpace/WritingSpace";
import Tasks from "./Tasks/Tasks";
import Info from "./Info/Info";

import "./notes.css";

function Notes() {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState([true, false]);
  const [showList, setShowList] = useState(true);

  // const [notes, setNotes] = useState(
  //   localStorage.notes ? JSON.parse(localStorage.notes) : []
  // );

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  return (
    <div className="notes-wrapper">
      <WritingSpace
        value={value}
        setValue={setValue}
        setShowList={setShowList}
        showList={showList}
      />

      <Tasks filter={filter} showList={showList} />

      <Info setFilter={setFilter} />
    </div>
  );
}

export default Notes;
