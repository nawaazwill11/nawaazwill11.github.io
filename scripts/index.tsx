const common =  [
	{
		src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
		integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
		crossOrigin: "anonymous"
	},
	{
		src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
		integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
		crossOrigin: 'anonymous'
	},
	{
		src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
		integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
		crossOrigin: 'anonymous'
	},
	{
		src: "https://kit.fontawesome.com/d091858e73.js",
		crossOrigin: "anonymous"
	}
]

const scripts = {
	home: [],
	about: [],
	causes: [],
	contact: [],
}

export default (page) => {
	return [...common, ...scripts[page]].map((attrs, i) => <script key={page + i} {...attrs} />)
}