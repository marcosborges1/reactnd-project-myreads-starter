import React, {Component} from 'react'
import Books from './Books'

class BooksByShelf extends Component {

  render() {

    const {name, books, updateBook,selectedShelf} = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <Books books={books} selectedShelf={selectedShelf} updateBook={updateBook}/>
        </div>
      </div>
    )
  }
}
export default BooksByShelf

