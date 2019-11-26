import React from "react";

export default class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    
  }
  
  render() {
    return <div>
      {this.props.title}
      <button disabled={this.props.disableButton}>
      Klick mich
      </button>
    </div>
  }
  
}



