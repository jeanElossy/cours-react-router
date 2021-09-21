import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound"
import Post from "./Components/Post";
import Categories from "./Components/Categories";
import Shoes from "./Components/Shoes";
import Hello from "./Components/Hello";
import ProductsData from "./Components/ProductsData";
import Product from "./Components/Product";


const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/About/:slug" component={Post}/>
        <Route path="/Categories" exact component={Categories}/>
        <Route path="/Categories/:slug" exact component={Shoes}/>
        <Route path="/Categories/:slug/:slug" exact component={Hello}/>
        <Route path="/ProductsData" exact component={ProductsData}/>
        <Route path="/ProductsData/:slug" exact component={Product}/>


        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
