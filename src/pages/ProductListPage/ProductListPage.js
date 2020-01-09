import React, { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/producItem/ProductItem';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest,actDelProductRequest} from '../../actions/action';

export class ProductListPage extends Component {
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    
    showProducts(products){
        var result = null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return (<ProductItem key={index} product={product} index={index} onDel={this.onDel}/>)
            })
        }
        return result;
    }

    onDel  = (id) => {
       this.props.onDelProduct(id);
      }
     
      
    render() {
        console.log(this.props.products);
        
        var {products} = this.props;
        return (
             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
              <Link to='/product/add' className="btn btn-info m4">
                Thêm Sản Phẩm
              </Link>
              <ProductList>
                  {this.showProducts(products)}
              </ProductList>
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onDelProduct  : (id) => {
            dispatch(actDelProductRequest(id))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)

