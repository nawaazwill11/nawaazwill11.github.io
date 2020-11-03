import Head from 'next/head'

import Navbar from './navbar'
import Footer from './footer'
import scripts from '../../scripts'

const Layout = ({ page, children }) => {
	return (
		<>
			<Head>
				<title>{page.text} - Universal NGO</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
					integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
				<link rel="stylesheet" href="/css/common.css"/>
				<link rel="stylesheet" href={`/css/${page.name}.css`}/>
			</Head>
			<Navbar active_page={page.name} />
			{children}
			<Footer />
			{scripts(page.name)}
		</>
	)
}

export default Layout