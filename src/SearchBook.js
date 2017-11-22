import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import Books from './Books'
import PropTypes from 'prop-types'

class SearchBook extends Component {

  state = {
    books:[]
  }

  updateSearch = (value) => {
    this.props.search(value, 20).then(books=> {
       this.setState({books: (books)?books:[]})     
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
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"  onChange={(e)=>this.updateSearch(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          {books.length>0 && (<Books books={books} updateBook={updateBook} selectedShelf='none'/>)}
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