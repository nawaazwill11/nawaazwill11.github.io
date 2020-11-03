const Footer = () => {
	return (
		<footer id="footer">
			<div className="row">
				<div className="col-md-8 col-lg-6 mx-auto about">
					<div className="col-12 image">
						<img src="img/Universal Logo Transparent 2.png" alt="Logo" />
					</div>
					<div className="col-12 text">
						Some short description about the Univeral NGO.
						Some short description about the Univeral NGO.
						Some short description about the Univeral NGO.
						Some short description about the Univeral NGO.
				</div>
				</div>
				<div className="col-md-8 col-lg-6 mx-auto contact">
					<p>Contact</p>
					<ul className="contact-list">
						<li className="contact-list-item">
							<span><i aria-hidden="true" className="fas fa-map-marker-alt"></i></span>
							<span>
								O-17, Mohid Tower, Chala
							<br />
									Vapi, Gujarat - 396191
						</span>
						</li>
						<li className="contact-list-item">
							<span><i aria-hidden="true" className="fas fa-phone"></i></span>
							<a href="tel:+919979884166">+91 99798 84166</a>
						</li>
						<li className="contact-list-item">
							<span><i aria-hidden="true" className="fas fa-envelope"></i></span>
							<a href="mail:uctngo@gmail.com">uctngo@gmail.com</a>
						</li>
						<li className="contact-list-item">
							<span><i aria-hidden="true" className="fas fa-globe"></i></span>
							<a href="/">universalngo.org</a>
						</li>
					</ul>
				</div>

			</div>
		</footer>
	)
}

export default Footer