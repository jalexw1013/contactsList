window.onload = function(){
	var addButton = document.getElementById("submit");
	// var addPhone = document.getElementById("addPhone")
	// var addAddress = document.getElementById("addAddress")
	var addContact = document.querySelector("contactForm");
	// documents.getElementsByClassName('')[0]

	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var phone = document.getElementById("phone");
	var street = document.getElementById("street");
	var city = document.getElementById("city");
	var state = document.getElementById("state");

	var contactList = document.getElementById("contactList");

	var addBookDiv = document.getElementById("addBook");

	//Storage Array
	var addressBook =[];

	//EventListeners
	addButton.addEventListener("click", addToBook);

	//this references are variables that can be created in function with respect to scope 
	//constructure variables
	function objectStructure(firstName, lastName, phone, street, city, state){
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.street = street;
		this.city = city;
		this.state = state;
	}

	function addToBook(){
		var isNull = firstName.attr("value")!='' && lastName.attr("value")!='' && phone.attr("value")!='' && street.attr("value")!='' && city.attr("value")!='' && state.attr("value")!='';
		if (isNull){
			//add contents of form to array & local storage
			var object = new objectStructure(firstName.attr("value"), lastName.attr("value"), phone.attr("value"), street.attr("value"), city.attr("value"), state.attr("value"));
			addressBook.push(object);
			localStorage['addBook'] = JSON.stringify(addressBook);
			//contactList.append(firstName);
			clearForm();
			showBook();
			//console.log(contactList);
		}
	}

	function clearForm(){
		var formField = document.querySelectorAll(".field")
		for (var i in formField){
			formField[i].val('');
		};
	};

	function showBook(){
		if(localStorage['addbook'] === undefined){
			localStorage['addbook'] = "[]";
		} 
		else {
			addressBook = JSON.parse(localStorage['addbook']);
			//parse is a way of saying process
			// Loop over the array addressBook and insert into the page
			addBookDiv.innerHTML = '';
			for(var n in addressBook){
				var str = '<div class="entry">';
				var str = str + '<div class="firstName"><p>' + addressBook[n].firstName + '</p></div>';
				var str = str + '<div class="email"><p>' + addressBook[n].lastName + '</p></div>';
				var str = str + '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
				var str = str + '<div class="street"><p>' + addressBook[n].street + '</p></div>';
				var str = str + '<div class="city"><p>' + addressBook[n].city + '</p></div>';
				var str = str + '<div class="state"><p>' + addressBook[n].state + '</p></div>';
				//var str = str + '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
				var str = str + '</div>';
				addBookDiv.innerHTML = addBookDiv.innerHTML + str;
			}
		}
	}
	showBook();
	
}
