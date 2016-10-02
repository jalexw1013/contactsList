var contacts = [];
var contactNumber = 0;

var Contact = {
	firstName: "",
	lastName: "",
	phone: "",
	street: "",
	city: "",
	state: "",
}


$(document).ready(function() {

	$('.contactForm').submit(function(e){
		e.preventDefault();

		var contact1 = Object.create(Contact);
		contact1.firstName = $('#firstName').val();
		contact1.lastName = $('#lastName').val();
		contact1.phone = $('#phone').val();
		contact1.street = $('#street').val();
		contact1.city = $('#city').val();
		contact1.state = $('#state').val();

		contacts.push(contact1);

		var contactNumber = contacts.length;

		function addToList(cont){
			for (var i = 0; i < contactNumber; i++){
				$('#contactList').append('<li>' + '<span class="info">' + '<a href="">' 
					+ cont.firstName + '</a>' + '</span>' + '</li>');
			}
		};

		addToList(contact1);

		$('.contactForm').children('input').val(" ");

		console.log(contactNumber);
	})

	function addToList(cont){
		for (var i = 0; i < contactNumber; i++){
			$('#contactList').append('<li>' + '<span class="info">' + '<a href="">' 
				+ cont.firstName + '</a>' + '</span>' + '</li>');
		}
	};


});