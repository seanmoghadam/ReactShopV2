import React from "react";
import Navigation from './Components/Navigation/Navigation';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
    
  }
  
  //wird direkt nach dem erstellen der Komponente ausgeführt
  componentDidMount() {
  
  }
  
  //wird direkt nach dem zerstören der komponente ausgeführt
  componentWillUnmount() {
  }
  
  static getDerivedStateFromProps() {
    return {
    
    }
  }
  
  render() {
    return <div>
      <Navigation title={"Hallo ich bin die Navigation"} disableButton={true}/>
      <h1>Ich bin App Komponente</h1>
      
    </div>
  }
  
}
