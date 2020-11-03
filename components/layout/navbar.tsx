import Link from 'next/link'
import classnames from 'classnames'

const nav_links = [
	{
		name: 'home',
		href: '/',
		text: 'Home',
	},
	{
		name: 'about',
		href: '/about',
		text: 'About'
	},
	{
		name: 'causes',
		href: '/causes',
		text: 'Causes'
	},
	{
		name: 'contact',
		href: '/contact',
		text: 'Contact'
	}
]

const Navbar = ({ active_page }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				<img src="img/Universal Logo Transparent 2.png" alt="Brand Logo" />
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
							Services
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link href="/education">
								<a className="dropdown-item">Education</a>
							</Link>
						</div>
					</li>
					<li className="nav-item active">
						<button className="nav-link btn btn-primary-reverse donate-button-nav donate-action">Donate</button>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar