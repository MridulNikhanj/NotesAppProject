// import React from "react";
// import Note from "../Note/Note";

// import "./NoteContainer.scss";

// function NoteContainer(props) {
//   const reverArray = (arr) => {
//     const array = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//       array.push(arr[i]);
//     }
//     return array;
//   };

//   const notes = reverArray(props.notes);

//   return (
//     <div className="note-container">
//       <h2>Notes</h2>
//       <h2>Logout</h2>
//       <div className="note-container_notes custom-scroll">
//         {notes?.length > 0 ? (
//           notes.map((item) => <Note key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText} />)
//         ) : (
//           <h3><span>Welcome To Note.Me!<br />Let's Start Creating Your First Note...</span></h3>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;




import React from "react";
import Note from "../Note/Note";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./NoteContainer.scss";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverArray(props.notes);

  // Use navigate to redirect
  const navigate = useNavigate();

  // Handle logout and redirect to the login page
  const handleLogout = () => {
    // Optionally, you can clear any authentication tokens here
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="note-container">
      <h2>Notes</h2>
      
      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>
            <span>
              Welcome To Note.Me!
              <br />
              Let's Start Creating Your First Note...
            </span>
          </h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
