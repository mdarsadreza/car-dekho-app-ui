import Layout from "../components/common/Layout";
import RecommendationForm from "../components/common/recommendation/RecommendationForm";

import "../styles/recommendation.css";

function Recommendation() {
    return (
        <Layout>
            <section className="recommendation-page">
                <div className="recommendation-header">
                    <h1>AI Car Recommendations</h1>
                    <p>
                        Enter your preferences and get a smart shortlist with AI-powered explanations.
                    </p>
                </div>

                <RecommendationForm />
            </section>
        </Layout>
    );
}

export default Recommendation;