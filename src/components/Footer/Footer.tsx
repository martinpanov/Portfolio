import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <ul className="social-media" role="list">
                    <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
                <ul className="policies" role="list">
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
                <a href="">2020 All right reserved</a>
            </div>
        </footer>
    );
}