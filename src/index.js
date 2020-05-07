import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

const Products=[{categorie:'Electronics',price:700, name:'TV'},
                {categorie:'Clothes',price:100, name:'Pullover'},
                {categorie:'Clothes',price:100, name:'Shoes'}]

Products.PropTypes={
  categorie:PropTypes.oneOf(['Electronics','Clothes']),
  price:PropTypes.number,
  name: PropTypes.string
}

const ProductTable=props=>{
  
  const Rows=Products.map(p=>
    <tr style = {{textAlign:'center', backgroundColor:'rgb(196, 189, 189)'}}>
      <td>{p.categorie}</td>
      <td>{p.price}</td>
      <td>{p.name}</td>
    </tr>)
  return(
          <table style = {{margin:'50px 50px'}}>
            <tr style = {{textAlign:'center', color:'white', backgroundColor:'grey'}}>
              <th style={{width:400}}>Categorie</th>
              <th  style={{width:400}}>Price</th>
              <th  style={{width:400}}>Name</th>
            </tr>
            <>{Rows}</>
          </table>
  )
}

function App()
{
  return(<ProductTable Products={Products}/>);
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
