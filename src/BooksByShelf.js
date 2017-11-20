import React, {Component} from 'react'

class BooksByShelf extends Component {

  render() {

    const {name, booksByShelf, updateBook,shelfSelected} = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              booksByShelf.map(book => {
                return (
                  <li key={book.title}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url('${book.imageLinks.smallThumbnail}')`}}></div>
                        <div className="book-shelf-changer">
                          <select value={shelfSelected} onChange={(e)=>updateBook(book, e.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">
                        {book.authors.map((nameAuthor,index) => {
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
        </div>
      </div>
    )
  }
}
export default BooksByShelf

