import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
  {"title": "Test Dynamic Book", "author":"Test Author", "pages":"100"},
  {"title": "The Alchemist", "author":"Paul Coeho", "pages":"260"},
  {"title": "Kite Runner", "author":"Khaled Hosseini", "pages":"460"},
  {"title": "Rich Dad Poor Dad", "author":"Robert Kiyosaki", "pages":"300"}
]

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)