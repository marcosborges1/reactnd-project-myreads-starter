import React, {Component} from "react"
import {Link} from 'react-router-dom'
import BooksByShelf from './BooksByShelf'
import PropTypes from 'prop-types'

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
            <BooksByShelf name="Currently Reading" books={books.filter(book=>book.shelf==='currentlyReading')} updateBook={updateBook} selectedShelf='currentlyReading'/>
            <BooksByShelf name="Want to Read" books={books.filter(book=>book.shelf==='wantToRead')} updateBook={updateBook} selectedShelf='wantToRead' />
            <BooksByShelf name="Read" books={books.filter(book=>book.shelf==='read')} updateBook={updateBook} selectedShelf='read'/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {

  books: PropTypes.array.isRequired,
  updateBook : PropTypes.func.isRequired

}

export default ListBooks