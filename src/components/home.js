import React from "react";
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
let x1=0,x2=0,x3=0,x4=0,x5=0,sum=0;
let cost1 = 40,cost2 = 30,cost3 = 30,cost4 = 15,cost5= 30;

const isadmin= localStorage.getItem("email") !== "admin@gmail.com";

const fun =()=>
{
localStorage.removeItem("email");
localStorage.removeItem("name");
navigate("/");
}
 return (
    <div>

      <Button onClick={fun}  className="m-5">LOGOUT</Button>
      {isadmin?
      <>
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
                    <td >40</td>
                    <td id="biryani">100</td>
                    <td><button className="btn btn-info" id="btn1" onClick={()=>{
                       console.log("Your order has been placed! ")
                       x1++
                       document.getElementById("biryani").innerHTML>0?document.getElementById("biryani").innerHTML-=1:document.getElementById("biryani").innerHTML="OUT OF STOCK!";
                    }}>Select</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Paratha</td>
                    <td >30</td>
                    <td id="paratha">80</td>
                    <td><button className="btn btn-info" id="btn2" onClick={()=>{
                       console.log("Your order has been placed! ")
                       x2++
                       document.getElementById("paratha").innerHTML>0?document.getElementById("paratha").innerHTML-=1:document.getElementById("paratha").innerHTML="OUT OF STOCK!";
                    }}>Select</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Chapathi</td>
                    <td >30</td>
                    <td id="chapathi">10</td>
                    <td><button className="btn btn-info" id="btn3" onClick={()=>{
                      console.log("Your order has been placed! ")
                      x3++
                      document.getElementById("chapathi").innerHTML>0?document.getElementById("chapathi").innerHTML-=1:document.getElementById("chapathi").innerHTML="OUT OF STOCK!";
                    }}>Select</button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Double ka meeta</td>
                    <td >15</td>
                    <td id="dkm">100</td>
                    <td><button className="btn btn-info" id="btn4" onClick={()=>{
                       console.log("Your order has been placed! ")
                       x4++
                       document.getElementById("dkm").innerHTML>0?document.getElementById("dkm").innerHTML-=1:document.getElementById("dkm").innerHTML="OUT OF STOCK!";
                    }}>Select</button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Puri</td>
                    <td >30</td>
                    <td id="puri">50</td>
                    <td><button className="btn btn-info" id="btn5" onClick={()=>
                    {
                      console.log("Your order has been placed! ")
                      x5++
                      document.getElementById("puri").innerHTML>0?document.getElementById("puri").innerHTML-=1:document.getElementById("puri").innerHTML="OUT OF STOCK!";

                    }}>Select</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center">
                <button className="btn btn-success mx-md-5" id="click" onClick={()=>{
                  sum+=x1*cost1+x2*cost2+x3*cost3+x4*cost4+x5*cost5;
                  (x1||x2||x3||x4||x5)?document.getElementById("book").innerHTML = "Your order has been placed!": document.getElementById("book").innerHTML = "No item selected";
                  (x1||x2||x3||x4||x5)?document.getElementById("book2").innerHTML = "BILL ": document.getElementById("book2").innerHTML = "";
                  (x1)?document.getElementById("bill1").innerHTML = " BIRYANI -- "+x1*cost1: document.getElementById("bill1").innerHTML = "";
                  (x2)?document.getElementById("bill2").innerHTML = " PARATHA -- "+x2*cost2: document.getElementById("bill2").innerHTML = "";
                  (x3)?document.getElementById("bill3").innerHTML = " CHAPATHI -- "+x3*cost3: document.getElementById("bill3").innerHTML = "";
                  (x4)?document.getElementById("bill4").innerHTML = " DOUBLE KA MEETA -- "+x4*cost4: document.getElementById("bill4").innerHTML = "";
                  (x5)?document.getElementById("bill5").innerHTML = " PURI -- "+x5*cost5: document.getElementById("bill5").innerHTML = "";
                  (sum)?document.getElementById("sum").innerHTML = " TOTAL COST  -- "+sum: document.getElementById("sum").innerHTML = "";  
                }}>
                  Place Order
                </button>
              </div>
              <div>
              <h1 id="book" className="text-center "></h1>
              <h2 id="book2" className="text-center m-5"></h2>
              <h3 id="bill1" className="text-center"></h3>
              <h3 id="bill2" className="text-center"></h3>
              <h3 id="bill3" className="text-center"></h3>
              <h3 id="bill4" className="text-center"></h3>
              <h3 id="bill5" className="text-center"></h3>
              <h3 id="sum" className="text-center"></h3>
              </div>
              
      </>
      :
      <h1>HI Admin!!</h1>
              }
          </div>
  );
}

export default Home;