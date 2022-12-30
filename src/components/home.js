import React from "react";
function Home() {
 return (
    <div>
      <h1 className="text-center text-primary mb-4 mt-3">MESS IS MESS?</h1>
      <div className="col-sm-8 container-fluid">
              <nav className="nav-bar navbar-expand-lg navbar-light bg-light px-md-5 py-md-3">
                <a className="navbar-brand text-center" href="/"> <strong>
                    College Canteen
                  </strong> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="admin" className="nav-link navtext me-5">Admin</a>
                    </li>
                    <li className="nav-item">
                      <a href="student" className="nav-link navtext"> Student </a>
                    </li>
                  </ul>
                </div>
              </nav> 
              <h1 className="text-center text-secondary mt-3 mb-3"> MENU</h1>
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      SNo
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Price
                    </th>
                    <th scope="col">
                      Remaining Plates
                    </th>
                    <th scope="col">
                      Buy?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Veg Biryani</td>
                    <td>40</td>
                    <td id="biryani">100</td>
                    <td><button className="btn btn-info" id="btn1">Select</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Paratha</td>
                    <td>30</td>
                    <td id="paratha">80</td>
                    <td><button className="btn btn-info" id="btn2">Select</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Chapathi</td>
                    <td>30</td>
                    <td id="chapathi">10</td>
                    <td><button className="btn btn-info" id="btn3">Select</button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Double ka meeta</td>
                    <td>15</td>
                    <td id="dkm">100</td>
                    <td><button className="btn btn-info" id="btn4">Select</button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Puri</td>
                    <td>30</td>
                    <td id="puri">50</td>
                    <td><button className="btn btn-info" id="btn5">Select</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center">
                <button className="btn btn-success mx-md-5" id="click">
                  Place Order
                </button>
              </div>
          </div>
  );
}

export default Home;