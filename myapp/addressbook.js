const chalk = require('chalk');
const lodash = require('lodash');

let addressBook = [];

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(
  chalk.yellow(
    'Enter your first name, last name and telephone number separated by commas: '
  ),
  details => {
    let info = BookManager.transform(details);
    const BookManager1 = new BookManager();
    BookManager1.addAdress(info);
    console.log(addressBook);

    readline.close();
  }
);

// Book manager class
class BookManager {
  static transform(record) {
    return lodash.split(record, ', ');
  }

  addAdress(record) {
    let address = {
      firstName: record[0],
      lastName: record[1],
      phoneNumber: record[2]
    };
    addressBook.push(address);
  }

  getAddressBook() {
    return addressBook;
  }

  removeAddress(index) {
    return addressBook.filter(item => item !== index);
  }

  updateAddress(record, index) {
    addressBook[index] = record;
    return addressBook;
  }

  searchByFirstName(book, firstName) {
    for (let i = 0; i < book.length; i++) {
      if (book[i] == firstName) {
        return true;
      }
    }
  }
}

module.exports.BookManager = new BookManager();
module.exports.addressBook = addressBook;
