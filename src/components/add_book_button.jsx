import React, { Component } from 'react';
import Modal from "./modal";

function validateTitle(title, author, isbn) {
  return {
    title: title.length === 0,
    author: author.length === 0,
    isbn: isbn.length === 0
  }
}

function isAN(value) {
  if(value instanceof Number)
    value = value.valueOf();
  return  isFinite(value) && value === parseInt(value, 10);
}

class AddBookButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        general_tab: 'modal_tab_block',
        genre_tab: 'modal_tab_none'
      },
      errors: {
        title: '',
        author: '',
        isbn: '',
        publisher: ''
      },
      list: this.props.list,
      newItem: [{
        isbn: '',
        img: '',
        title: '',
        author: '',
        rating: '4',
        views: '2',
        free: '1',
        release: '2017',
        publisher: '',
        paperback: '',
        text: '',
        genre: ''
      }]
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
    document.querySelector(".general_tab_button").classList.remove('active');
    document.querySelector(".genre_tab_button").classList.add('active');
  };
  handleGeneralTab = () => {
    this.setState(prevState => ({
      tab: {
          ...prevState.tab,
          general_tab: 'modal_tab_block',
          genre_tab: 'modal_tab_none'
      }
    }));
    document.querySelector(".genre_tab_button").classList.remove('active');
    document.querySelector(".general_tab_button").classList.add('active');
  };

  handleTitleChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          title: enterValue
      }
    }));
    this.setState(prevState => ({
      errors: {
          ...prevState.errors,
          title: enterValue
      }
    }));
  };
  handleAuthorChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          author: enterValue
      }
    }));
    this.setState(prevState => ({
      errors: {
          ...prevState.errors,
          author: enterValue
      }
    }));
  };
  handleIsbnChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          isbn: enterValue
      }
    }));
    this.setState(prevState => ({
      errors: {
          ...prevState.errors,
          isbn: enterValue
      }
    }));
  };
  handlePublisherChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          publisher: enterValue
      }
    }));
    this.setState(prevState => ({
      errors: {
          ...prevState.errors,
          publisher: enterValue
      }
    }));
  };
  handlePaperbackChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          paperback: enterValue
      }
    }));
  };
  handleTextChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          text: enterValue
      }
    }));
  };
  handleGenreChange = (e) => {
    let enterValue = e.target.value;
    this.setState(prevState => ({
      newItem: {
          ...prevState.newItem,
          genre: enterValue
      }
    }));
  };

  handleAddNewItem = () => {
    let isbnNew = this.state.newItem.isbn;
    if (isAN(Number(isbnNew))!==true) {
      document.querySelector(".modal_isbn_error").style.opacity = "1";
    } else if(this.state.errors.title === '') {
      document.querySelector(".modal_title_error").style.opacity = "1";
    } else if(this.state.errors.author === '') {
      document.querySelector(".modal_author_error").style.opacity = "1";
    } else if(this.state.errors.publisher === '') {
      document.querySelector(".modal_publisher_error").style.opacity = "1";
    } else {
      this.props.onChange(this.state.newItem);

      setTimeout(() => {
        this.setState(prevState => ({
          newItem: {
              ...prevState.newItem,
              isbn: '',
              img: '',
              title: '',
              author: '',
              rating: '4',
              views: '2',
              free: '1',
              release: '2017',
              publisher: '',
              paperback: '',
              text: '',
              genre: ''
          }
        }));
      }, 100);

      document.querySelector(".modal_isbn_error").style.opacity = "0";
      document.querySelector(".modal_title_error").style.opacity = "0";
      document.querySelector(".modal_author_error").style.opacity = "0";
      document.querySelector(".modal_publisher_error").style.opacity = "0";
      document.querySelector(".modal_cancel_button").click();

      setTimeout(() => {
        document.querySelector(".modal_success").click();
      }, 100);
    }
  };

  render() { 
    const errors = validateTitle(this.state.errors.title,this.state.errors.author,this.state.errors.isbn);
    return (
      <div className="add_book_wrapper">
        <Modal list={this.props.list} ref="modalAddBook" titleForModal="Add New Books">
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
                  <label>Title<span className="red_stars">*</span><span className="modal_title_error">Поле Title не должно быть пустым</span></label>
                  <input type="text" name="title" id="modal_title" className={errors.title ? "modal_text_input error" : "modal_text_input"} placeholder="Enter Title" value={this.state.newItem.title || ''} onChange={this.handleTitleChange}/>
                  <label>Author<span className="red_stars">*</span><span className="modal_author_error">Поле Author не должно быть пустым</span></label>
                  <input type="text" name="author" className={errors.author ? "modal_text_input error" : "modal_text_input"} placeholder="Enter Author" value={this.state.newItem.author || ''} onChange={this.handleAuthorChange}/>
                  <label>Publisher<span className="red_stars">*</span><span className="modal_publisher_error">Поле Publisher не должно быть пустым</span></label>
                  <input type="text" name="publisher" className={errors.publisher ? "modal_text_input error" : "modal_text_input"} placeholder="Enter Publisher" value={this.state.newItem.publisher || ''} onChange={this.handlePublisherChange}/>
                  <div className="two_inputs_line">
                    <div className="inputs_col">
                    <label>Paperback</label>
                    <input type="text" name="paperback" className="modal_text_input" placeholder="Enter Paperback" value={this.state.newItem.paperback || ''} onChange={this.handlePaperbackChange}/>
                    </div>
                    <div className="inputs_col">
                    <label>ISBN<span className="red_stars">*</span><span className="modal_isbn_error">Поле ISBN может содержать только цифры</span></label>
                    <input type="text" name="isbn" className={errors.isbn ? "modal_text_input error" : "modal_text_input"} placeholder="Enter ISBN" value={this.state.newItem.isbn || ''} onChange={this.handleIsbnChange}/>
                    </div>
                  </div>
                  <label>Summary</label>
                  <input type="text" name="summary" className="modal_text_input" placeholder="Enter Summary" value={this.state.newItem.text || ''} onChange={this.handleTextChange}/>
                </form>
              </div>
              <div className={this.state.tab.genre_tab}>
              <label>Genre</label>
                  <input type="text" name="genre" className="modal_text_input" placeholder="Enter Genre" value={this.state.newItem.genre || ''} onChange={this.handleGenreChange}/>
              </div>
            </div>
          </div>
            <div className="modal_footer">
              <button className="modal_cancel_button" onClick={() => this.refs["modalAddBook"].hideModal()}>Cancel</button>
              <button className="modal_addbook_button" onClick={this.handleAddNewItem}>Add Book</button>
            </div>
        </Modal>

        <Modal ref="modalAddBookThank">
          <div className="modal_success_block">
            <p>The book "{this.state.errors.title}"
successfully added</p>
          </div>
          <div className="modal_footer">
            <button className="modal_cancel_button" onClick={() => this.refs["modalAddBookThank"].hideModal()}>Cancel</button>
          </div>
        </Modal>
        <button className="modal_success" onClick={() => this.refs["modalAddBookThank"].handleShowModal()}></button>
        <button className="add_book_btn" onClick={() => this.refs["modalAddBook"].handleShowModal()}>ADD A BOOK</button>
      </div>
     );
  }
}

 
export default AddBookButton;