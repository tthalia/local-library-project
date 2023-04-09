function getTotalBooksCount(books) {
  return books.length;
}
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((b) => b.borrows.filter((book) => book.returned === false).length);
  
   return result.length;
  
}

function getMostCommonGenres(books) {
  //create empty object item
  let genreNames = {};
  //loop over books array
  // books.map(book => 
  
  for(book of books){
       genreNames[book.genre] == null ? genreNames[book.genre] = 1 :    genreNames[book.genre] ++ ;
   }
  //console.log('array', array)
  //if condition: to check how common genre is using ++ or +=
  //and once condition is met , put them into empty object genreNames

let common = [];
  for(let [key, value] of Object.entries(genreNames)){
    console.log(genreNames);
    common.push({'name': key, 'count': value});
  }
  return common.sort((a,b) => b.count - a.count).slice(0,5);

}

function getMostPopularBooks(books) {

  //use map() to return obj with title and count
  // count is .length of IDs that have borrowed book
  
  let popular =  books.map(books => { return {name: books.title, count: books.borrows.length}});
                      
//sort most borrowed and slice() at 5 . from biggest number to smallest number.

  return popular.sort((a,b) => a.count < b.count ? 1:-1).slice(0,5)
 
}
function helperLoopBooks(books, author, newObj){
  //loop over books and look into borrows.length to increment count popularity.
    for(let book of books){
     author.id === book.authorId ? 
       newObj['count'] += book.borrows.length : 0
    
    }
}
function getMostPopularAuthors(books, authors) {
  //loop over author and books find matching authors.id , books.authorId
  //what are we collecting? book.borrows.length, author.name
  let popular = [];
    //loop over authors array and create a new variable to contain an object of onl names and a count variable.
  let count = 0
  for(let author of authors){
    let newObj = 
      {name: `${author.name.first} ${author.name.last}` , count: count };
    
    helperLoopBooks(books, author, newObj)
    //push author with new object that conatins name and nw count num.
       popular.push(newObj)

     }
    return popular.sort((a,b) => b.count - a.count).slice(0,5)


}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};