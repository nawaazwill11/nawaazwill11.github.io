import { HelpUs, Layout } from "../components"

const page = {
	name: 'causes',
	text: 'Causes'
}

const Causes = () => {
	return (
		<Layout page={page}>
			<div className="body-title">
				<div className="text-overlay">
					<p className="text">Causes</p>
				</div>
			</div>

			<section id="affiliation">
				<div className="container">
					<h1 className="section-name">Affiliation</h1>
					<hr />
					<div className="content">
						<img src="img/affiliation.jpg" alt="" />
					</div>
				</div>
			</section>

			<section id="on-going">
				<div className="container">
					<h1 className="section-name">On-Going Causes</h1>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/Universal Logo.png" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="completed">
				<div className="container">
					<h1 className="section-name">Completed Causes</h1>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="starting-soon">
				<div className="container">
					<h1 className="section-name">Started Soon Causes</h1>
					<hr />
					<div className="content">
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="card-container">
									<div className="card">
										<img className="card-img-top" src="img/card-1.jpg" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Cause name</h5>
											<p className="card-text">Some short description about the cause. Some short
										description about the cause.</p>
											<a href="#" className="btn btn-primary">Learn more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div id="cause-display">
				<div className="closer">
					<button type="button" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="content">
					<div className="row">
						<div className="col-lg-8 image">
							<div id="image-slider" className="carousel slide carousel-fade" data-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src="img/card-1.jpg" alt="First slide" />
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src="img/Universal Logo.png" alt="Second slide" />
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src="img/card-1.jpg" alt="Third slide" />
									</div>
								</div>
								<ol className="carousel-indicators">
									<li data-target="#image-slider" data-slide-to="0" className="active"></li>
									<li data-target="#image-slider" data-slide-to="1"></li>
									<li data-target="#image-slider" data-slide-to="2"></li>
								</ol>
								<a className="carousel-control-prev" href="#image-slider" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next" href="#image-slider" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
						<div className="col-lg-4 text">
							<ul className="info-list">
								<li className="info-list-item">
									<div className="row">
										<div className="col-6">
											<div className="heading">
												<strong>Project Name</strong>
											</div>
											<div className="data">
												A well-being project
									</div>
										</div>
										<div className="col-6">
											<div className="heading">
												<strong>Status</strong>
											</div>
											<div className="data">
												On-going
										<span className="more-info indicator indicator-green"></span>
											</div>
										</div>
									</div>
								</li>
								<li className="info-list-item">
									<div className="row">
										<div className="col-6">
											<div className="heading">
												<strong>Location</strong>
											</div>
											<div className="data">
												Vapi, Gujarat
										<span className="more-info map-redirect">
													<a href="#">
														<span><i></i></span>
													</a>
												</span>
											</div>
										</div>
										<div className="col-6">
											<div className="heading">
												<strong>Beneficiaries</strong>
											</div>
											<div className="data">
												2000
										<span className="more-info hover-info">i</span>
											</div>
										</div>
									</div>
								</li>
								<li className="info-list-item">
									<div className="heading">
										<strong>Dates</strong>
									</div>
									<div className="data">
										<div className="row">
											<div className="col-6 partial">
												<span className="left">Start Date: </span>
												<span className="right">01/01/2020</span>
											</div>
											<div className="col-6 partial">
												<span className="left">End Date: </span>
												<span className="right">-</span>
											</div>
										</div>
									</div>
								</li>
								<li className="info-list-item">
									<div className="heading">
										<strong>Funds</strong>
									</div>
									<div className="data">
										<div className="row">
											<div className="col-4 d-flex flex-column">
												<span className="left">Total Cost: </span>
												<span className="right">12,00,000</span>
											</div>
											<div className="col-4 d-flex flex-column">
												<span className="left">Received: </span>
												<span className="right">10,00,000</span>
											</div>
											<div className="col-4 d-flex flex-column">
												<span className="left">Needed: </span>
												<span className="right">2,00,000</span>
											</div>
										</div>
									</div>
								</li>
								<li className="info-list-item">
									<div className="donate">
										<button className="btn btn-primary btn-primary-reverse">Donate</button>
									</div>
								</li>
								<hr />
								<li className="info-list-item">
									<div className="heading">
										<strong>Partners</strong>
									</div>
									<div className="data">
										<div className="row">
											<div className="col-3 partner">
												<img src="img/placeholder.png" alt="" />
											</div>
											<div className="col-3 partner">
												<img src="img/placeholder.png" alt="" />
											</div>
											<div className="col-3 partner">
												<img src="img/placeholder.png" alt="" />
											</div>
											<div className="col-3 partner">
												<img src="img/placeholder.png" alt="" />
											</div>
										</div>
									</div>
								</li>
								<hr />
								<li className="info-list-item">
									<div className="heading">
										<strong>Gallery</strong>
									</div>
									<div className="data">
										<div className="row no-gutters">
											<div className="col-3 image-slide" data-slide-to="0">
												<img src="img/placeholder.png" className="img-thumbnail" />
											</div>
											<div className="col-3 image-slide" data-slide-to="1">
												<img src="img/placeholder.png" className="img-thumbnail" />
											</div>
											<div className="col-3 image-slide" data-slide-to="2">
												<img src="img/placeholder.png" className="img-thumbnail" />
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<section id="downloadable">
				<div className="container">
					<h1 className="section-name">
						Downloadable Content
			</h1>
					<hr />
					<div className="content">
						<div className="row text-center">
							<div className="col-12">
								<p className="download-text text-center">A comprehensive, downloadable list of all the services done
							so far</p>
							</div>
							<div className="col-12">
								<a href='https://drive.google.com/file/d/1c671SyG0sJi6hg7P9FeoxXRaAbweWLYW/view?usp=sharing'
									className="btn btn-primary p4" target="_blank" rel="noreferer noopener">Click To Download</a>
							</div>
						</div>

					</div>
					<hr />
				</div>
			</section>
			<HelpUs />
		</Layout>
	)
}

export default Causes