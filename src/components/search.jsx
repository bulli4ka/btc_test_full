import React, { Component } from 'react';
class Search extends Component {
  state = { 
    query: ''
   }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
    setTimeout(() => {
      let a = this.state.query.toString().toLowerCase();
      var item = this.props.items.find(item => item.title.toLowerCase() === a);
      this.props.onSearch(item);
    }, 100);
  }

  submit = (e) =>{
    e.preventDefault();
    this.handleInputChange();
  }


  render() { 
    return (
      <form onSubmit={this.submit}>
        <div className="search_block">
          <input type="text" name="" id="" className="search_input" placeholder="Enter Keywords" ref={input => this.search = input}
         onChange={this.handleInputChange}/>
          <button type="submit" className="search_button"></button>
        </div>
      </form> 
    );
  }
}
 
export default Search;