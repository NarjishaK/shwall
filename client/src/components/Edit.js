import React, { useEffect, useState } from 'react'
import styles from "../components/management.module.css";
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';


function Edit() {

const {id} =useParams();
const[meterial,setMeterial] = useState('');
const [name,setName]= useState('');
const[price,setPrice]= useState('');
const[productid,setProductid]=useState('');
const[description,setDescription]=useState('');
const[image,setImage]= useState('');
const navigate =useNavigate('');

useEffect(()=>{
  const fetchProduct = async ()=>{
    try{
      const response = await axios.get(`http://localhost:3000/productroutes/editproductById/${id}`)
      const product =response.data;
      setMeterial(product.meterial);
      setName(product.name);
      setPrice(product.price);
      setProductid(product.productid);
      setDescription(product.description);
      setImage(product.image)
    }catch(error){
      console.log(error);
    }
  };
  fetchProduct()
},[id]);

// ... (other code)

const handleEdit = async (e) => {
  e.preventDefault();

  // Create a FormData object to send the request as multipart/form-data
  const formData = new FormData();
  formData.append("meterial", meterial);
  formData.append("name", name);
  formData.append("price", price);
  formData.append("productid", productid); // Change the property name to productid
  formData.append("description", description);
  formData.append("image", image);

  try {
    const response = await axios.put(
      `http://localhost:3000/productroutes/updateproduct/${id}`,
      formData, // Send formData as the data for the request
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    navigate("/list");
  } catch (error) {
    console.log(error);
  }
};

// ... (other code)

const handleImage = (e) => {
  const selectedImage = e.target.files[0];
  setImage(selectedImage);
};

  return (
    <div className={styles.div1}>
      <p className={styles.btn}>
        <button className={styles.btns}> EDIT PRODUCT </button>
      </p>
      <div className={styles.add}>
        <p className={styles.btn}>
          <select
            className={styles.select_tag}
            placeholder="Meterial"
            name="meterial"
            value={meterial}
            onChange={(e) => setMeterial(e.target.value)}
          >
            <option>Meterial</option>
            <option>chiffon</option>
            <option>cotton</option>
            <option>georget</option>
          </select>
          <br />
          <input
            className={styles.inpt}
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className={styles.inpt}
            placeholder="price"
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            className={styles.inpt}
            placeholder="Id"
            type="number"
            value={productid}
            name="id"
            onChange={(e) => setProductid(e.target.value)}
          />
          <br />
          <input
            className={styles.inpt}
            placeholder="Discription"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <input
            className={styles.inpt}
            placeholder="image"
            type="file"
            name="image"
            accept="image/*"
            // onChange={(e) => setImage(e.target.files)}

            onChange={handleImage}
          />
          <br />
          <p className={styles.btn}>
            <button className={styles.confm1} onClick={handleEdit} id='added'>
              UPDATE
            </button>
          </p>
        </p>
      </div>
    </div>

  )
}

export default Edit