import React, { Component } from 'react';
class SidebarLinks extends Component {
  state = {  }
  render() { 
    return ( 
        <ul className="sidebar_links">
          <li>
            <a href="#link">Now Reading</a>
          </li>
          <li>
            <a href="#link" className="active">Browse</a>
          </li>
          <li>
            <a href="#link">Buy Books</a>
          </li>
          <li>
            <a href="#link">Favourite Books</a>
          </li>
          <li>
            <a href="#link">Wishlist</a>
          </li>
        </ul>
     );
  }
}
 
export default SidebarLinks;