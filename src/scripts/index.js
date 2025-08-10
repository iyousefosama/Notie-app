const notesContainer = document.getElementById("notes");
const noNotesContainer = document.getElementById("no-notes");
const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    return notes;
};

const renderNotes = () => {
    if (getNotes().length === 0) {
        noNotesContainer.style.display = "block";
    } else {
        noNotesContainer.style.display = "none";
    }
}

renderNotes();