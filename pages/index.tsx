import { HelpUs, Layout } from '../components'

const page = {
	name: 'home',
	text: 'Home',
}
const a = 'b'

const Home = () => {
	return (
		<>
			<Layout page={page}>
				<section id="first-face">
					<div className="content">
						<div className="container">
							<h1>Universal NGO</h1>
							<p>
								In Service Of The Needful
								<br />
								<strong className="font-weight-bold">Since 2006</strong>
							</p>
						</div>
					</div>
				</section>
				<section id="mission">
					<div className="container">
						<h1 className="section-name">Our Domains</h1>
						<p className="quote">Serving the following domain in the society</p>
						<hr />
						<div className="content">
							<div className="row">
								<div className="col-sm-6 col-lg-4 box">
									<div className="icon-text-holder">
										<span className="icon"><i aria-hidden="true" className="fas fa-tractor"></i></span>
										<span className="text">Agriculture</span>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 box">
									<div className="icon-text-holder">
										<span className="icon"><i aria-hidden="true" className="fas fa-heartbeat"></i></span>
										<span className="text">Health</span>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 box">
									<div className="icon-text-holder">
										<span className="icon"><i aria-hidden="true" className="fas fa-female"></i></span>
										<span className="text">Women Rights</span>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 box">
									<div className="icon-text-holder">
										<span className="icon"><i aria-hidden="true" className="fas fa-book-reader"></i></span>
										<span className="text">Child Education</span>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 box">
									<div className="icon-text-holder">
										<span className="icon"><i aria-hidden="true" className="fas fa-atom"></i></span>
										<span className="text">Science & Technology</span>
									</div>
								</div>
								<div className="col-sm-6 col-lg-4 box">
									<div className="icon-text-holder">
										<span className="icon"><i aria-hidden="true" className="fas fa-fist-raised"></i></span>
										<span className="text">Youth Empowerment</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="vision">
					<div className="container">
						<h1 className="section-name">Our Objective</h1>
						<p className="quote">Goals give our lives meaning</p>
						<hr />
						<div className="content">
							<div className="row">
								<div className="col-lg-8  text">
									<p>
										Our vision is to connected help to the public at large and spread happiness especially to
										the underprivileged people of Indian on a sustainable basis. We shall make use of multiple
										platforms and mediums to reach this goal and be one of the most respected NGO known for its
										ethical practices and ethics.
									</p>
								</div>
								<div className="col-lg-4 image">
									<img src="img/vision.jpg" alt="Vision" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="causes">
					<div className="container">
						<h1 className="section-name">Our Causes</h1>
						<p className="quote">Creating an impact with our causes</p>
						<hr />
						<div className="content">
							<ul className="nav nav-tabs" id="causes-tab" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" id="ongoing-tab" data-toggle="tab" href="#ongoing" role="tab"
										aria-controls="ongoing" aria-selected="true">On-going</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="completed-tab" data-toggle="tab" href="#completed" role="tab"
										aria-controls="completed" aria-selected="false">Completed</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="starting-soon-tab" data-toggle="tab" href="#starting-soon" role="tab"
										aria-controls="starting-soon" aria-selected="false">Starting soon</a>
								</li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane fade show active" id="ongoing" role="tabpanel" aria-labelledby="ongoing-tab">
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
								<div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
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
								<div className="tab-pane fade" id="starting-soon" role="tabpanel" aria-labelledby="starting-soon-tab">
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<HelpUs />
			</Layout>
		</>
	)

}
export default Home