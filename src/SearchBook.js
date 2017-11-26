import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import Books from './Books'
import PropTypes from 'prop-types'
import { Debounce } from 'react-throttle'


class SearchBook extends Component {

  state = {
    books:[]
  }

  bookInUserShelf = (book) => {
    const result = this.props.books.find(b=>{
        return (b.id===book.id)
    })
    return (result) ? result.shelf: ''
  }

  updateSearch = (value) => {
     this.props.search(value, 20).then(books=> {
      books.map(b=> {
          b.shelf = this.bookInUserShelf(b)
          return b
      })
      this.setState({books})
    })
  }
  

  render() {

    const {books} = this.state
    const {updateBook} = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input type="text" placeholder="Search by title or author"  onChange={(e)=>this.updateSearch(e.target.value)}/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {books.length>0 && (<Books books={books} updateBook={updateBook} />)}
        </div>
      </div>
    )
  }
}

SearchBook.propTypes = {
  search: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default SearchBook