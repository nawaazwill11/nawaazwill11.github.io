import { HelpUs, Layout } from "../components"

const page = {
	name: 'contact',
	text: 'Contact'
}

const Contact = () => {
	return (
		<Layout page={page}>
			<div className="top-space"></div>
			<div className="body-title">
				<div className="text-overlay">
					<p className="text">Contact Us</p>
				</div>
			</div>

			<section id="location">
				<div className="container">
					<h1 className="section-name">Locate Us</h1>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-sm-12">
								<iframe id="map"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.9784080512272!2d72.90085821481173!3d20.38378011485885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cfd696f53b11%3A0x793ce55802294857!2sUniversal%20Charitable%20Trust%2CNgo!5e0!3m2!1sen!2sin!4v1603968414697!5m2!1sen!2sin"
									aria-hidden="false"></iframe>
							</div>
							<div className="col-auto mt-4">
								<p>
									<strong>Office Address</strong>
									<br />
							0-17, Mohid Tower, Chala, Vapi, Gujarat - 369191
						</p>
								<a href="https://www.google.com/maps/place/Universal+Charitable+Trust,Ngo,+Chala,+Vapi,+Gujarat+396215/@20.3839517,72.8997606,19z/data=!4m2!3m1!1s0x3be0cfd696f53b11:0x793ce55802294857"
									target="_blank" rel="noreferer noopener">
									<button className="btn btn-primary">Open in Maps</button>
								</a>
							</div>

						</div>
					</div>

				</div>
			</section>

			<section id="location">
				<div className="container">
					<h1 className="section-name">Connect With Us</h1>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-lg-10 mx-auto">
								<div className="row">
									<div className="col-sm-6 box">
										<div className="icon-text-holder handler"
											data-domain="https://www.facebook.com/universalngo">
											<span className="icon"><i aria-hidden="true" className="fab fa-facebook"></i></span>
											<span className="text">Facebook</span>
										</div>
									</div>
									<div className="col-sm-6 box">
										<div className="icon-text-holder handler" data-domain="https://twitter.com/uctngo">
											<span className="icon"><i aria-hidden="true" className="fab fa-twitter"></i></span>
											<span className="text">Twitter</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="write">
				<div className="container">
					<h1 className="section-name">Get In Touch With Us</h1>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-lg-9">
								<form>
									<div className="form-group">
										<input type="text" className="form-control" id="form-email" placeholder="Enter subject" />
									</div>
									<div className="form-group">
										<textarea className="form-control" id="form-message" rows={3}
											placeholder="Enter message"></textarea>
									</div>
									<div className="row">
										<div className="form-group col-sm-6">
											<input type="text" className="form-control" id="form-name" placeholder="Enter name" />
										</div>
										<div className="form-group col-sm-6">
											<input type="text" className="form-control" id="form-email" placeholder="Enter email" />
										</div>
									</div>
									<button type="submit" className="btn btn-primary col-sm-3 col-lg-2" id="submit">Send</button>
								</form>
							</div>
							<div className="col-lg-3 contact-info">
								<div className="row text-center">
									<div className="col-12 col-md-6 col-lg-12 py-4">
										<i aria-hidden="true" className="fas fa-phone mr-2"></i>
										<span className="dark">+91 99798 84166</span>
										<br />
										<span className="light">Mon to Sat 10am to 5pm</span>
									</div>
									<div className="col-12 col-md-6 col-lg-12 py-4">
										<i aria-hidden="true" className="fas fa-envelope mr-2"></i>
										<span className="dark">uctngo@gmail.com</span>
										<br />
										<span className="light">Send us a query anytime</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="volunteer">
				<div className="container">
					<h1 className="section-name">Become A Volunteer</h1>
					<p className="quote">Join Us Now</p>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
								<form>
									<div className="form-group">
										<label htmlFor="email">Email address</label>
										<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
										<small id="emailHelp" className="form-text text-muted">We'll never share your email with
									anyone else.</small>
									</div>
									<div className="form-group">
										<label htmlFor="name">Name</label>
										<input type="password" className="form-control" id="name" placeholder="Enter name" required />
									</div>
									<div className="form-group">
										<label htmlFor="phone-number">Phone number</label>
										<input type="password" className="form-control" id="phone-number" placeholder="Enter phone number" required />
									</div>
									<div className="form-check mb-4">
										<input type="checkbox" className="form-check-input" id="consent" required />
										<label className="form-check-label" htmlFor="consent">
											I hereby allow Universal NGO to contact me for further discussion on the subject of
											joining the organization as a volunteer
								</label>
									</div>
									<button type="submit" className="btn btn-primary">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<HelpUs />
		</Layout>
	)
}

export default Contact