import React from "react";
import {allBooks} from '../lib/api';
import Navigation from "./Components/Navigation/Navigation";
import Loading from "./Components/Loading/Loading";
import Cart from "./Components/Cart/Cart";
import routes from "../routes/routes";

export const AppContext = React.createContext({});

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            books: [],
            cart: [],
            isDrawerOpened: false
        }
    }

    //wird direkt nach dem erstellen (mounten) der Komponente ausgeführt
    componentDidMount() {
        allBooks()
            .then(books => {
                this.setState({books})
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

    toggleDrawer = () => {
        this.setState({
            isDrawerOpened: !this.state.isDrawerOpened
        })
    };

    render() {

        const {books, loading, cart, isDrawerOpened} = this.state;

        const getGeneratedClass = (defaultClass) => {
            const className = [defaultClass];
            if(isDrawerOpened){
                className.push("drawer-opened")
            } else {
                className.push("drawer-closed")
            }
            return className.join(" ");
        };

        return <div>
            <AppContext.Provider value={{
                isDrawerOpened,
                books,
                cart,
                addItemToCart: this.addItemToCart,
                removeItemFromCart: this.removeItemFromCart,
                toggleDrawer: this.toggleDrawer
            }}>

                <Navigation/>

                <Loading loading={loading}/>

                <div className={getGeneratedClass("main-wrapper")}>
                    <div className="main-col-wrapper">
                        <div className="content-wrapper">
                            {!loading && routes}
                        </div>
                    </div>
                </div>
                <div className={getGeneratedClass("drawer-wrapper")}>
                    <Cart/>
                </div>
            </AppContext.Provider>

        </div>
    }

}
