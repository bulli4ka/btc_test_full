import React, { Component } from 'react';
import Sidebar from "./components/sidebar";
import TopTitle from "./components/top_title";
import FiltersBooks from "./components/filters_books";
import Book from "./components/book";
import Search from "./components/search";
import './App.scss';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [{
        isbn: '32145',
        img: require("./images/book1.png"),
        title: 'Jewels of Nizam',
        author: 'Geeta Devi',
        rating: '5',
        views: '2',
        free: '1',
        release: '2017',
        publisher: 'Lorem 1 ipsum',
        paperback: 'Lorem 1 ipsum',
        text: 'Lorem 1 ipsum dolor sit amet',
        genre: 'book1'
      },
      {
        isbn: '52312',
        img: require('./images/book2.png'),
        title: 'Cakes & Bakes',
        author: 'Sanjeev Kapoor',
        rating: '5',
        views: '3',
        free: '2',
        release: '2019',
        publisher: 'Lorem 2 ipsum',
        paperback: 'Lorem 2 ipsum',
        text: 'Lorem 2 ipsum dolor sit amet',
        genre: 'book2'
      },
      {
        isbn: '54352',
        img: require('./images/book3.png'),
        title: 'Jamie’s Kitchen',
        author: 'Jamie Oliver',
        rating: '4.5',
        views: '1',
        free: '1',
        release: '2018',
        publisher: 'Lorem 3 ipsum',
        paperback: 'Lorem 3 ipsum',
        text: 'Lorem 3 ipsum dolor sit amet',
        genre: 'book3'
      }
    ],
    searchedItem: '',
    selectFilter: 'fiter_radio_1'};
  }

  onSearch(event){
    this.setState({searchedItem:event});
    if (event === undefined) {
      console.log("search null");
      let storageList = localStorage.getItem("list");
      storageList = JSON.parse(storageList);
      this.setState({ list : storageList});
    } else {
      let newData = [];
      newData.push(event);
      
      setTimeout(() => {
        this.setState({list:newData});
      }, 500);
    }
    
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  };
  componentDidMount() {
    if(localStorage.getItem("list") === null) {
      
      window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );

      this.saveStateToLocalStorage();
    } else {
      let storageList = localStorage.getItem("list");
      storageList = JSON.parse(storageList);
      this.setState({ list : storageList});
    }
  };
  getRandomElement = () => {
    const imagesBooks = [require('./images/book1.png'), require('./images/book2.png'), require('./images/book3.png'),require('./images/book4.png'),require('./images/book5.png'),require('./images/book6.png'),require('./images/book7.png'),require('./images/book8.png'),require('./images/book9.png'),require('./images/book10.png')];
    return imagesBooks[Math.floor(Math.random() * imagesBooks.length)] ;
  };
  onChange(event){
    var newArray = this.state.list.slice();
    newArray.push({
      isbn: event.isbn,
      img: require('./images/book1.png'),
      title: event.title,
      author: event.author,
      rating: '4',
      views: '2',
      free: '1',
      release: '2017',
      publisher: event.publisher,
      paperback: event.paperback,
      text: event.text,
      genre: event.genre
    });
    this.setState({list:newArray});
    setTimeout(() => {
      this.saveStateToLocalStorage();
    }, 500);

  }

  handleFilterOne = () => {
    this.setState({ selectFilter: 'fiter_radio_1' });
    let storageList = localStorage.getItem("list");
    storageList = JSON.parse(storageList);
    this.setState({ list : storageList});
  }
  handleFilterTwo = () => {
    this.setState({ selectFilter: 'fiter_radio_2' });
    this.setState({ list : this.state.list.sort(this.compareRelease)});
  }
  handleFilterThree = () => {
    this.setState({ selectFilter: 'fiter_radio_3' });
    this.setState({ list : this.state.list.sort(this.compareViews)});
  }
  handleFilterFour = () => {
    this.setState({ selectFilter: 'fiter_radio_4' });
    this.setState({ list : this.state.list.sort(this.compareFree)});
  }

  compareViews(a,b) {
    if (a.rating < b.rating)
      return 1;
    if (a.rating > b.rating)
      return -1;
    return 0;
  }
  compareRelease(a,b) {
    if (a.release < b.release)
      return -1;
    if (a.release > b.release)
      return 1;
    return 0;
  }
  compareFree(a,b) {
    if (a.free > b.free)
      return -1;
    if (a.free < b.free)
      return 1;
    return 0;
  }


  render() {
    return (
      <div>
        <Sidebar list={this.state.list} onChange={this.onChange.bind(this)}/>
        <TopTitle/>
        <FiltersBooks selectFilter={this.state.selectFilter} 
        handleFilterOne={this.handleFilterOne.bind(this)}
        handleFilterTwo={this.handleFilterTwo.bind(this)}
        handleFilterThree={this.handleFilterThree.bind(this)}
        handleFilterFour={this.handleFilterFour.bind(this)}
        />
        <Search items={this.state.list} onSearch={this.onSearch.bind(this)}/>
        <Book items={this.state.list}/>
      </div>
    );
  }
}

export default App;
