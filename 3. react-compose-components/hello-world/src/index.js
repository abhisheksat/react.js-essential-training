import React from 'react';
import { render } from 'react-dom';

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>{pages} pages</p>
    </section>
  )
}

const Library = () => {
  return (
    <div>
      <Book title="The Alchemist" author="Paul Coeho" pages={260}/>
      <Book title="Kite Runner" author="Khaled Hosseini" pages={460}/>
      <Book title="Rich Dad Poor Dad" author="Robert Kiyosaki" pages={300}/>
    </div>
  )
}

render(
  <Library />,
  document.getElementById('root')
)