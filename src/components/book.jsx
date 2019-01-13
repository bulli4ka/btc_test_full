import React, { Component } from 'react';
import Modal from "./modal";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        general_tab: 'modal_tab_block',
        genre_tab: 'modal_tab_none'
      }
    }
  };


  handleGenreTab = () => {
    this.setState(prevState => ({
      tab: {
          ...prevState.tab,
          genre_tab: 'modal_tab_block',
          general_tab: 'modal_tab_none'
      }
    }));
    let elementsOne = document.querySelectorAll(".general_tab_button");
    for (let index = 0; index < elementsOne.length; index++) {
      elementsOne[index].classList.remove('active');
    };
    let elementsTwo = document.querySelectorAll(".genre_tab_button");
    for (let index = 0; index < elementsTwo.length; index++) {
      elementsTwo[index].classList.add('active');
    };
  };
  handleGeneralTab = () => {
    this.setState(prevState => ({
      tab: {
          ...prevState.tab,
          general_tab: 'modal_tab_block',
          genre_tab: 'modal_tab_none'
      }
    }));
    let elementsOne = document.querySelectorAll(".general_tab_button");
    for (let index = 0; index < elementsOne.length; index++) {
      elementsOne[index].classList.add('active');
    };
    let elementsTwo = document.querySelectorAll(".genre_tab_button");
    for (let index = 0; index < elementsTwo.length; index++) {
      elementsTwo[index].classList.remove('active');
    };
  };



  render() {
    return (
      <div className="container_books">
        {this.props.items.map((item, index) =>
          <div className="book" key={index}>
            <div className="book_img_wrapper">
              <img src={item.img} alt={item.title} onClick={() => this.refs["modal_book"+index.toString()].handleShowModal()}/>
            </div>
            <span className="book_author">by <span>{item.author}</span></span>
            <span className="book_rating">{this.getRatingStars(index)}</span>
            <Modal ref={"modal_book"+index.toString()} titleForModal={item.title}>
              {/* <div className="clearfix">
                <div className="book_modal_content">
                <img src={item.img} alt={item.title} className="book_img_inmodal"/>
                <p className="book_text_inmodal">{this.props.items[index].text}</p>
                </div>
              </div> */}


              <div className="clearfix">
                <div className="modal_tabs">
                <ul>
                  <li>
                    <a href="#General" className="general_tab_button active" onClick={this.handleGeneralTab}>General</a>
                  </li>
                  <li>
                    <a href="#Genre" className="genre_tab_button" onClick={this.handleGenreTab}>Genre</a>
                  </li>
                  <li>
                    <a href="#Poster">Poster</a>
                  </li>
                  <li>
                    <a href="#Info">Info</a>
                  </li>
                </ul>
                </div>
                  <div className="main_modal_content">
                    <div className={this.state.tab.general_tab}>
                      <form action="">
                        <label>Title</label>
                        <p>{item.title}</p>
                        <label>Author</label>
                        <p>{item.author}</p>
                        <label>Publisher</label>
                        <p>{item.publisher}</p>
                        <div className="two_inputs_line">
                          <div className="inputs_col">
                          <label>Paperback</label>
                          <p>{item.paperback}</p>
                          </div>
                          <div className="inputs_col">
                          <label>ISBN</label>
                          <p>{item.isbn}</p>
                          </div>
                        </div>
                        <label>Summary</label>
                        <p>{item.text}</p>
                      </form>
                    </div>
                    <div className={this.state.tab.genre_tab}>
                      <label>Genre</label>
                      <p>{item.genre}</p>
                    </div>

                  </div>
                </div>




              <div className="modal_footer">
                <button className="modal_cancel_button" onClick={() => this.refs["modal_book"+index.toString()].hideModal()}>Cancel</button>
              </div>
            </Modal>
          </div>
        )}
      </div>
     );
  }



  getRatingStars(key) {
    let ratingFromProps = this.props.items[key].rating;
    if (ratingFromProps === "5") {
      return "";
    }
    else if (ratingFromProps === "4.5") {
      return "";
    }
    else if (ratingFromProps === "4") {
      return "";
    }
    else if (ratingFromProps === "3.5") {
      return "";
    }
  }

}
 
export default Book;