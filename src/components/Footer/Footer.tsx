import './Footer.css';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer__wrapper">
                <ul className="footer__social-media" role="list">
                    <li><a className="footer__social-media-links" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a className="footer__social-media-links" href=""><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a className="footer__social-media-links" href=""><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a className="footer__social-media-links" href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
                <span className="footer__rights">2023 All right reserved</span>
            </div>
        </footer>
    );
}