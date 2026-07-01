import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {

    return (

        <>

            <Navbar />

            <main className="container page-container">

                {children}

            </main>

            <Footer />

        </>

    );

}

export default Layout;