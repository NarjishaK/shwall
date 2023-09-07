import React, { useEffect, useState } from "react";
import styles from "../components/edit.module.css";
import axios from 'axios'
import { Link } from "react-router-dom";

function Listproduct() {
const [allproduct,setAllproduct] =useState([])

useEffect(()=>{
    hijab()
},[]);

const hijab =async()=>{
    try{
        const response =await axios.get('http://localhost:3000/productroutes/listproduct')
        setAllproduct(response.data)
        console.log(response.data)
    }catch(error){
        console.log(error)
    }
}

const handleDelete =async (id)=>{
  try{
    await axios.delete(`http://localhost:3000/productroutes/deleteproduct/${id}`)
    hijab();
  }catch(error){
    console.log(error)
  }

}
  return (
    <div className="container">
      <div className={styles.div1}>
        <h4>PRODUCT MANAGEMENT</h4>
      </div>
      <button className={styles.btn2}><a href='/add' className={styles.text1}>add product</a></button>
      <div>
        <table>
          <thead>
            <tr >
              <th>ID</th>
              <th>Product </th>
              <th>Price</th>
              <th>Name</th>
              <th>Material werty</th>
              <th>Material </th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {allproduct.map((items=>(

            <tr key={items._id}>
              <td>{items.productid}</td>
              <td> <img src={`http://localhost:3000/uploads/${items.image}`} className={styles.imgs}/></td>
              <td>Rs.{items.price}</td>
              <td>{items.name}</td>
              <td>{items.meterial}</td>
              <td><button className={styles.btn}><Link to={`/edit/${items._id}`}  className={styles.edit}> Edit</Link></button></td>
              <td><button className={styles.btn} onClick={()=>handleDelete(items._id)}><p className={styles.edit}>Delete</p></button></td>
            </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listproduct;
