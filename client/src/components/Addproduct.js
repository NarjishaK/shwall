import React, { useState } from "react";
import styles from "../components/management.module.css";
import axios from "axios";



function Addproduct() {

  const [meterial, setMeterial] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [productid, setProductid] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAddlist = async (e) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(image);
    // reader.onloadend = async () => {
    //   const base64Image = reader.result;

      const formData = {
        meterial: meterial,
        name: name,
        price: price,
        productid: productid,
        description: description,
        image: image,
      };
      console.log(formData);
      try {
        const response = await axios.post(
          'http://localhost:3000/productroutes/addproduct',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data', // Update Content-Type
            },
          }
        );
        console.log(response.data.newList);
      } catch (error) {
        console.log(error);
      }
    // };
  };

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // const image = selectedImage[0];
    // const imageURL = URL.createObjectURL(image);
    // // image.push(imageURL)
  };
  return (
    <div className={styles.div1}>
      <p className={styles.btn}>
        <button className={styles.btns}> ADD PRODUCT </button>
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
            // value={image}
            onChange={handleImage}
          />
          <br />
          <p className={styles.btn}>
            <button className={styles.confm} onClick={handleAddlist}>
              CONFIRM
            </button>
            <button className={styles.confm1} >
             <a href="/list" className={styles.list}> LIST PRODUCT</a>
            </button>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Addproduct;
