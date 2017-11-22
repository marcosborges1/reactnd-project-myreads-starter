import React, {Component} from 'react'



class Books extends Component {

  render() {

    const {books, selectedShelf, updateBook} = this.props

    return (
      <ol className="books-grid">
        {
          books.map(book => {
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url('${book.imageLinks.smallThumbnail}')`}}></div>
                    <div className="book-shelf-changer">
                      <select value={selectedShelf} onChange={(e)=>updateBook(book, e.target.value)}>
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
    )
  }
}

export default Books