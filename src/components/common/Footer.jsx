import "../../styles/footer.css";

function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="container">

                <p>

                    © {year} Md Arsad Reza. All rights reserved. Unauthorized duplication or distribution is strictly prohibited.


                </p>

            </div>

        </footer>

    );

}

export default Footer;