import Link from 'next/link'
import classnames from 'classnames'

const nav_links = [
	{
		name: 'home',
		href: '#first-face',
		text: 'Home',
	},
	{
		name: 'about',
		href: '#about',
		text: 'About'
	},
	{
		name: 'benefits',
		href: '#benefits',
		text: 'Benefits'
	},
	{
		name: 'courses',
		href: '#courses',
		text: 'Courses'
	},
	{
		name: 'contact',
		href: '#contact',
		text: 'Contact'
	}
]

const Navbar = ({ active_page }) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					<img src="img/UE Logo.svg" alt="Brand Logo" />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						{
							nav_links.map((nav_link) => (
								<li key={nav_link.name} className={classnames('nav-item', { 'active': !!(nav_link.name === active_page) })}>
									<Link href={nav_link.href}>
										<a className="nav-link">
											{nav_link.text} 
											{nav_link.name === active_page ? <span className="sr-only">(current)</span> : ''}
										</a>
									</Link>
								</li>
							))
						}
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
								aria-haspopup="true" aria-expanded="false">
								More
						</a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<Link href="/">
									<a className="dropdown-item" >Universal NGO</a>
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar