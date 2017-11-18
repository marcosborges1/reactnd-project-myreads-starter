import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {
      read:[],
      wantToRead:[],
      currentlyReading:[]
    }
  }

  componentDidMount = () => {
     BooksAPI.getAll().then(books => { 
          const read = books.filter(book=> book.shelf==='read')
          const wantToRead = books.filter(book=> book.shelf==='wantToRead')
          const currentlyReading = books.filter(book=> book.shelf==='currentlyReading')
          this.setState({books:{'read':read,'wantToRead':wantToRead,'currentlyReading':currentlyReading}})
     })
  }
  

  render() { 
    
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks />
          )}
        />
        <Route path="/search" render={()=> (
            <SearchBook />
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
