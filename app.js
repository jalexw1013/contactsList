var contacts = [];

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
		contact1.firstName = $('#firstName');
		contact1.lastName = $('#lastName');
		contact1.phone = $('#phone');
		contact1.street = $('#street');
		contact1.city = $('#city');
		contact1.state = $('#state');

		contacts.push(contact1);

		$('#contactList').append('<li>' + '<span class="listInfo">' + 
			'<a href="">' + $('#firstName').val() + '</a>' + '</span>' + '</li>');
		$('.contactForm').children('input').val(" ");
	});
});