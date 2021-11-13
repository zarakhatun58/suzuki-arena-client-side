import React from 'react';

const Payment = () => {
    return (
       
          <div className="row my-5 mt-4 mb-4">
      <div className="col-md-4 offset-md-4">
        <div className="card  bg-success" >
          <div className="card-body">
            <form className="" action="/payNow" method="post">
              <div className="form-group text-light ">
               
                <input className="form-control" type="text" placeholder="name" value=""/>
              </div>
              <div className="form-group text-light">
               
                <input className="form-control" type="text" placeholder="email" value=""/>
              </div>
              <div className="form-group text-light">
               
                <input className="form-control" type="text" placeholder="phone" value=""/>
              </div>
                <div className="form-group ">
               
                <input className="form-control" type="text" placeholder="amount" value=""/>
              </div>
              <div className="form-group  animation-glow">
                <button className="btn form-control btn-primary " animation="glow">Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            
       
    );
};

export default Payment;