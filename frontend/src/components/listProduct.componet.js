import React,{ Component } from "react";
//import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import api from '../services/api';
import deleteIcon from '../assets/ic_delete_sweep_24px.svg';
import editIcon from '../assets/ic_border_color_24px.svg';



const Product = props =>(
 
  <tr>
    <td>{props.product.product_id}</td>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
    <td>{props.product.quantity}</td>
    <td>{props.product.due_date}</td>

    <td>

      <Link to={`/editProduct/show/${props.product._id}` }>
       <img src={editIcon} alt='icon' />
      </Link>
      
    </td>

    <td>

      <Link to={"/listProduct/"}
        onClick={()=>{props.deleteProducts(props.product._id)}}>
        <img src={deleteIcon} alt='delete' />
      </Link> 

    </td>

  </tr>
);

export default class ListProduct extends Component {
  
  constructor(props){
    super(props);

    this.deleteProducts = this.deleteProducts.bind(this);

    this.state = {products: [],};
  }

  async componentDidMount(){

    await api.get('/products/')
      .then(response =>{
        this.setState({products: response.data})
      })
      .catch((error)=>{
        console.log(error);
      })
      
  }

  deleteProducts(id){
    api.delete(`products/${id}`)
      .then(res=>console.log(res.data));
      this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })  
    return alert('Você Realmente quer Apagar o Produto ?');
  }

  productList(){
    return this.state.products.map(currentproduct=>{
      return<Product
        product={currentproduct}
        deleteProducts={this.deleteProducts} 
        key={currentproduct._id}
      />
    })
  }  
    render() {
        return (
          <>
            <h1 className="contentH1">Lista de Produtos Cadastrados</h1>
              <div className="list_content">
                 <table className="table">
                   <thead>
                     <tr> 
                      <th scope="col">Código de Barras</th>
                      <th scope="col">Produto</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Data de Vencimento</th>
                      <th scope="col">Editar</th>
                      <th scope="col">Excluir</th>
                     </tr>
                   </thead>

                   <tbody>
                   {this.productList()}
                   </tbody>
                 </table>
               </div> 
          </>
      )
  }
   
}