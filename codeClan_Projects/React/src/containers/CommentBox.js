import React, {Component} from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, author: "Alex", text: "Like"},
        {id: 2, author: "Pawel", text: "Brace! Brace! Brace!"}

      ]
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment){
    comment.id = Date.now();
    const newComments = this.state.data.concat([comment]);
    this.setState({ data: newComments });
  }


  render() {
    return <div className="comment-box">
      <CommentForm handleCommentSubmit={this.handleCommentSubmit}/>
      <CommentList data={this.state.data}/>
    </div>
  }
}


export default CommentBox;
