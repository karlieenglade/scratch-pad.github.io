// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. (the list is `contacts`)
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
/*
i: 1 number, 2 strings; id, nameFirst, nameLast
o: object, contact object
*/

function makeContact(id, nameFirst, nameLast) {
  //return contact object
  return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
  };
}

function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];

  return {
    // we implemented the length api for you //
    length: function(){
      return contacts.length;
    },
    addContact: function(contact){
    //i: contact object to add to contacts list/array
    //push contact object into contacts array
    contacts.push(contact);
    },
    findContact: function(fullName){
      // i: string of full name, "Max Ross"
      // o: returns contact object if fullName is found in contact list
      //      or returns undefined if not found 
      //loop over contacts list to access every value/object
      for (var i = 0; i < contacts.length; i++){
        //constacts[i] is an object, so use object access
          // if contact[i] object first and last name with space between === fullName
        if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
          //then return that object, contacts[i]
          return contacts[i];
          //otherwise
        } else {
          //return undefined
          return undefined;
        }
      }
    },
    removeContact: function(contact){
      // i: contact object, to be removed from contacts list
      //loop over contacts list
      for (var i = 0; i < contacts.length; i++){
        //if contact object === input contact
        if (contacts[i] === contact){
          //delete it using splice
            //delete 1 item, starting at index of matching contact
          contacts.splice(contacts[i], 1);
        }
      }
    },
    printAllContactNames: function(){
      //i:
      //o: a string of all the full names of contacts, separated by line break
      //c: no new-line after last contact
      //create storage array to store full names in, to join \n later for string return
      var storage = [];
      //loop over contacts list
      for (var i = 0; i < contacts.length; i++){
        //push full name into storage array
        storage.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
      }
      //assigning joined storage array to variable
        //using join because it only affects between values, not at end of values
      var storageStr = storage.join("\n");
      //return this string
      return storageStr;
    }
  }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
