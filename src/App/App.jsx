import React from "react";
import Navigation from './Components/Navigation/Navigation';

//prop types erklären
// props fertig erklären

//lifecycle beispiel


const books = [
  {
    test: "",
    subObj: {
      likes: 123
    }
  }
];

books.map(book => {
  console.log(book.subObj.likes);
});

export default class App extends React.Component {
  
  constructor(props) {
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
    return {}
  }
  
  render() {
    return <div>
      <Navigation title={"Test"} disableButton={true}/>
      <h1>Ich bin App Komponente</h1>
    </div>
  }
  
}
