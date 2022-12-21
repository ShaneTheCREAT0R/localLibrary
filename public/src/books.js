function findAuthorById(authors, id) {
  const result = authors.find((name) => name.id === id) 
return result
}

function findBookById(books, id) {
  var result = books.find((book) => book.id === id)
  return result
}


function partitionBooksByBorrowedStatus(books) {
 
  //use filter method to filter the books that are checked out
   const checkedOut = books.filter((book) => book.borrows[0].returned === false)
  //use filter method to filter the books that have been returned
    const returned = books.filter((book) => book.borrows[0].returned === true)
    
  //return one array with two separate arrays inside it
 return [checkedOut, returned]  
}

/*
It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.

output= 10 or fewer account objects that include the returned entry from that book's borrows array
*/

function getBorrowersForBook(book, accounts) {
   //create an empty array to put the output in
  let results = []
  
   //find the accounts that match the provided book object
  const borrows = book.borrows
  //[{id,returned},{}]
  const borrowIds = borrows.map((borrow) => borrow.id)
  const borrowAccounts = accounts.filter((account) => borrowIds.includes(account.id))
  const borrowAccountsWithReturned = borrowAccounts.map((account) => {
    const accountBorrow = borrows.find((borrow) => borrow.id === account.id)
    const newAccount = account 
    newAccount.returned = accountBorrow.returned 
    return newAccount 
  })
  
  //limit that list to 10 or fewer outputs
  for (let i = 0; i < 10; i++){
    results.push(borrowAccountsWithReturned[i])
  }
  
  //include the returned entry from book's borrows array in output array
  return results
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
