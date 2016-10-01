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
		contact1.firstName = $('#firstName').val();
		contact1.lastName = $('#lastName').val();
		contact1.phone = $('#phone').val();
		contact1.street = $('#street').val();
		contact1.city = $('#city').val();
		contact1.state = $('#state').val();

		contacts.push(contact1);

		$('#contactList').append('<li>' + '<span class="listInfo">' + 
			'<a href="">' + $('#firstName').val() + '</a>' + '</span>' + '</li>');
		$('.contactForm').children('input').val(" ");
	});

	$('li').click(function(e){
		$('viewInfo').Contact.show();
	})
});