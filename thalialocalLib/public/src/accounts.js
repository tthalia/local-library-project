function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
    return found;
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((a,b) => a.name["last"].toLowerCase() > b.name["last"].toLowerCase() ? 1 : -1);


}
  
 
function getTotalNumberOfBorrows(account, books) {
  let sum = 0

  for(let i = 0 ; i < books.length; i++){
    for(let j = 0; j < books[i].borrows.length; j++){
      if(books[i].borrows[j].id === account.id){
        sum+=1
      }
    }
  }
  return sum;
}




function getBooksPossessedByAccount(account, books, authors) {
  let takenBooks = [];
  //make a new array with matching "IDs" that are borrowed books 
for (array of books){
  array.borrows.find(borrowed => borrowed.id === account.id && borrowed.returned === false) ? takenBooks.push(array) : null;
}
   //embed author into books object 
  takenBooks.forEach(book => { book['author'] = authors.find(author => author.id === book.authorId)})
  
  return takenBooks;

                                     
}
  
  

  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
