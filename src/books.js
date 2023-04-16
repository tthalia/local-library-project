function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id)
    return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
    return found;
}

function partitionBooksByBorrowedStatus(books) {
  //does every item have returned status? 
  let borrowed = books.filter((book) => book.borrows.every((book) => book.returned == true));
 //if not, does one item havent been returned? 
  let returned = books.filter((book) => book.borrows.some(book => book.returned == false));
  //return items that have been returned and those that have not been.
  return [returned, borrowed]
}

function getBorrowersForBook(book, accounts) {
        let borrowed = []; 
      book.borrows.map(borrow => {
     let borrower = accounts.find(account => account.id === borrow.id)
     borrower.returned = borrow.returned  
     borrowed.push(borrower)   
      })

    return borrowed.slice(0,10)



}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
