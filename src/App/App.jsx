import React from "react";
import Navigation from './Components/Navigation/Navigation';
import { allBooks } from '../api';
import Loading from './Components/Loading/Loading';
import BookListing from './Components/BookListing/BookListing';
import { MainWrapper, ContentWrapper, MainColWrapper, DrawerWrapper } from './App.style';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      books: []
    }
    
  }
  
  //wird direkt nach dem erstellen der Komponente ausgeführt
  componentDidMount() {
    allBooks()
      .then(books => {
        this.setState({ books })
      })
      .catch(e => console.error(e))
      .finally(() => {
        this.setState({
          loading: false
        })
      })
    
  }
  
  //wird direkt nach dem zerstören der komponente ausgeführt
  componentWillUnmount() {
  }
  
  static getDerivedStateFromProps() {
    return {}
  }
  
  
  render() {
    
    const { books, loading } = this.state;
    return <div>
      <Navigation title={this.state.title} disableButton={true}/>
      <Loading loading={loading}/>
      {/* {loading ? "Lädt..." : ""}*/}
      
     
     
      <MainWrapper>
        <MainColWrapper isNavOpened={true}>
          <ContentWrapper>
            {!loading && <BookListing books={books}/>}
          </ContentWrapper>
        </MainColWrapper>
        <DrawerWrapper isNavOpened={true}>
        
        </DrawerWrapper>

      </MainWrapper>
      
      
    
    
    </div>
  }
  
}
