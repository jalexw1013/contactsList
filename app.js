var contacts = [];
var addresses = [];

var contactNumber = 0;
var addressNumber = 0;

var Address = {
	street: "",
	city: "",
	state: "",
}

var Contact = {
	firstName: "",
	lastName: "",
	phone: [],
	address: [],
}

addressCounter = 0;

function addAddress() {
	addressCounter++;
	var newAddFields = document.getElementById('addAdd').cloneNode(true);
	newAddFields.id = '';
	newAddFields.style.display = 'block';
	var newAddField = newAddFields.childNodes;
	for (var i=0;i<newAddField.length;i++) {
		var theName = newAddField[i].name
		if (theName)
			newAddField[i].name = theName + addressCounter;
	}
	var insertHere = document.getElementById('newAddress');
	insertHere.parentNode.insertBefore(newAddFields,insertHere);
}

phoneCounter = 0;

function addPhone() {
	phoneCounter++;
	var newPhoneFields = document.getElementById('phoneNumb').cloneNode(true);
	newPhoneFields.id = '';
	newPhoneFields.style.display = 'block';
	var newPhoneField = newPhoneFields.childNodes;
	for (var i=0;i<newPhoneField.length;i++) {
		var theName = newPhoneField[i].name
		if (theName)
			newPhoneField[i].name = theName + phoneCounter;
	}
	var insertHere = document.getElementById('newPhone');
	insertHere.parentNode.insertBefore(newPhoneFields,insertHere);
}

function showContact(contactIndex) {
    var currentContact = contacts[contactIndex];
    $('#contactShow').html("<b>" + "<h2>" + currentContact.firstName + "</h2>" + "</b>" + "<br>"
    					 + currentContact.firstName + "<br>"
                         + currentContact.lastName + "<br>"
                         + currentContact.phone + "<br>"
                         + currentContact.address);
}

$(document).ready(function() {

	$('#addAddress').click(function(e){
		e.preventDefault();
		addAddress();
		console.log(addressCounter);
	});

	

	$('#addPhone').click(function(e){
		e.preventDefault();
		addPhone();
	});

	$('.contactForm').submit(function(e){
		e.preventDefault();

		var contact1 = Object.create(Contact);

		for (i=0; i<addressCounter; i++){
			var address = Object.create(Address);
			address[i].street = $('#street').val();
			address[i].city = $('#city').val();
			address[i].state = $('#state').val();
			address[i].push(addresses);
		};

		for (i=0; i<phoneCounter; i++){
			phone[i] = $('#phone').val();
			phone[i].push(contact1.phone);
		}

		contact1.firstName = $('#firstName').val();
		contact1.lastName = $('#lastName').val();
		contact1.address = addresses;
		

		contacts.push(contact1);
		var contactNumber = contacts.length;


		$('#contactList').append('<li>' + '<span class="info">' + '<a href="javascript:void(0)" onClick="showContact(' + (contactNumber - 1) + ');">' + contact1.firstName + '</a>' + '</span>' + '</li>');

		$('.contactForm').children('input').val(" ");

	});
});