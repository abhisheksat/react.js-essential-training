import React from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "Test Dynamic Book", "author":"Test Author", "pages":"100"},
  {"title": "The Alchemist", "author":"Paul Coeho", "pages":"260"},
  {"title": "Kite Runner", "author":"Khaled Hosseini", "pages":"460"},
  {"title": "Rich Dad Poor Dad", "author":"Robert Kiyosaki", "pages":"300"}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>{pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The library is hiring. Go to www.library.com/jobs for more info.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>


//  Library with dynamic book data
//  state requires the component to be a ES6 class component rather than a functional component
class Library extends React.Component {
 
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     open: true
  //   }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  // }

  // toggleOpenClosed() {
  //   this.setState({
  //     open: !this.state.open
  //   })
  // }

  state = { 
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount() {
    console.log("The Library Component is now mounted");
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("The Library Component is now updated");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? "loading..." : 
        <div>
          {this.state.data.map(product => {
            return (
              <div key={product.id}>
                <h3>Library Product of the Week!</h3>
                <h4>{product.name}</h4>
                <img alt={product.name} src={product.image} height={100}/>
              </div>
            )
          })}
        </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'close'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
              <Book 
                key={i}
                title={book.title} 
                author={book.author}
                pages={book.pages}
                freeBookmark={this.state.freeBookmark}/>
        )}
      </div>
    )
  }
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