import React from "react";
import { ContentWrapper, DrawerWrapper, MainColWrapper, MainWrapper } from "./App.style";
import { allBooks } from "../api";
import { GlobalStyles } from './Global/styles';
import Navigation from './Components/Navigation/Navigation';
import Cart from './Components/Cart/Cart';
import routes from './routes';

export const AppContext = React.createContext({});


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isNavOpened: false,
      books: [],
      loading: true,
      cartItems: []
    }
  }
  
  
  //Wird direkt nach dem erstellen der Komponente ausgeführt
  componentDidMount() {
    allBooks()
      .then(books => {
        this.setState({
          loading: false,
          books
        })
        
      })
      .catch(err => console.error(err))
  }
  
  //Wird ausgeführt wenn die Komponente "zerstört" wird
  componentWillUnmount() {
  }
  
  
  handleNavToggle = (isNavOpened) => {
    this.setState({
      isNavOpened
    });
  };
  
  
  addItemToCart = (cartItem) => {
    //fügt ein Buch dem Cart hinzu
    this.setState({
      cartItems: [...this.state.cartItems, cartItem]
    });
    
  };
  
  deleteItemFromCart = (index) => {
    let copiedCart = [...this.state.cartItems];
    copiedCart.splice(index, 1);
    this.setState({
      cartItems: copiedCart
    });
    
  };
  
  
  render() {
    
    const { isNavOpened, books, loading, cartItems } = this.state;
    
    
    return <div>
      <AppContext.Provider value={{
        isNavOpened,
        books,
        cartItems,
        addItemToCart: this.addItemToCart,
        deleteItemFromCart: this.deleteItemFromCart,
        handleNavToggle: this.handleNavToggle,
        loading
      }}>
        
        <GlobalStyles/>
        <MainWrapper>
          <MainColWrapper isNavOpened={isNavOpened}>
            <Navigation/>
            <ContentWrapper>
              {routes}
            </ContentWrapper>
          </MainColWrapper>
          <DrawerWrapper isNavOpened={isNavOpened}>
            <Cart/>
          </DrawerWrapper>
        </MainWrapper>
      </AppContext.Provider>
    </div>
    
  }
};





