const donate_info_panel_close = document.getElementById('donate-info-panel-close')
donate_info_panel_close.onclick = function () {
	document.getElementById('donate-info-panel').style.display = 'none'
}
const donate_actions = document.querySelectorAll('.donate-action')
donate_actions.forEach((action) => {
	action.addEventListener('click', function() {
		document.getElementById('donate-info-panel').style.display = 'flex'
	})
})