import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {actAddProductRequest, actGetProductRequest, actUpProductRequest} from '../../actions/action';
import {connect} from 'react-redux';
export class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            chbStatus : '',
        }
        this.reftxtName = React.createRef();
        this.reftxtPrice = React.createRef();
        this.refchbStatus = React.createRef();
    }

    //sử dụng lifecycle để lấy dữ liệu
    componentDidMount(){
        var {match} = this.props;
        if(match) {
            var id = match.params.id;
            this.props.onEditProduct(id)
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.ItemEdit) {
            var {ItemEdit} = nextProps;
            this.setState({
                id: ItemEdit.id,
                txtName: ItemEdit.name,
                txtPrice: ItemEdit.price,
                chbStatus: ItemEdit.statu,
            })
        } 
    }
    render() {
        // console.log(this.props);
        var {txtName,txtPrice,chbStatus} = this.state;
        // console.log(this.state);
        return (
             <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6  ">
              <form onSubmit = {e=>{
                  e.preventDefault();
                  var {id} = this.state
                  var name = this.reftxtName.current.value;
                  var price = this.reftxtPrice.current.value;
                  var statuss = this.refchbStatus.current.checked;
                  var products = {
                      id : id,
                      name : name,
                      price : price,
                      statu : statuss
                  }
                  var {history} = this.props;
                  
                  if(id){
                    console.log('upadata');
                    this.setState({
                        txtName : name,
                        txtPrice : price,
                        chbStatus : statuss
                      });
                      this.props.onUpProduct(products);
                      history.goBack();
                  } else {
                    this.setState({
                        txtName : name,
                        txtPrice : price,
                        chbStatus : statuss
                      });
                      
                      this.props.onAddProduct(products);
                      history.goBack();
                  }
                  
              }}>
                  <div className="form-group">
                      <label htmlFor="">Tên Sản Phẩm</label>
                      <input type="text" className="form-control" name="txtName" ref={this.reftxtName} defaultValue={txtName}  />
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Giá</label>
                      <input type="number" className="form-control" name="txtPrice" ref={this.reftxtPrice} defaultValue={txtPrice} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Giá</label>
                      <input type="file" className="form-control" name="txtPrice" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="">Trạng Thái</label>
                  </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="chbStatus"  ref={this.refchbStatus}  defaultChecked={chbStatus}/>
                            Còn Hàng
                        </label>
                    </div>
                  <button type="submit" className="btn btn-primary">Lưu Lại</button>
                  <Link to='/product-list' className="btn btn-danger">Trở Lại</Link>
              </form>
              
            </div> 
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        ItemEdit: state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (products) => {
            dispatch(actAddProductRequest(products));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpProduct : (products) => {
            dispatch(actUpProductRequest(products))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)

