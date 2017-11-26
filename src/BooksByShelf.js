import React from 'react'
import Books from './Books'
import PropTypes from 'prop-types'

const BooksByShelf = (props) => {

  const {name, books, updateBook,selectedShelf} = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <Books books={books} selectedShelf={selectedShelf} updateBook={updateBook}/>
      </div>
    </div>
  ) 
  
}

BooksByShelf.propTypes = {

  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBook : PropTypes.func.isRequired,
  selectedShelf: PropTypes.string

}

export default BooksByShelf

