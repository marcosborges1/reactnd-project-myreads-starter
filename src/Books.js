import React from 'react'
import PropTypes from 'prop-types'

const Books = (props) => {

  const {books, updateBook} = props
  return (
    <ol className="books-grid">
      {
        books.map(book => {
          const thumbnail = (book.imageLinks) ? book.imageLinks.smallThumbnail:''
          return (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${thumbnail})`}}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e)=>updateBook(book, e.target.value)}>
                      <option value="" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  {book.authors && book.authors.length > 0 && book.authors.map((nameAuthor,index) => {
                    return (
                      ((index!==0) ? `, `:``) + nameAuthor
                    )
                  })
                }
                </div>
              </div>
            </li>
          )
        })
      }
    </ol>
  )
}
Books.propTypes = {

  books: PropTypes.array.isRequired,
  updateBook : PropTypes.func.isRequired

}

export default Books