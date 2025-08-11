const notesContainer = document.getElementById("notes");
const noNotesContainer = document.getElementById("no-notes");

const createNoteButton = document.getElementById("create-note-button");
const createNoteSecondaryButton = document.getElementById("create-note-secondary");
const closeButton = document.getElementById("cancel-button");

const form = document.getElementById("form");

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
        notesContainer.innerHTML = "";
    } else {
        noNotesContainer.style.display = "none";

        const notes = getNotes();
        notesContainer.innerHTML = notes
            .map(
                (note, index) => `
            <div class="note">
                <header>
                <h2>${note.title}</h2>
                <button class="delete-button" data-index="${index}">Delete</button>
                </header>
                <p>${note.desc}</p>
            </div>
        `
            )
            .join("");

        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const index = event.target.dataset.index;
                deleteNote(index);
            });
        });
    }
};
renderNotes();


const handleOnCreate = () => {
    const popup = document.querySelector(".popup");
    popup.style.display = "block";
};

const handleOnClose = () => {
    const popup = document.querySelector(".popup");
    popup.style.display = "none";
};

createNoteButton.addEventListener("click", handleOnCreate);
createNoteSecondaryButton.addEventListener("click", handleOnCreate);
closeButton.addEventListener("click", handleOnClose);

const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = form.title.value;
    const content = form.content.value;
    addNote(title, content);
    form.reset();
    handleOnClose();
};

form.addEventListener("submit", handleFormSubmit);