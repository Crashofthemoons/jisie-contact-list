const $ = require("jquery")
const ContactCollectionModule = require("./ContactCollection")

// const editContact = () => {
//     const newContactName = $(".name-form-field").val()
//     const newContactPhone = $(".phone-form-field").val()
//     const newContactAddr = $(".addr-form-field").val()
//     console.log("add button clicked", newContactName, newContactPhone, newContactAddr);
//     console.log("edit button clicked", event.currentTarget.parentNode.id)
//     const contactId = event.currentTarget.parentNode.id
//     ContactCollectionModule.putContacts(contactId, newContactName, newContactPhone, newContactAddr)
//     .then((response) => {
//             const ContactListModule = require("./ContactList")
//             console.log("response", response)
//             contactListModule.buildContactList() //calls on buildContactList which adds the new contact to the DOM from the updated json file
//         })
//   }

const editContact = () => {

}


module.exports = editContact