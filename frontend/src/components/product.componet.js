import React,{Component} from "react";
import api from '../services/api'

export default class Product extends Component {
    constructor(props){
        super(props);
 
        this.onChangeProduct_id = this.onChangeProduct_id.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUnit = this.onChangeUnit.bind(this);
        this.onChangeItens = this.onChangeItens.bind(this);
        this.onChangeDue_date = this.onChangeDue_date.bind(this);

        this.state= {
            product_id: '',
            name: '',
            price: '',
            quantity: '',
            due_date: new Date(),
            products:[]
 
        }
          
    } 
     
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
        return this.setState.quantity;
    }
    onChangeUnit(e){
     this.setState({v_unit: e.target.value})
        return this.setState.v_unit;
        
    }
    onChangeItens(e){
        this.setState({v_itens: e.target.value})
    }

 
    onChangeDue_date(date){
     this.setState({due_date: date})
    }
        
    
   
    async componentDidMount(){

        await api.get('/products/:id')
           .then(response =>{
             this.setState({products: response.data})
           })
           .catch((error)=>{
             console.log(error);
           })
        }
  
    render() {
        
     return (
        
        <div className="tab">
            <form className="flex-container">

                <input className="cod_product"
                    required autofocus
                    placeholder="Código do Produto"  
                />

                <input className="product"
                    placeholder="Produto"
                />

                <input className="quantity"
                    placeholder="Quantidade"
                    id="quantity" 
                    value={this.state.quantity}
                    onChange={this.onChangeQuantity}
                      
                />
            
            </form>

            <form className="flex-container">
                <div className="content">
                    <table class="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Produto</th>
                              <th scope="col">Preço</th>
                              <th scope="col">Quantidade</th>
                              <th scope="col">Valor Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            </tr>   
                            <tr>
                            </tr>
                            <tr>   
                            </tr>
                        </tbody>
                    </table>
                </div>

                <form className="flex-container1">

                    <input className="v_unit"
                        placeholder="Valor Unitário"
                        id="v_unit"
                        value={this.state.v_unit}
                        onChange={this.onChangeUnit}
                    />

                    <input className="v_itens"
                        placeholder="Valor Itens"
                        id="v_itens"
                        value={this.state.v_itens }
                        onChange={this.onChangeItens}
                    />

                    <input className="d_recebido"
                       placeholder="Dinheiro Recebido"
                    />

                    <input className="troco"
                        placeholder="Troco"
                    />
                </form>
            </form>
            
                <form className="flex-container">
                    <input className="v_total"
                        placeholder="Valor Total"   
                    />
                </form>        
        </div>
            
        );
    }
}