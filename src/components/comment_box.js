import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({comment: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({comment: ''});
  }

  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className="comment-box"
      >
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}  
        />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

export default CommentBox;