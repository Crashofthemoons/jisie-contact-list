const ContactListModule = require("./ContactList")
const ContactCollectionModule = require("./ContactCollection")

const deleteContact = () => {
    console.log("delete button clicked", event.currentTarget.parentNode.id)
    const contactId = event.currentTarget.parentNode.id
    ContactCollectionModule.deleteContact(contactId)
    .then(() => {
      ContactListModule.buildContactList()
    })
  }

module.exports = deleteContact