import { Link } from "react-router-dom";

import Layout from "../components/common/Layout";
import Hero from "../components/common/recommendation/Hero";

import "../styles/home.css";

function Home() {
    return (
        <Layout>
            <Hero />

            <section className="home-actions">
                <div className="home-card">
                    <h2>Confused about which car to buy?</h2>

                    <p>
                        Start with your budget, fuel preference, transmission,
                        family size and priority. Our AI will create a shortlist
                        and explain why each car fits you.
                    </p>

                    <Link to="/recommendations" className="start-btn">
                        Start Recommendation
                    </Link>
                </div>

                <div className="home-card">
                    <h2>Already shortlisted cars?</h2>

                    <p>
                        Compare two cars side-by-side using price, mileage,
                        fuel type, transmission, safety rating and boot space.
                    </p>

                    <Link to="/compare" className="secondary-btn">
                        Compare Cars
                    </Link>
                </div>
            </section>
        </Layout>
    );
}

export default Home;