import React from "react";
import Navigation from './Components/Navigation/Navigation';
import Form from './Components/Form/Form';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: ""
    }
    
  }
  
  //wird direkt nach dem erstellen der Komponente ausgeführt
  componentDidMount() {
  
  }
  
  //wird direkt nach dem zerstören der komponente ausgeführt
  componentWillUnmount() {
  }
  
  static getDerivedStateFromProps() {
    return {}
  }
  
  updateTitle = (event) => {
    
    const inputValue = event.target.value;
    
    this.setState({
      title: inputValue
    })
    
  };
  
  
  render() {
    return <div>
      <Navigation title={this.state.title} disableButton={true}/>
      <h1>Ich bin App Komponente</h1>
      
      <input type="text"
             value={this.state.title}
             onChange={this.updateTitle}/>
             
      <Form title={this.state.title} updateTitle={this.updateTitle}/>
    
    
    </div>
  }
  
}
