import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ncitvtg', 'template_aih5vkl', form.current, 'Z0GxRzrnCDxEc0lXe')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return <ContactForm>

<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </ContactForm>
}
export default Contact;


 const ContactForm = styled.div`

// width: 400px; 

//  form {
//    display: flex;
//    align-items: flex-start;
//    flex-direction: column;
//    width: 100px;
//    font-size: 16px;

//    input{
//      width: 100px;
//      height: 35px;
//      padding: 7px;
//      outline: none;
//      border-radius: 5px;
//      border: 1px solid rgba(220, 220, 220);

//      &focus {
//        border: 2px solid rgba(0, 208, 158, 1);
//      }
//    }
//    textarea {
//      max-width: 100%;
//      min-width: 100%;
//      width: 100%;
//      max-height: 100px;
//      min-height: 100px;
//      padding: 7px;
//      outline: none;
//      border-radius: 5px;
//      border: 1px solid rgba(220, 220, 220);

//      &focus {
//       border: 2px solid rgba(0, 208, 158, 1);
//      }

//    }
//    label {
//     margin-top: 1rem; 
//    }
//    input [type="submit"] {
//      margin-top: 1rem;
//      cursor: pointer;
//      background: rgb(249, 105, 14);
//      color: white;
//      border: 2px:
//    }
//  }
`;
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
//   <hr></hr>
//   <form class="justify-content-center" id="contact-form">
//        <div class="mt-8" > 
//       <div class= "display: flex"> 

//           <label 
//           htmlFor="name">Name:</label>
//           <div>
         
//           <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange} rows="4"/></div>
//       </div> 
//       <div class="mt-8" >
//           <label htmlFor="email">Email</label><br></br>
//           <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} rows="4"/>
//       </div>
//       <div class="mt-8" >
//         <div>
//           <label htmlFor="message">Message</label></div>
//           <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
//       </div> 
//       </div> 
//       {errorMessage && (
//       <div>
//           <p className="error-text">{errorMessage}</p>
//       </div>
//       )}

//       <div class="mt-5 mb-5" >
//       <button data-testid='button' class="btn btn-outline-dark " type="submit" onSubmit={handleSubmit}>Submit</button>
//       </div>
//   </form>
// </section>
// );
// }


// export default ContactForm;