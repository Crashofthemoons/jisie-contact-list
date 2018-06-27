const ContactCollectionModule = require("./ContactCollection")
const ContactListModule = require("./ContactList")
const ContactForm = require("./ContactForm")
const $ = require("jquery")

const editContact = () => {
    const contactId = event.currentTarget.parentNode.id //getting id from target contact
    const formArticle = document.querySelector("#form-article") //selecting article that contains input form
    const editButton = document.createElement("button") //creating edit button
    editButton.textContent = "Update"
    editButton.id = `${contactId}` //setting target id as edit button id
    editButton.addEventListener("click", editExistingContact) //calling editExistingContact function on click
    formArticle.appendChild(editButton) //adds edit button to input article

    ContactCollectionModule.getContact(contactId) //get contact from database by id and calls contactForm while passing in response
    .then((response) => {
      console.log("contact to be edited", response);

      const nameField = document.querySelector(".name-form-field")//populate existing contact info into input field
      nameField.value = response.name

      const phoneField = document.querySelector(".phone-form-field")
      phoneField.value = response.phone

      const addrField = document.querySelector(".addr-form-field")
      addrField.value = response.address

    })
  }

const editExistingContact = () => { //event when update button is clicked
    const contactId = event.currentTarget.id
    console.log(contactId)
    const contactName = $(".name-form-field").val()
    const contactPhone = $(".phone-form-field").val()
    const contactAddress = $(".addr-form-field").val()
    ContactCollectionModule.putContact(contactId, contactName, contactPhone, contactAddress)
    .then(() => {
        // document.querySelector(".edit-contact-article").remove()
        ContactListModule.buildContactList()
    })
}

// const buildEditContactForm = (contact) => {
//   const editContactArticle = document.createElement("article")
//   editContactArticle.className = "edit-contact-article"

//   const nameSection = document.createElement("section")

//   const nameLabel = document.createElement("label")
//   nameLabel.textContent = "Name: "
//   nameSection.appendChild(nameLabel)

//   const nameField = document.createElement("input")
//   nameField.setAttribute("type", "text")
//   nameField.className = "name-edit-field"
//   nameField.value = contact.name
//   nameSection.appendChild(nameField)

//   editContactArticle.appendChild(nameSection)

//   const phoneSection = document.createElement("section")

//   const phoneLabel = document.createElement("label")
//   phoneLabel.textContent = "Phone: "
//   phoneSection.appendChild(phoneLabel)

//   const phoneField = document.createElement("input")
//   phoneField.setAttribute("type", "tel")
//   phoneField.className = "phone-edit-field"
//   phoneField.value = contact.phone
//   phoneSection.appendChild(phoneField)

//   editContactArticle.appendChild(phoneSection)

//   const addrSection = document.createElement("section")

//   const addrLabel = document.createElement("label")
//   addrLabel.textContent = "Address: "
//   addrSection.appendChild(addrLabel)

//   const addrFieldOne = document.createElement("input")
//   addrFieldOne.setAttribute("type", "text")
//   addrFieldOne.className = "addr-edit-field"
//   addrFieldOne.value = contact.address
//   addrSection.appendChild(addrFieldOne)

//   editContactArticle.appendChild(addrSection)

//   const editButton = document.createElement("button")
//   editButton.textContent = "Update"
//   editButton.id = `${contact.id}`
//   editButton.addEventListener("click", editExistingContact)
//   editContactArticle.appendChild(editButton)

//   document.query
// }

module.exports = {editContact, editExistingContact}