import React from "react";
import { useState ,useEffect } from "react";
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate();
let [placed , setPlaced] = useState(false)
let x1=0,x2=0,x3=0,x4=0,x5=0,sum=0;
let [studentName, setStudentName]= useState('')
let [orders, setOrders] = useState('')

let cost1 = 40,cost2 = 30,cost3 = 30,cost4 = 15,cost5= 30;
let [orderItems , setOrderItems] = useState({
  vegbiryani:0,
  puri:0,
  dkm:0,
  chapathi:0 ,
  paratha:0
})
const isadmin= localStorage.getItem("email") !== "admin@gmail.com";
useEffect(() => {
  return () => {
    setStudentName(JSON.parse(localStorage.getItem('studentname')))
    setOrders(JSON.parse(localStorage.getItem("orderItems")))
  }
}, [orderItems])

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
      <h2 className="ms-5">Hi {studentName}....!!</h2>
      <h1 className="text-center text-danger mb-4 mt-3 rounded-pill p-3 light w-75 mx-auto">MESSY CANTEEN</h1>
      { !placed &&  
      <>
      <div className="col-sm-8 container-fluid">
              
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
                  setPlaced(true)
                  sum+=x1*cost1+x2*cost2+x3*cost3+x4*cost4+x5*cost5;
                  (x1||x2||x3||x4||x5)?document.getElementById("book").innerHTML = "Your order has been placed!": document.getElementById("book").innerHTML = "No item selected";
                  (x1||x2||x3||x4||x5)?document.getElementById("book2").innerHTML = "BILL ": document.getElementById("book2").innerHTML = "";
                  (x1)?document.getElementById("bill1").innerHTML = " BIRYANI -- "+ x1 +" * " + cost1 +" Rs. = " +x1*cost1: document.getElementById("bill1").innerHTML = "";
                  (x2)?document.getElementById("bill2").innerHTML = " PARATHA -- " + x1 +" * " + cost1 +" Rs. = " +x2*cost2: document.getElementById("bill2").innerHTML = "";
                  (x3)?document.getElementById("bill3").innerHTML = " CHAPATHI -- "+x1 +" * " + cost1 +" Rs. = " + x3*cost3: document.getElementById("bill3").innerHTML = "";
                  (x4)?document.getElementById("bill4").innerHTML = " DOUBLE KA MEETA -- "+x1 +" * " + cost1 +" Rs. = "  + x4*cost4: document.getElementById("bill4").innerHTML = "";
                  (x5)?document.getElementById("bill5").innerHTML = " PURI -- "+x1 +" * " + cost1 +" Rs. = "  + x5*cost5: document.getElementById("bill5").innerHTML = "";
                  (sum)?document.getElementById("sum").innerHTML = " TOTAL COST  -- "+sum: document.getElementById("sum").innerHTML = "";  
                  
                  let items= orderItems
                  items.biryani= x1;
                  items.paratha= x2
                  items.chapathi= x3
                  items.dkm= x4
                  items.puri=x5
                  setOrderItems(items)
                  
                  setOrders(items)
                  console.log(items , "items ordered")
                  localStorage.setItem("orderItems",JSON.stringify(items));
                  
                  
                  
                
                }}>
                  Place Order
                </button>
              </div>
              </>}
              <div>
             <div className={placed? "alert alert-success w-50 mx-auto p-4": ""}  id='book' role="alert">
  
              </div>
              
             
              <h2 id="book2" className="text-center m-5 text-danger"></h2>
              {placed && <hr className="m-0 p-0 w-50 mx-auto"/>}
              <h3 id="bill1" className="text-center  w-50 mx-auto"></h3>
              <h3 id="bill2" className="text-center  w-50 mx-auto"></h3>
              <h3 id="bill3" className="text-center  w-50 mx-auto"></h3>
              <h3 id="bill4" className="text-center  w-50 mx-auto"></h3>
              <h3 id="bill5" className="text-center  w-50 mx-auto"></h3>
              {placed && <hr className="m-0 p-0 w-50 mx-auto"/>}
              <h3 id="sum" className="text-center w-50 mx-auto"></h3>
              {placed && <hr className="m-0 p-0 w-50 mx-auto"/>}
              
              </div>
              
      </>
      :
      <>
         {orders ?
         <>
              <button className='btn btn-danger' onClick={ ()=>{
                setOrderItems('')
                localStorage.removeItem('orderItems')
                
              }}>Clear Orders </button>
              
        <table className="table table-dark table-hover w-50 mx-auto text-center">
          <thead>
            <tr>
              <td> Order No  : 1 </td>
              <td>Ordered By : {studentName}</td>
            </tr>
          </thead>
        </table>
        <table className="w-50 table table-light table-hover text-center mx-auto">
              <thead>
              <tr>
                    
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Quantity Ordered
                    </th>
                    
                  </tr>

              </thead>
         <tbody>
              {orders.biryani!==0 && 
              <tr>
              <td>Veg Biryani </td>
              <td>{orders.biryani}</td> 
              </tr>
              }
             {orders.paratha!==0 && 
              <tr>
              <td>Paratha </td>
              <td>{orders.paratha}</td> 
              </tr>
              }
              {orders.chapathi!==0 && 
              <tr>
              <td>Chapathi </td>
              <td>{orders.chapathi}</td> 
              </tr>
              }
              {orders.dkm!==0 && 
              <tr>
              <td>Double ka meeta </td>
              <td>{orders.dkm}</td> 
              </tr>
              }
              {orders.puri!==0 && 
              <tr>
              <td>Puri </td>
              <td>{orders.puri}</td> 
              </tr>
              }
           </tbody>
              </table>
         </>
         :
         <>
         <div className="text-center text-danger display-4 p-5">No orders Found</div>
         </>
         }
      </>
       }
          </div>
  );
}

export default Home;