function getTotalBooksCount(books) {
  const result = books.reduce((total,book) => { 
    return total + 1}, 0)
    return result
}

function getTotalAccountsCount(accounts) {
    const result = accounts.reduce((total,account) => { 
    return total + 1}, 0)
    return result  
}

function getBooksBorrowedCount(books) {
  const result = books.reduce((total, book) => {
  const borrows = book.borrows
  const isBorrowed = borrows.filter((borrow) => borrow.returned === false)
  const numberBorrows = isBorrowed.length 
  return total + numberBorrows} ,0)
return result
}




function getMostCommonGenres(books) {
  let result =[]
  let genreCount = {};
  
  //iterate through books to get the genre count
  books.forEach(book => {
    if (genreCount[book.genre] != null) {
      genreCount[book.genre]++;
    } else {
      genreCount[book.genre] = 1;
    }
  });
  
  //create an array that has the name and count inside of it
  let countArray = [];
  for (const [key, value] of Object.entries(genreCount)) {
    countArray.push({
      'name': key,
      'count': value
    }); 
  }

  //write sort function to sort books by largest genre count 
  const commonGenre = countArray.sort((bookA, bookB) =>
    (bookA.count < bookB.count ? 1 : -1)                     
     )
  //limit that list to 5 or fewer outputs and put it in the array
  for (let i = 0; i <= 4; i++){
    result.push(commonGenre[i])
  }
    return result
}




function getMostPopularBooks(books) {
  //create empty array 
  let result = []
  
 //Map to a new type of array with name and count
  const bookList = books.map((book) => ({name:book.title, count:book.borrows.length}));

  //write sort function to sort books by longest borrow length which means most popular book
  const popular = bookList.sort((bookA, bookB) =>
    (bookA.count < bookB.count ? 1 : -1)                     
     )
  //limit that list to 5 or fewer outputs and put it in the array
  for (let i = 0; i <= 4; i++){
    result.push(popular[i])
  }
    return result
}


function getMostPopularAuthors(books, authors) {
    //create empty array 
  let result = []
  let finalResult = []
  //find all the books written by the author
  let authorObject = authors.forEach(author => {
    const popularAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    //add up the number of times those books (all of those authors books) has been borrowed
    const booksCount = books.forEach(book => {
    if (book.authorId === author.id){
      popularAuthor.count += book.borrows.length
    }
  }) 
    result.push(popularAuthor)
 })
  
 
  //write sort function to sort books by longest borrow length
  const popular = result.sort((authorA, authorB) =>
    (authorA.count < authorB.count ? 1 : -1)                     
     )
  //limit that list to 5 or fewer outputs and put it in the array
  for (let i = 0; i <= 4; i++){
    finalResult.push(popular[i])
  }
    return finalResult
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
