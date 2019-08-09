const chai = require('chai');

const { assert } = chai;

const book = require('../myapp/addressbook');

describe('Address Book', function() {
  it('Check that the address book really exists', function() {
    const addressBook = book.addressBook;
    assert.exists(addressBook);
  });
  it('Check that a method that return all the addresses exists', function() {
    const addressBook = book.BookManager.getAddressBook();
    assert.exists(addressBook);
  });
  it('AddBook() should add a new address to the list', function() {
    book.BookManager.addAdress({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+2567828289'
    });
    const addressBook = book.BookManager.getAddressBook();
    assert.isAbove(addressBook.length, 0);
  });

  it('Check that removeAdress method deletes an address record', function() {
    book.BookManager.addAdress({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+2567828289'
    });
    const addressBook = book.BookManager.removeAddress(0);
    assert.notEqual(addressBook.length, 1);
  });

  it('Check that the updateAddress really update the address book entry', function() {
    const addressBook = book.BookManager.updateAddress(
      {
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '+2567828289'
      },
      0
    );
    assert.equal(addressBook[0].firstName, 'John');
  });

  it('Check that the search function returns the firstName searched', function() {
    const addressBook = book.addressBook;
    book.BookManager.addAdress({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+2567828289'
    });
    const firstName = book.BookManager.searchByFirstName(addressBook, 'John');
    assert.isTrue(firstName);
  });
});
