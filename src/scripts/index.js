const notesContainer = document.getElementById("notes");
const noNotesContainer = document.getElementById("no-notes");
const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    return notes;
};

const addNote = (title, desc) => {
    const notes = getNotes();
    notes.push({ title, desc });
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
};

const deleteNote = (index) => {
    const notes = getNotes();
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
};

const renderNotes = () => {
    if (getNotes().length === 0) {
        noNotesContainer.style.display = "block";
    } else {
        noNotesContainer.style.display = "none";
    };

    
}

renderNotes();