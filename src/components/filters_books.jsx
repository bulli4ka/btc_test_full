import React, { Component } from 'react';
class FiltersBooks extends Component {
  render() {
    return (
      <section className="filters_books">
        <form className="filters_fl">
          <label className="book_filter_btn">
            <input type="radio" name="filter_radios" id="" value="fiter_radio_1" defaultChecked
            onClick={this.props.handleFilterOne} />
            <span className="checker">All Books</span>
          </label>
          <label className="book_filter_btn">
            <input type="radio" name="filter_radios" id="" value="fiter_radio_2"
            onClick={this.props.handleFilterTwo}/>
            <span className="checker">Most Recent</span>
          </label>
          <label className="book_filter_btn">
            <input type="radio" name="filter_radios" id="" value="fiter_radio_3"
            onClick={this.props.handleFilterThree}/>
            <span className="checker">Most Popular</span>
          </label>
          <label className="book_filter_btn">
            <input type="radio" name="filter_radios" id="" value="fiter_radio_4"
            onClick={this.props.handleFilterFour}/>
            <span className="checker">Free Books</span>
          </label>
        </form>
        <form action="">
          <div className="search_block">
            <input type="text" name="" id="" className="search_input" placeholder="Enter Keywords"/>
            <button type="submit" className="search_button"></button>
          </div>
        </form>
      </section>
     );
  }
}
 
export default FiltersBooks;