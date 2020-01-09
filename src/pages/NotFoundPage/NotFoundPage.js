import React, { Component } from 'react';

export class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                
                <div class="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Không Tìm Thấy Trang</strong> 
                </div>
                
            </div>
        );
    }
}

export default NotFoundPage;
