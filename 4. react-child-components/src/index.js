import React from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "Test Dynamic Book", "author":"Test Author", "pages":"100"},
  {"title": "The Alchemist", "author":"Paul Coeho", "pages":"260"},
  {"title": "Kite Runner", "author":"Khaled Hosseini", "pages":"460"},
  {"title": "Rich Dad Poor Dad", "author":"Robert Kiyosaki", "pages":"300"}
]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>{pages} pages</p>
    </section>
  )
}

//  Library with dynamic book data
const Library = ({books}) => {
  return (
    <div>
      {books.map(
        (book, i) => 
            <Book 
              key={i}
              title={book.title} 
              author={book.author}
              pages={book.pages}/>
      )}
    </div>
  )
}

//  Library component with static data for books
// const Library = ({books}) => {
//   return (
//     <div>
//       <Book title="The Alchemist" author="Paul Coeho" pages={260}/>
//       <Book title="Kite Runner" author="Khaled Hosseini" pages={460}/>
//       <Book title="Rich Dad Poor Dad" author="Robert Kiyosaki" pages={300}/>
//     </div>
//   )
// }

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)