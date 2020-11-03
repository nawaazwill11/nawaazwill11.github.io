import Layout from '../../components/education/layout'

const page = {
	name: 'home',
	text: 'Education'
}

const Education = () => {
	return (
		<Layout page={page}>
			<section id="first-face" className="no-margin">
				<div className="content">
					<div className="text">
						<h1 className="large-text">
							Universal Education
						</h1>
						<p className="medium-text font-weight-light">
							Perseverance To Success
						</p>
					</div>
				</div>
			</section>

			<section id="about">
				<div className="container">
					<h1 className="section-name">About Us</h1>
					<hr />
					<div className="content">
						<p className="text text-center" style={{
							lineHeight: '2',
							fontSize: '1.5rem',
							fontWeight: 300
						}}>
							Universal Education is an emerging name as a computer education provider in the whole of
							Gujarat.
							<br />
							We work tremendously hard in giving unbeatable, high-quality, and industry-standard
							computer education.
							<br />
							We help you to land you in your dream IT job, inspire you to start your own
							software start-up, improve your academic performance, and more.
						</p>
					</div>
				</div>
			</section>

			<section id="benefits">
				<div className="container">
					<h1 className="section-name">Benefits</h1>
					<hr />
					<div className="content">
						<div className="row picto-text">
							<div className="col-md-6">
								<div className="text">
									<div className=""><strong>Start Your Own Tech Start-Up</strong></div>
									<div>Bring your <i>Tech Idea</i> to life, build apps, and start your own start-up business</div>
								</div>
							</div>
							<div className="col-md-6 picture">
								<img src="img/startup.svg" alt="" />
							</div>
						</div>
						<div className="row picto-text picto-text-reverse">
							<div className="col-md-6 text">
								<strong>Excel in Academics</strong>
								<br />
								Get the best of theoretical and practical knowledge on programming concepts and score better in
								adacemics
							</div>
							<div className="col-md-6 picture">
								<img src="img/study.svg" alt="" />
							</div>
						</div>
						<div className="row picto-text">
							<div className="col-md-6 text">
								<strong>Become a Programming Hobbyish</strong>
								<br />
								Take up programming as a hobby and build software apps for personal and professional uses
							</div>
							<div className="col-md-6 picture">
								<img src="img/hobbyist.svg" alt="" />
							</div>
						</div>
						<div className="row picto-text picto-text-reverse">
							<div className="col-md-6 text">
								<strong>Choose Appropriate Career Path</strong>
								<br />
								Get a hands-on programming experience to help you decide your career in the field of
								<i>Software</i>
							</div>
							<div className="col-md-6 picture">
								<img src="img/path.svg" alt="" />
							</div>
						</div>

						<div className="row picto-text">
							<div className="col-md-6 text">
								<strong>Become Job Ready</strong>
								<br />
						Increase your chance of securing an IT job by learning the most demanding technical skills of
						<i>Today</i>
							</div>
							<div className="col-md-6 picture">
								<img src="img/interview.svg" alt="" />
							</div>
						</div>

					</div>
				</div>
			</section>

			<section id="courses">
				<div className="container">
					<h1 className="section-name">Courses</h1>
					<hr />
					<div className="content">
						<ul className="nav nav-tabs" id="course-tablist" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="home-tab" data-toggle="tab" href="#webdevelopment" role="tab"
									aria-controls="webdevelopment" aria-selected="true">Web Development</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="profile-tab" data-toggle="tab" href="#finance" role="tab"
									aria-controls="finance" aria-selected="false">Finance</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="contact-tab" data-toggle="tab" href="#others" role="tab"
									aria-controls="others" aria-selected="false">Others</a>
							</li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane fade show active" id="webdevelopment" role="tabpanel"
								aria-labelledby="webdevelopment-tab">
								<div className="row">
									<div className="col-sm-6 col-lg-4">
										<div className="card-container">
											<div className="card">
												<img className="card-img-top" src="img/front-end-icons-only.png" alt="Card image cap" />
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">Some quick example text to build on the card title and
													make
												up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-lg-4">
										<div className="card-container">
											<div className="card">
												<img className="card-img-top" src="img/front-end-icons-only.png" alt="Card image cap" />
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">Some quick example text to build on the card title and
													make
												up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="finance" role="tabpanel" aria-labelledby="finance-tab">
								<div className="row">
									<div className="col-sm-6 col-lg-4">
										<div className="card-container">
											<div className="card">
												<img className="card-img-top" src="img/front-end-icons-only.png" alt="Card image cap" />
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">Some quick example text to build on the card title and
													make
												up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-lg-4">
										<div className="card-container">
											<div className="card">
												<img className="card-img-top" src="img/front-end-icons-only.png" alt="Card image cap" />
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">Some quick example text to build on the card title and
													make
												up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">
								<div className="row">
									<div className="col-sm-6 col-lg-4">
										<div className="card-container">
											<div className="card">
												<img className="card-img-top" src="img/front-end-icons-only.png" alt="Card image cap" />
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">Some quick example text to build on the card title and
													make
												up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-lg-4">
										<div className="card-container">
											<div className="card">
												<img className="card-img-top" src="img/front-end-icons-only.png" alt="Card image cap" />
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">Some quick example text to build on the card title and
													make
												up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="contact">
				<div className="overlay">
					<div className="container">
						<h1 className="section-name">Locations</h1>
						<hr />
						<div className="content">
							<div className="row">
								<div className="col-md-6 col-lg-4">
									<div className="card-container">
										<div className="card">
											<img className="card-img-top" src="img/vapi.jpg" alt="Vapi" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make
												up
												the
												bulk
											of the card's content.</p>
											</div>
											<ul className="list-group list-group-flush">
												<li className="list-group-item">Cras justo odio</li>
												<li className="list-group-item">Dapibus ac facilisis in</li>
												<li className="list-group-item">Vestibulum at eros</li>
											</ul>
											<div className="card-body">
												<a href="#" className="card-link">Card link</a>
												<a href="#" className="card-link">Another link</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Education