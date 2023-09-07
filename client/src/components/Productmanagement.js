import React from 'react'
import styles from '../components/management.module.css'

function Productmanagement() {
  return (
    <>
    <div className='container'>
     <button className={styles.btn1}><p>product managent</p></button>
     <button className={styles.btn2}><a href='/add' className={styles.text1}>add product</a></button>
     <button className={styles.btn3}><a href='/edit' className={styles.text1}>edit product</a></button>
    </div>
    </>
  )
}

export default Productmanagement