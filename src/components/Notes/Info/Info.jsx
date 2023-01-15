import { useState } from 'react';
import './info.css';

function Info({setFilter, notes, setNotes}) {
  const [activePage, setActivePage] = useState('1');

  const getNotCompleted = () => {
    return notes.filter(note => note.completed === false);
  };

  const clearCompleted = () => {
    setNotes(notes.filter(note => note.completed === false));
  };

  return(
    <div className="info">
      <div className="info-left">
        <span>{getNotCompleted().length} items left</span>
      </div>

      <div className="info-center">
        <div onClick={() => {setFilter([true, false]); setActivePage('1')}}>
          <span className={`page-btn ${activePage === '1' && "active-page"}`}>All</span>
        </div>

        <div onClick={() => {setFilter([false]); setActivePage('2')}}> 
          <span className={`page-btn ${activePage === '2' && "active-page"}`}>Active</span>
        </div>

        <div onClick={() => {setFilter([true]); setActivePage('3')}}>
          <span className={`page-btn ${activePage === '3' && "active-page"}`}>Completed</span>
        </div>
      </div>

      <div className="info-right">
        <span className="clear" onClick={clearCompleted}>Clear completed</span>
      </div>
    </div>    
  )
}

export default Info;