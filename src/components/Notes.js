import React, { useEffect, useState } from "react";
import "./Notes.css";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [activeNotes, setActiveNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);
  const [tab, setTab] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    setNotes([...notes, { name: name, status: status }]);
    setName("");
    setStatus("");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleClickAll = () => {
    setTab("all");

    let priority = { active: 1, completed: 2 };

    const sortedByPriority = notes.sort(
      (a, b) =>
        (priority[a.status.toLowerCase()] || Number.MAX_VALUE) -
        (priority[b.status.toLowerCase()] || Number.MAX_VALUE)
    );

    setNotes(sortedByPriority);
  };

  const handleClickActive = () => {
    setTab("active");

    const filteredNotes = notes.filter((note) => {
      return note.status.toLowerCase() === "active";
    });

    setActiveNotes(filteredNotes);
  };

  useEffect(() => {
    const filteredActiveNotes = notes.filter((note) => {
      return note.status.toLowerCase() === "active";
    });

    const filteredCompletedNotes = notes.filter((note) => {
      return note.status.toLowerCase() === "completed";
    });

    setActiveNotes(filteredActiveNotes);
    setCompletedNotes(filteredCompletedNotes);

    return () => {
      //
    };
  }, [notes]);

  const handleClickCompleted = () => {
    setTab("completed");

    const filteredNotes = notes.filter((note) => {
      return note.status.toLowerCase() === "completed";
    });

    setCompletedNotes(filteredNotes);
  };

  return (
    <div>
      <h1>React Notes</h1>

      <div className="inputs-div">
        <input
          type="text"
          data-testid="input-note-name"
          placeholder="Note Title"
          onChange={handleChangeName}
          value={name}
          className="name-input"
        />
        <input
          type="text"
          data-testid="input-note-status"
          placeholder="Note Status"
          onChange={handleChangeStatus}
          value={status}
          className="status-input"
        />
        <button
          onClick={handleSubmit}
          data-testid="submit-button"
          className="add-note-button"
          disabled={!name || !status ? true : false}
        >
          Add Note
        </button>
      </div>

      <div className="filter-buttons">
        <button
          className="filter-button-all"
          disabled={!tab || tab === "all" ? true : false}
          onClick={handleClickAll}
        >
          All
        </button>
        <button
          className="filter-button"
          disabled={tab === "active" ? true : false}
          onClick={handleClickActive}
        >
          Active
        </button>
        <button
          className="filter-button"
          disabled={tab === "completed" ? true : false}
          onClick={handleClickCompleted}
        >
          Completed
        </button>
      </div>

      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Note</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody data-testid="noteList" className="table-body">
          {
            tab === "active"
              ? activeNotes.map((activeNote, index) => (
                  <tr key={index}>
                    <td className="note-name">{activeNote.name}</td>
                    <td className="note-status">{activeNote.status}</td>
                  </tr>
                ))
              : tab === "completed"
              ? completedNotes.map((completedNote, index) => (
                  <tr key={index}>
                    <td className="note-name">{completedNote.name}</td>
                    <td className="note-status">{completedNote.status}</td>
                  </tr>
                ))
              : notes.map((note, index) => (
                  <tr key={index}>
                    <td className="note-name">{note.name}</td>
                    <td className="note-status">{note.status}</td>
                  </tr>
                ))
            // : notes
            //     .slice(0)
            //     .reverse()
            //     .map((note, index) => (
            //       <tr key={index}>
            //         <td>{note.name}</td>
            //         <td>{note.status}</td>
            //       </tr>
            //     ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Notes;
