import { HelpUs } from '../components'
import Layout from '../components/layout'

const page = {
	name: 'about',
	text: 'About'
}

const About = () => {
	return (
		<Layout page={page}>
			<div style={{ height: "76px" }}></div>
			<div className="body-title">
				<div className="text-overlay">
					<p className="text">About Us</p>
				</div>
			</div>

			<section id="description">
				<div className="container">
					<h1 className="section-name">Description</h1>
					<hr />
					<div className="content">
						<div className="mb-5 text-box">
							<h3>Vision</h3>
							<p>
								Our vision is to connected help to the public at large and spread happiness especially to the
								underprivileged people of Indian on a sustainable basis. We shall make use of multiple platforms
								and mediums to reach this goal and be one of the most respected NGO known for its ethical
								practices and ethics.
							</p>
						</div>
						<hr />
						<div className="text-box">
							<h3>Mission</h3>
							<p>
								As per a saying “Do not give a fish to a hungry person but instead give him a fish-net so that
								he sustains his life independently thereafter”. Our mission is to promote sustainable
								development of tribal rural areas in social, agricultural, educational, cultural development of
								society. We shall also carry out various.Awareness activities in every field for the development
								and progress of the nation.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="chairman">
				<div className="container">
					<h1 className="section-name">
						Chairman
					</h1>
					<hr />
					<div className="content">
						<div className="row align-items-center">
							<div className="col-lg-4 about">
								<h5>About</h5>
								<p>
									<strong>Universal NGO</strong> came from a vision of making the world a better place. After
									<strong>15 years in service</strong> of the society and providing free education, training
									and assistance to the needy, we are striving even harder to provide reach more and more
									people in various parts of Gujarat and the country, overall; and we plan to continue to do
									so in the coming years.
								</p>
							</div>
							<div className="col-lg-4 text-center image">
								<img src="img/placeholder.png" className="img-thumbnail mx-auto" alt="Chairnman" />
							</div>
							<div className="col-lg-4 details">
								<div className="node">
									<h5>Name</h5>
									<p>B. S. Chaudhary</p>
								</div>
								<div className="node">
									<h5>Location</h5>
									<p>Vapi, Gujarat - 396210</p>
								</div>
								<div className="node">
									<h5>Contact</h5>
									<p>
										+91 99798 84166
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="more-info">
				<div className="container">
					<h1 className="section-name">
						More Information
					</h1>
					<hr />
					<div className="content">
						<div className="col-md-8 col-lg-6 mx-auto info-table">
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Reg. Name</strong>
								</div>
								<div className="col-md-7">
									Unvirsal Charitable Trust
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Reg. Office Address</strong>
								</div>
								<div className="col-md-7">
									O-17, Mohid Tower, Chala
									<br />
									Vapi, Gujarat - 396191
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Trust Reg. No.</strong>
								</div>
								<div className="col-md-7">
									F/890/Valsad [26-12-2006]
									<br />
									[BPT Act 1950]
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Society Reg. No.</strong>
								</div>
								<div className="col-md-7">
									Guj / 846/Valsad [26-12-2006]
									<br />
									[Society Act 1860]
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>NGO Reg. No.</strong>
								</div>
								<div className="col-md-7">
									61/2007 (Gujarat state)
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Income tax Exemption</strong>
								</div>
								<div className="col-md-7">
									12A(a) and 80G(vi)
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Working Areas</strong>
								</div>
								<div className="col-md-7">
									Across India
						</div>
							</div>
							<div className="row info-row">
								<div className="col-md-5">
									<strong>Branches</strong>
								</div>
								<div className="col-md-7">
									Locations:
									<br />
									<ul style={{ listStyle: "decimal" }}>
										<li>Vapi</li>
										<li>Gandhinagar</li>
										<li>Mumbai</li>
										<li>Kutch</li>
										<li>Daman & Diu</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<HelpUs />
		</Layout>
	)
}

export default About