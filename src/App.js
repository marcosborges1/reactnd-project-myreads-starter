import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {
  state = {
    books: {
      read:[],
      wantToRead:[],
      currentlyReading:[]
    }
  }

  updateBookToShelf = (book, shelf) => {

    if(shelf==='none') return

    BooksAPI.update(book, shelf).then(()=> {

        let read = this.state.books['read'].filter(c=>c.title!==book.title)
        let wantToRead = this.state.books['wantToRead'].filter(c=>c.title!==book.title)
        let currentlyReading = this.state.books['currentlyReading'].filter(c=>c.title!==book.title)

        read = (shelf==='read') ? read.concat([book]) : read
        wantToRead = (shelf==='wantToRead') ? wantToRead.concat([book]) : wantToRead
        currentlyReading = (shelf==='currentlyReading') ? currentlyReading.concat([book]): currentlyReading

        this.setState({books:{'read':read,'wantToRead':wantToRead,'currentlyReading':currentlyReading}})
    })

  }

  searchBook = (search, maxResults=5) => {

    return BooksAPI.search(search,maxResults)

  }

  componentDidMount = () => {
     BooksAPI.getAll().then(books => { 
          const read = books.filter(book=> book.shelf==='read')
          const wantToRead = books.filter(book=> book.shelf==='wantToRead')
          const currentlyReading = books.filter(book=> book.shelf==='currentlyReading')
          // console.log(read)
          this.setState({books:{'read':read,'wantToRead':wantToRead,'currentlyReading':currentlyReading}})
     })
  }

  render() {
    
   // console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks books={this.state.books} updateBook={this.updateBookToShelf} />
          )}
        />
        <Route path="/search" render={()=> (
            <SearchBook search={this.searchBook} updateBook={this.updateBookToShelf}/>
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
