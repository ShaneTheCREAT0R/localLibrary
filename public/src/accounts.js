function findAccountById(accounts, id) {
  const result = accounts.find(name => name.id === id) 
  return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((nameA,nameB)=> nameA.name.last > nameB.name.last ? 1 : -1)
  return result
}



function getTotalNumberOfBorrows(account, books) {
 //get the account
  const id = account.id
  
  //reduce the array to get the total number of borrows for a particular ID
const result = books.reduce((total, book) => {
  const borrows = book.borrows
  const accountBorrows = borrows.filter((borrow) => id === borrow.id)
  const numberBorrows = accountBorrows.length 
  return total + numberBorrows} ,0)
return result
} 





function getBooksPossessedByAccount(account, books, authors) {
  //create empty array
  const booksPossessed= [] 
  
  //loop and find which books match that account id
  const booksBorrowed = books.forEach((book) =>{
     if (book.borrows.find((item)=> item.id === account.id && !item.returned)){
      booksPossessed.push(book) 
     }                                
    })
    console.log(booksPossessed);
    booksPossessed.forEach((book)=>{
    let author = authors.find((person) => person.id === book.authorId)
    book['author'] = author
  })
  console.log(booksPossessed);
  return booksPossessed
}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
