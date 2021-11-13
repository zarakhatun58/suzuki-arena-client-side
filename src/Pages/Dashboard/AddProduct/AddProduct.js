import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div class="row my-5">
      <h5 className="text-danger mt-5"> Add your Favorite Product  <span> <i class="fas fa-car-crash text-primary"></i></span></h5>
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-body">
              <form class="" method="post">
                <div class="form-group">
                  <label for="">Product Name: </label>
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="">Description: </label>
                  <input
                    class="form-control"
                    type="text"
                    name="description"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="">Image: </label>
                  <input
                    class="form-control"
                    type="text"
                    name="image"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <label for="">Price: </label>
                  <input
                    class="form-control"
                    type="text"
                    name="Price"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <button class="btn form-control btn-primary">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
