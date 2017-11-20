import React, {Component} from "react"
import {Link} from 'react-router-dom'
import BooksByShelf from './BooksByShelf'

class ListBooks extends Component {
  
  render() {

    const {books, updateBook} = this.props

    return (

      <div className="list-books">
        
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksByShelf name="Currently Reading" booksByShelf={books.currentlyReading} updateBook={updateBook} shelfSelected='currentlyReading'/>
            <BooksByShelf name="Want to Read" booksByShelf={books.wantToRead} updateBook={updateBook} shelfSelected='wantToRead' />
            <BooksByShelf name="Read" booksByShelf={books.read} updateBook={updateBook} shelfSelected='read'/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks