import React, { Component } from "react";
import { Link } from 'react-router-dom';
export class ProductItem extends Component {
  
  onDel  = (id) => {

    if(confirm('Bạn chắc chắn muốn xoá ???')) { //eslint-disable-line
      this.props.onDel(id);
    }
  }
  
  render() {
    var {product,index} = this.props;
    var statusName = product.statu ? 'Còn Hàng' : 'Hết Hàng';
    var statusClass = product.statu ? 'warning' : 'default';
    return (
      <tr>
        <td>{index +1 }</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success ml-2">
            Sửa
          </Link>
          <button type="button" className="btn btn-danger ml-2" onClick={()=>this.onDel(product.id)}>
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
