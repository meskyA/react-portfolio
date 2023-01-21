// import React, { useState } from "react";
// import { validateEmail } from "../utils/helpers";
// import React from "react";
// import { Link } from "react-router-dom";
// const ButtonMailto = ({ mailto, label }) => {
//   return (
//       <Link
//           to='#'
//           onClick={(e) => {
//               window.location.href = mailto;
//               e.preventDefault();
//           }}
//       >
//   
// function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: "Meskerem Assefa",
//     email: "mesky2015@gmail.com",
//     message: "Please feel free to reachout. Thank you for visiting my page.",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const { name, email, message } = formState;

//   function handleChange(e) {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);

//       if (!isValid) {
//         setErrorMessage("please enter a valid email");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }

//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
//   }

// function handleSubmit(e) {
//   e.preventDefault();
// }

// return (
// <section className="container">
//   <h2 data-testid='h1tag' className="top-title">Contact Form</h2>
  <hr></hr>
  /* <form class="justify-content-center" id="contact-form">
       <div class="mt-8" > 
      <div class= "display: flex"> 

          <label 
          htmlFor="name">Name:</label>
          <div>
         
          <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange} rows="4"/></div>
      </div> 
      <div class="mt-8" >
          <label htmlFor="email">Email</label><br></br>
          <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} rows="4"/>
      </div>
      <div class="mt-8" >
        <div>
          <label htmlFor="message">Message</label></div>
          <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
      </div> 
      </div> 
      {errorMessage && (
      <div>
          <p className="error-text">{errorMessage}</p>
      </div>
      )}

      <div class="mt-5 mb-5" >
      <button data-testid='button' class="btn btn-outline-dark " type="submit" onSubmit={handleSubmit}>Submit</button>
      </div>
  </form> */

// );
// }


// export default ContactForm;
// export default ButtonMailto;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};