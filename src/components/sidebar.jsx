import React, { Component } from 'react';
import AddBookButton from "./add_book_button";
import SidebarLinks from "./sidebar_links";
class Sidebar extends Component {
  state = {  }
  render() { 
    return ( 
      <section className="sidebar">
        <AddBookButton list={this.props.list} onChange={this.props.onChange} newItem={this.props.newItem}/>
        <SidebarLinks/>
      </section>
     );
  }
}
 
export default Sidebar;