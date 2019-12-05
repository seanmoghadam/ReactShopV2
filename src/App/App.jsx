import React from "react";
import Navigation from './Components/Navigation/Navigation';
import { allBooks } from '../api';
import Loading from './Components/Loading/Loading';
import BookListing from './Components/BookListing/BookListing';
import { ContentWrapper, DrawerWrapper, MainColWrapper, MainWrapper } from './App.style';
import Cart from './Components/Cart/Cart';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      books: [],
      cart: [],
      isNavOpened: false
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
  
  addItemToCart = (book) => {
    this.setState({
      cart: [...this.state.cart, book]
    }, () => console.log(this.state))
  };
  
  removeItemFromCart = (index) => {
    let copiedCart = [...this.state.cart];
    copiedCart.splice(index, 1);
    this.setState({
      cart: copiedCart
    })
  };
  
  toggleNav = () => {
    this.setState({
      isNavOpened: !this.state.isNavOpened
    })
  };
  
  
  render() {
    
    const { books, loading, cart, isNavOpened } = this.state;
    return <div>
      <Navigation title={this.state.title}
                  disableButton={true}
                  toggleNav={this.toggleNav}
                  isNavOpened={isNavOpened}
      />
      
      <Loading loading={loading}/>
      
      {/* {loading ? "Lädt..." : ""}*/}
      
      <MainWrapper>
        <MainColWrapper isNavOpened={isNavOpened}>
          <ContentWrapper>
            {!loading &&
            <BookListing
              books={books}
              addItemToCart={this.addItemToCart}
            />}
          </ContentWrapper>
        </MainColWrapper>
      </MainWrapper>
      <DrawerWrapper isNavOpened={isNavOpened}>
        <Cart cart={cart}
              removeItemFromCart={this.removeItemFromCart}/>
      </DrawerWrapper>
    
    </div>
  }
  
}
