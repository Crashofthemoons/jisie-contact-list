const contactCollectionModule = require("./ContactCollection")

const contactList = Object.create({}, { // a function that prints the current contacts in the database to the dom.
  "buildContactList": {
    value: function(){
      contactCollectionModule.getContacts() //gets the contacts from the database
      .then((response) => { //response is holding the array of contacts
        console.log("all contacts", response)
        const currentListRef = document.querySelector(".list-contacts-article")
        if(currentListRef){ //if there is an article on the dom holding the list of contacts, clear it
          currentListRef.remove()
        }
        const contactsArticle = document.createElement("article") //creates article to hold contact list
        contactsArticle.className = "list-contacts-article"
        const contactModule = require("./Contact") //moved down to prevent circular dependency
        response.forEach(contact => { //loops through the array from the database
          contactsArticle.appendChild(contactModule.createContactComponent(contact)) //uses the contact function and appends that to the article just created
        });
        document.querySelector("#display-container").appendChild(contactsArticle)
      })
    }
  }
})

module.exports = contactList
