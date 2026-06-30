const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        Designed & Built by <strong>Afsha Naaz Ansari</strong>
                    </p>
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
