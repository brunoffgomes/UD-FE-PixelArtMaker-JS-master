// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const pixelCanvas = $('#pixelCanvas');

/**
 This function is responsable for creating the grid with the
 height and width configuration sended by the user.
*/

function makeGrid() {

	const gridHeight = $('#inputHeight').val();
	const gridWidth = $('#inputWidth').val();
	pixelCanvas.text('');

	for(let i = 1; i <= gridHeight; i++){
		const row = $('<tr></tr>').appendTo(pixelCanvas);
		for(let x = 1; x <= gridWidth; x ++){
			$('<td></td>').appendTo(row);
		}
	}
	
	event.preventDefault();
}

$(pixelCanvas).on('click','td', function(){
	const colorPicker = $('#colorPicker');
	let selectedColor = colorPicker.val();
	$(this).css('background-color', selectedColor);
});
