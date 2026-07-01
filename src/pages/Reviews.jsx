// import { useEffect, useState } from "react";
// import Layout from "../components/common/Layout";
// import { getReviewsByCar } from "../api/carApi";
// import Loader from "../components/common/Loader";
// import "../styles/reviews.css";

// function Reviews() {

//     const [reviews, setReviews] = useState([]);

//     const [loading, setLoading] = useState(false);

//     useEffect(() => {

//         loadReviews();

//     }, []);

//     const loadReviews = async () => {

//         try{

//             setLoading(true);

//             const data = await getReviewsByCar(1);

//             setReviews(data);

//         }finally{

//             setLoading(false);

//         }

//     };

//     return(

//         <Layout>

//             <section className="reviews-page">

//                 <h1>Customer Reviews</h1>

//                 {

//                     loading && <Loader/>

//                 }

//                 {

//                     reviews.map(review=>(

//                         <div
//                             className="review-card"
//                             key={review.id}>

//                             <h3>{review.reviewer}</h3>

//                             <p>

//                                 ⭐ {review.rating}

//                             </p>

//                             <p>

//                                 {review.review}

//                             </p>

//                         </div>

//                     ))

//                 }

//             </section>

//         </Layout>

//     );

// }

// export default Reviews;