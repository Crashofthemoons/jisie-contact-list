const $ = require("jquery")

const contactCollection = Object.create({}, {
  "postContact": {
    value: function(name, phone, address) { //posts a new contact to the json database with input field values
      return $.ajax({
        url: "http://localhost:3000/contacts",
        method: "POST",
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  },
  "getContacts": {
    value: function() {
      return $.ajax("http://localhost:3000/contacts") //gets the current list of contacts in the json database
    }
  },
  "deleteContact": { //deletes a contact based on their unique id
    value: function(id){
      return $.ajax({
        url: `http://localhost:3000/contacts/${id}`,
        method: "DELETE"
      })
    }
  }
})

module.exports = contactCollection
