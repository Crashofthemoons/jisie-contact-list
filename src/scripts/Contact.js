const ContactCollectionModule = require("./ContactCollection")
const editContact = require("./editContact")

const deleteContact = () => {
  console.log("delete button clicked", event.currentTarget.parentNode.id)
  const contactId = event.currentTarget.parentNode.id
  ContactCollectionModule.deleteContact(contactId)
  .then(() => {
    const ContactListModule = require("./ContactList")
    ContactListModule.buildContactList()
  })
}

const contact = Object.create({}, { //creates a section element for each contact and appends to the dom.
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section")
      contactSection.id = `${contact.id}` // gives each section an id with the value of the contact id

      for(key in contact){
        if(key === "id") { //if the key in the contact object is "id", then create a delete button instead of <p> element
          const editButton = document.createElement("button")
          editButton.textContent = "Edit"
          editButton.addEventListener("click", editContact)
          contactSection.appendChild(editButton)

          const deleteButton = document.createElement("button")
          deleteButton.textContent = "Delete"
          deleteButton.addEventListener("click", deleteContact)//add event listener that calls deleteContact
          contactSection.appendChild(deleteButton)
        } else { //create a <p> element for each key value pair
          const paraElement = document.createElement("p")
          paraElement.textContent = `${key}: ${contact[key]}`
          contactSection.appendChild(paraElement)
        }
      }

      return contactSection
    }
  }
})

module.exports = contact
