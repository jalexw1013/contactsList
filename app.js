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

function showContact(contactIndex) {
    var currentContact = contacts[contactIndex];
    $('#contactShow').html(currentContact.firstName + "<br>"
                         + currentContact.lastName + "<br>"
                         + currentContact.phone + "<br>"
                         + currentContact.street + "<br>"
                         + currentContact.city + "<br>"
                         + currentContact.state + "<br>");
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

		$('#contactList').append('<li>' + '<span class="info">' + '<a href="javascript:void(0)" onClick="showContact(' + (contactNumber - 1) + ');">' + contact1.firstName + '</a>' + '</span>' + '</li>');

		$('.contactForm').children('input').val(" ");

	});
});