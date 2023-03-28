import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    const { getDetail } = this.props;
    return (
      <div>
        {/* Modal */}
          <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content ">
                <div className="modal-header">
                  <h5 className="modal-title">Detail Shoe</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body ">

                  <table className="table">
                    <thead classname="text-left">
                      <tr>
                        <td>Name</td>
                        <td>{getDetail.name}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>{getDetail.price} $</td>
                      </tr>
                      <tr>
                        <td>Summary</td>
                        <td>{getDetail.shortDescription}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{getDetail.description}</td>
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <td>{getDetail.quantity}</td>
                      </tr>
                    </thead>
                  </table>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      
                </div>
              </div>
            </div>
          </div>
       
      </div>


    )
  }
}
