import { useState } from "react";
import Layout from "../components/common/Layout";
import { saveContact } from "../api/carApi";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      setLoading(true);

      await saveContact(formData);

      setSuccess("Thank you! Your query has been submitted.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        query: "",
      });
    } catch (err) {
      console.error(err);
      setError("Unable to submit query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="contact-page">
        <h1>Contact Us</h1>
        <p>Have a question? We would love to hear from you.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="query"
            rows="5"
            placeholder="Write your query..."
            value={formData.query}
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {success && <div className="success-box">{success}</div>}
        {error && <div className="error-box">{error}</div>}
      </section>
    </Layout>
  );
}

export default Contact;