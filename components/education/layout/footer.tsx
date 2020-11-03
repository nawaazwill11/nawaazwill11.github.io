const Footer = () => {
	return (
		<footer>
			<div className="content">
				<div className="connect">
					<div className="row">
						<div className="h2">Connect With Us</div>
					</div>
					<div className="row">
						<div className="social-link-container">
							<a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferer">
								<span><i aria-hidden="true" className="fab fa-facebook-f"></i></span>
							</a>
							<a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferer">
								<span><i aria-hidden="true" className="fab fa-twitter"></i></span>
							</a>
							<a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferer">
								<span><i aria-hidden="true" className="fab fa-instagram"></i></span>
							</a>
					</div>
					</div>
				</div>
				<div className="site-info">
					<div className="rights">
						<span>
							All Rights Reserved By
					</span>
					&nbsp;
					<span>
							<strong>Universal Education</strong> (2020)
					</span>
					</div>
					<div className="developer">
						Developed By <strong><a href="#">Nawaaz Kortiwala</a></strong>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
