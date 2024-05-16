function play(id) {
	try {
		$('#' + id).get(0).load()
		$('#' + id).get(0).play()
		$('#btn' + id).addClass('active')
		setTimeout('unClick("' + id + '")', 300)
		switch(id) {
			case 'Q':
				$('#display').text('Heater 1')
				break;
			case 'W':
				$('#display').text('Heater 2')
				break;
			case 'E':
				$('#display').text('Heater 3')
				break;
			case 'A':
				$('#display').text('Heater 4')
				break;
			case 'S':
				$('#display').text('Clap')
				break;
			case 'D':
				$('#display').text('Oppen HH')
				break;
			case 'Z':
				$('#display').text("Kick n' Hat")
				break;
			case 'X':
				$('#display').text('Kick')
				break;
			case 'C':
				$('#display').text('Closed HH')
				break;
		}
		
			/*const button = bootstrap.Button.getOrCreateInstance($('#btn' + id).get(0))
			button.toggle()*/
	} catch(e) {
		//do nothing
	}
}

const unClick = (id) => {
	try {
		$('#btn' + id).removeClass('active')
	} catch (e) {
		//do nothing
	}
}

$(document).on('keypress',function(e) {
	play(e.key.toUpperCase())
    if(e.key.toLowerCase() == 'q') {
    }
});