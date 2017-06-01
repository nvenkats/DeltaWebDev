var items = [];
window.onload = function() {
    document.getElementById('menulink').onclick = function() {
        var menu = document.getElementById('menu');
        if(menu.className != 'shownmenu') {
            menu.className = 'shownmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }
	document.getElementById('about').onclick = function() {
		document.getElementById('container').innerHTML = "";
		document.getElementById('controls1').innerHTML = "";
		document.getElementById('output').innerHTML = "";
		document.getElementById('overall_controls').innerHTML = "";
		document.getElementById('menu').className = 'hiddenmenu';
		var container = document.getElementById('container');
		var p = document.createElement('p');
		p.id = 'abouttheapp';
		container.appendChild(p);
		var text = document.createTextNode("This app lets you create, edit and delete notes. All notes are stored in your local storage and hence they will be available even if you restart your browser. Happy organizing!");
		p.appendChild(text);
	}
	
	var home = document.getElementById('container').innerHTML;
	var controls1 = document.getElementById('controls1').innerHTML;
	var output = document.getElementById('output').innerHTML;
	var overall_controls = document.getElementById('overall_controls').innerHTML;

	display_saved_note();

	document.getElementById('home').onclick = function() {
		document.getElementById('container').innerHTML = home;
		document.getElementById('controls1').innerHTML = controls1;
		document.getElementById('overall_controls').innerHTML = overall_controls;
		document.getElementById('output').innerHTML = output;
		document.getElementById('menu').className = 'hiddenmenu';
		display_saved_note();
	}
}
function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}
function delete_all() {
	var i;
	
    for(i = document.getElementById("outputNote").options.length - 1 ; i >= 0 ; i--)
    {
        document.getElementById("outputNote").remove(i);
    }
	for(i = 0; i<items.length; i++) {
		items.pop();

	}
	if(items.length !== 1 ) {
		delete_all();
	}
	items.pop();
	localStorage.setItem("item", JSON.stringify(items));

	display_saved_note();
}
function sortNote() {
	
}
function delete_note() {
  
}
function editNote() {
	 
}
function display_saved_note() {
	
	var i;
    for(i = document.getElementById("outputNote").options.length - 1 ; i >= 0 ; i--)
    {
        document.getElementById("outputNote").remove(i);
    }	

	if(check_web_storage_support() === true) {
		if(JSON.parse(localStorage.getItem("item"))!== null)  
			items = JSON.parse(localStorage.getItem("item"));
		
  
		for(j=0; j<items.length; j++) {
			var y1 = document.getElementById("outputNote");
			var option1 = document.createElement("option");
			option1.text = items[j].substr(1); 
			y1.add(option1);  
		}
    }
	
}

function saveNote() {
    if(check_web_storage_support() === true) {
		
		var area = document.getElementById("area");
		var pr = document.getElementById("priority").value.length.toString();
		var nt = pr.concat(area.value);
		if(JSON.parse(localStorage.getItem("item")) !== null) {
			items = JSON.parse(localStorage.getItem("item"));

		  
			
			if(area.value !== '') { 
							
				items.push(nt);
				localStorage.setItem("item", JSON.stringify(items));
				display_saved_note();
			}
			
			else {
				alert("Nothing to save");
			}
		  }
		  else 
			{	
			  
				items.push(nt);
				localStorage.setItem("item", JSON.stringify(items));
				display_saved_note();         }
    }
}
function clean() {
    document.getElementById('area').value = "";
}
