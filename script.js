// Get DOM elements
var noteInput = document.getElementById("note-input");
var addButton = document.getElementById("add-button");
var noteList = document.getElementById("note-list");

// Add event listener to the add button
addButton.addEventListener("click", function() {
  // Get the value of the note input
  var noteText = noteInput.value;

  // Create a new list item
  var listItem = document.createElement("li");
  listItem.className = "note-item";
  listItem.innerText = noteText;

  // Append the new list item to the note list
  noteList.appendChild(listItem);

  // Clear the note input
  noteInput.value = "";
});
