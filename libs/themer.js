const SetTheme = (theme) => {
	localStorage.setItem('theme', theme)
	if (theme == 'auto') {
		SetAutoTheme()
		return;
	}
	document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', theme)
}

const SetAutoTheme = () => {
	const date = new Date();
	if (date.getHours() > 8 && date.getHours() < 19) {
		SetTheme('light')
	} else {
		SetTheme('dark')
	}
}

const CheckThemes = () => {
	if (localStorage.getItem('theme') == 'auto') {
		SetAutoTheme()
	} else if (localStorage.getItem('theme') == 'light' || localStorage.getItem('theme') == 'dark') {
		SetTheme(localStorage.getItem('theme'))
	} else {
		SetAutoTheme()
		localStorage.setItem('theme', 'auto')
	}
}

document.addEventListener("load", CheckThemes());