var contacts = [];

var Address = {
	street: "",
	city: "",
	state: ""
};

var Contact = {
	firstName: "",
	lastName: "",
	phone: [],
	address: []
};

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
    //gets current contact
    var currentContact = contacts[contactIndex];
    
    //gets the array of address of the current contact
    var currentAdresses = currentContact.address;
    
    var addressString = '';
    for (i=0;i<currentAdresses.length;i++){
            addressString += currentAdresses[i].street;
            addressString += currentAdresses[i].city;
            addressString += currentAdresses[i].state;
            addressString += '<br>';
    }

    //gets the array of address of the current contact
    var currentPhones = currentContact.phone;
    
    var phoneString = '';
    for (i=0;i<currentPhones.length;i++){
            phoneString += currentPhones[i];
            phoneString += '<br>';
    }

    $('#contactShow').html("<b>" + "<h2>" + currentContact.firstName + "</h2>" + "</b>" + "<br>"
    					 + currentContact.firstName + "<br>"
                         + currentContact.lastName + "<br>"
                         + phoneString + "<br>"
                         + addressString);
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
		var address = Object.create(Address);

		for (i=0; i<=addressCounter; i++){
			address.street[i] = $('#street').val();
			address.city[i] = $('#city').val();
			address.state[i] = $('#state').val();
			address.push(addresses);
		};

		for (i=0; i<phoneCounter; i++){
			phone[i] = $('#phone').val();
			phone[i].push(phones);
		};

		contact1.firstName = $('#firstName').val();
		contact1.lastName = $('#lastName').val();
		
		contacts.push(contact1);
		var contactNumber = contacts.length;

		$('#contactList').append('<li>' + '<span class="info">' + '<a href="javascript:void(0)" onClick="showContact(' + (contactNumber - 1) + ');">' + contact1.firstName + '</a>' + '</span>' + '</li>');

		$('.contactForm').children('input').val(" ");

	});
});