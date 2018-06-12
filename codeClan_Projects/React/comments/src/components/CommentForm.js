import React, {Component} from 'react';

class CommentForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      author: '',
      text: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //To update state...
  handleAuthorChange(event){
    this.setState({author: event.target.value})
  }

  handleTextChange(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newAuthor = this.state.author.trim();
    const newText = this.state.text.trim();

    if(!newText || !newAuthor){
      return
    }
    //TODO update the list of commments
    this.props.handleCommentSubmit({ author: newAuthor, text: newText })

    this.setState({ author: '', text: ''} )
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    )

  }


}

export default CommentForm;
