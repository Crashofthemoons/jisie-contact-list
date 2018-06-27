const $ = require("jquery")
const deleteContact = require("./DeleteContact")
const EditContactModule = require("./EditContact")

const contact = Object.create({}, {
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section")
      contactSection.id = `${contact.id}` // gives each section an id with the value of the contact id

      for(key in contact){
        if(key === "id") { //if the key in the contact object is "id", then create a delete button instead of <p> element
          const editButton = document.createElement("button")
          editButton.textContent = "Edit"
          editButton.addEventListener("click", EditContactModule.editContact)
          contactSection.appendChild(editButton)

          const deleteButton = document.createElement("button")
          deleteButton.textContent = "Delete"
          deleteButton.addEventListener("click", deleteContact)//add event listener that calls deleteContact
          contactSection.appendChild(deleteButton)

        } else {
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
