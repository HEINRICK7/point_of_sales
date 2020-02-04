import React,{Component} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import api from '../services/api';


export default class EditProduct extends Component {
   constructor(props){
       super(props);

       this.onChangeProduct_id = this.onChangeProduct_id.bind(this);
       this.onChangeName = this.onChangeName.bind(this);
       this.onChangePrice = this.onChangePrice.bind(this);
       this.onChangeQuantity = this.onChangeQuantity.bind(this);
       this.onChangeDue_date = this.onChangeDue_date.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

        
       this.state= {
          
           products:{},
        
       }
      
   }
 
   async componentDidMount(){
    const {id} = this.props.match.params;      
     await api.get(`/products/show/${id}`) 
        .then(response =>{
            this.setState({
    products: response.data,
            })
        })
        .catch(error =>{
            console.log(error);
        })
        

    };
   onChangeProduct_id(e){
       this.setState({product_id: e.target.value})
   }

    onChangeName(e){
       this.setState({name: e.target.value})
   }

   onChangePrice(e){
    this.setState({price: e.target.value})
   }

   onChangeQuantity(e){
    this.setState({quantity: e.target.value})
   }

   onChangeDue_date(date){
    this.setState({due_date: date})
   }

   async onSubmit(){
      

        await api.post('/products',{
           product_id: this.state.product_id,
           name: this.state.name,
           price: this.state.price,
           quantity: this.state.quantity,
           due_date: this.state.due_date

       });

    
   }
  
    
     render(){
      const {products} = this.state;
        return (
            <div>
                
            <div className="container">
               
                <h1>Editar Produtos</h1>
                <form onSubmit={this.onSubmit} >
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="product_id">Código do Produto</label>
                            <input
                                type="product_id" 
                                className="form-control" 
                                id="product_id" 
                                placeholder="Código do Produto"
                                value={products.product_id}
                                onChange={this.onChangeProduct_id}
                                
                             />
                        </div>

                        <div className="form-group col-md-8">
                            <label htmlFor="produto">Produto</label>
                            <input 
                              type="name"
                              className="form-control" 
                              id="name" 
                              placeholder="Produto"
                              value={this.state.name}
                              onChange={this.onChangeName}
                             />
                        </div>
                
                        <div className="form-group col-md-4">
                            <label htmlFor="price">Preço</label>
                            <input 
                              type="price" 
                              className="form-control" 
                              id="price" 
                              placeholder="Preço"
                              value={this.state.price}
                              onChange={this.onChangePrice}
                            />
                        </div>
               
                        <div className="form-group col-md-4">
                            <label htmlFor="quantity">Quantidade</label>
                            <input 
                              type="quantity" 
                              className="form-control" 
                              id="quantity" 
                              placeholder="Quantidade"
                              value={this.state.quantity}
                              onChange={this.onChangeQuantity}
                            />
                        </div>
 
                        <div className="form-group col-md-4 ">
                        <label htmlFor="due_date">Data de vencimento</label>
                            <div>
                                <DatePicker
                                    
                                    selected={this.state.due_date}
                                    onChange={this.onChangeDue_date}
                                    dateFormat="dd/MM/yyyy"
                                />    
                            </div>
                        </div>
                        </div>
                    
                    <button type="submit" className="btn btn-lg btn-primary">Salvar</button>
                </form></div>
            </div>      
             
        );
    }
}