var Themer = {};
Themer.SetTheme = (theme) => {
	localStorage.setItem('theme', theme)
	if (theme == 'auto') {
		Themer.SetAutoTheme()
		return;
	}
	document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', theme)
}

Themer.SetAutoTheme = () => {
	const date = new Date();
	if (date.getHours() > 8 && date.getHours() < 19) {
		Themer.SetTheme('light')
	} else {
		Themer.SetTheme('dark')
	}
}

Themer.CheckThemes = () => {
	Themer.CreateElement()
	if (localStorage.getItem('theme') == 'auto') {
		Themer.SetAutoTheme()
	} else if (localStorage.getItem('theme') == 'light' || localStorage.getItem('theme') == 'dark') {
		Themer.SetTheme(localStorage.getItem('theme'))
	} else {
		Themer.SetAutoTheme()
		localStorage.setItem('theme', 'auto')
	}
}

Themer.CreateElement = () => {
	try {
		const themerEl = document.getElementsByTagName('themer-btn')[0]
		themerEl.innerHTML = `<div class="dropdown-center">
		<button class="` + themerEl.getAttribute('btnclass') + ` dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		  Theme
		</button>
		<ul class="dropdown-menu">
		  <li><a class="dropdown-item" href="#" onclick="Themer.SetTheme('light')"><i class="bi bi-brightness-high"></i> Light</a></li>
		  <li><a class="dropdown-item" href="#" onclick="Themer.SetTheme('dark')"><i class="bi bi-moon-stars"></i> Dark</a></li>
		  <li><a class="dropdown-item" href="#" onclick="Themer.SetTheme('auto')"><i class="bi bi-circle-half"></i> Auto</a></li>
		</ul>
	  </div>`
	} catch(e) {
		//Do nothing
	}
}


document.addEventListener("load", 'Themer.CheckThemes(); Themer.CreateElement()');