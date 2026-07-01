// import { useState } from "react";
// import Layout from "../common/Layout";
// import "../../styles/contact.css";

// function Contact() {

//     const [formData, setFormData] = useState({

//         name: "",

//         email: "",

//         phone: "",

//         query: ""

//     });

//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (event) => {

//         const { name, value } = event.target;

//         setFormData({

//             ...formData,

//             [name]: value

//         });

//     };

//     const handleSubmit = (event) => {

//         event.preventDefault();

//         console.log(formData);

//         setSubmitted(true);

//         setFormData({

//             name: "",

//             email: "",

//             phone: "",

//             query: ""

//         });

//     };

//     return (

//         <Layout>

//             <section className="contact-page">

//                 <h1>Contact Us</h1>

//                 <p>

//                     Have a question? We'd love to hear from you.

//                 </p>

//                 <form
//                     className="contact-form"
//                     onSubmit={handleSubmit}>

//                     <input

//                         type="text"

//                         name="name"

//                         placeholder="Full Name"

//                         value={formData.name}

//                         onChange={handleChange}

//                         required

//                     />

//                     <input

//                         type="email"

//                         name="email"

//                         placeholder="Email"

//                         value={formData.email}

//                         onChange={handleChange}

//                         required

//                     />

//                     <input

//                         type="tel"

//                         name="phone"

//                         placeholder="Phone Number"

//                         value={formData.phone}

//                         onChange={handleChange}

//                         required

//                     />

//                     <textarea

//                         rows="5"

//                         name="query"

//                         placeholder="Write your query..."

//                         value={formData.query}

//                         onChange={handleChange}

//                         required

//                     />

//                     <button>

//                         Submit

//                     </button>

//                 </form>

//                 {

//                     submitted && (

//                         <div className="success-box">

//                             Thank you! Your query has been submitted.

//                         </div>

//                     )

//                 }

//             </section>

//         </Layout>

//     );

// }

// export default Contact;