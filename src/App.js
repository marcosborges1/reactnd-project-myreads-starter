import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {
  state = { 
    books:[]
  }

  updateBookToShelf = (book, shelf) => {

    if(shelf==='none') return

    BooksAPI.update(book, shelf).then(()=> {
      book.shelf = shelf
      this.setState({ books: this.state.books.filter(b => b.id !== book.id).concat([ book ])})
    })

  }

  searchBook = (search, maxResults=20) => {
    return BooksAPI.search(search,maxResults)
  }

  componentDidMount = () => {
     BooksAPI.getAll().then(books => { 
        this.setState({ books })
     })
  }

  render() {
  
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks books={this.state.books} updateBook={this.updateBookToShelf} />
          )}
        />
        <Route path="/search" render={()=> (
            <SearchBook books={this.state.books} search={this.searchBook} updateBook={this.updateBookToShelf} />
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
