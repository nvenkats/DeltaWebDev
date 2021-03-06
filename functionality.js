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
		var linebreak = document.createElement("br");
		p.appendChild(linebreak);
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		text= document.createTextNode("Credits to all icons used :");
		p.appendChild(text);
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		var a = document.createElement('a');
		p.appendChild(a);
		text = document.createTextNode("Save Icon Credits\n");
		a.appendChild(text);
		a.title="Credits to save icon";
		a.href = "https://icons8.com/icon/42946/Save-as";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		var a1 = document.createElement('a');
		p.appendChild(a1);
		text = document.createTextNode("Add Icon Credits\n");
		a1.appendChild(text);
		a1.title="Credits to add icon";
		a1.href = "https://icons8.com/icon/42878/Add-List";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		var a2 = document.createElement('a');
		p.appendChild(a2);
		text = document.createTextNode("Clear Icon Credits\n");
		a2.appendChild(text);
		a2.title="Credits to clear icon";
		a2.href = "https://icons8.com/icon/43134/Broom";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		var a3 = document.createElement('a');
		p.appendChild(a3);
		text = document.createTextNode("Sort Icon Credits\n");
		a3.appendChild(text);
		a3.title="Credits to sort icon";
		a3.href = "https://icons8.com/icon/43194/Sort-Down";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		var a4 = document.createElement('a');
		p.appendChild(a4);
		text = document.createTextNode("Delete All Icon Credits\n");
		a4.appendChild(text);
		a4.title="Credits to delete all icon";
		a4.href = "https://icons8.com/icon/21071/Delete";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
		
		var a5 = document.createElement('a');
		p.appendChild(a5);
		text = document.createTextNode("Delete Icon Credits\n");
		a5.appendChild(text);
		a5.title="Credits to delete icon";
		a5.href = "https://icons8.com/icon/46461/Delete-Property";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);	

		var a6 = document.createElement('a');
		p.appendChild(a6);
		text = document.createTextNode("Edit Icon Credits\n");
		a6.appendChild(text);
		a6.title="Credits to edit icon";
		a6.href = "https://icons8.com/icon/43156/Edit-Property";
		linebreak = document.createElement("br");
		p.appendChild(linebreak);
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
function reloading() {
	window.location.reload(false); 
}
function delete_all() {
	var i;
	
    for(i = document.getElementById("outputNote").options.length - 1 ; i >= 0 ; i--)
    {
        document.getElementById("outputNote").remove(i);
    }
	if(items.length !== 1) {
		for(i = 0; i<items.length; i++) {
			items.pop();

		}
		delete_all();
		
	}
	items.pop();
	localStorage.setItem("item", JSON.stringify(items));

	display_saved_note();
	clean();
}
function sortNote() {
	if(check_web_storage_support() === true) {
		if(JSON.parse(localStorage.getItem("item"))!== null) {
			var p = [];
			items = JSON.parse(localStorage.getItem("item"));
			var c = 0;
			
			var lo = 0, hi = items.length - 1, mid = 0;
			var temp = "";
			while(mid<=hi) {
				switch(items[mid][0]) {
					case '0' : {
						temp = items[mid];
						items[mid] = items[lo];
						items[lo] = temp;
						lo++;
						mid++;
						break;
					}
					case '1' : {
						mid++;
						break;
					}
					case '2' : {
						temp = items[mid];
						items[mid] = items[hi];
						items[hi] = temp;
						hi--;
						break;
					}
				}
			}
			
			localStorage.setItem("item", JSON.stringify(items));
			display_saved_note();
		}
	}
}
function delete_note() {
	if(check_web_storage_support() === true) {
		if(JSON.parse(localStorage.getItem("item"))!== null) { 
			var x = document.getElementById("outputNote").selectedIndex;
			document.getElementById("outputNote").remove(x);
			var a;
			for(a=x; a<items.length - 1; a++) {
				items[a] = items[a+1];
			} 
			items.pop();
			localStorage.setItem("item", JSON.stringify(items));
			display_saved_note();
		}
		else {
			alert("Nothing to delete");
		}
	}
}
function deleteClean() {
	delete_note();
	clean();
}
function editNote() {
	 if(check_web_storage_support() === true) {
		if(JSON.parse(localStorage.getItem("item"))!== null) { 
			items = JSON.parse(localStorage.getItem("item"));
			document.getElementById("area").value = document.getElementById("outputNote").value;
			var state = document.getElementById('saveNote').innerHTML;
			document.getElementById('saveNote').title = "Save Changes";
			document.getElementById('saveImg').src = "save.png";
			document.getElementById('saveNote').onclick = function() {
				delete_note();
				saveNote();
				document.getElementById('saveNote').innerHTML = state;
			}
		}
		else {
			alert("Nothing to edit");
		}
	}
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
			if(items[j] !== null) option1.text = items[j].substr(1); 
			y1.add(option1);  
			switch(items[j][0]) {
				case '0' : y1.item(j).style.backgroundColor = '#ff6666'; break;
				case '1' : y1.item(j).style.backgroundColor = '#ffff66'; break;
				case '2' : y1.item(j).style.backgroundColor = '#66ff99'; break;
			}
		}
    }
	
}
function save() {
	saveNote();
	clean();
}
function saveNote() {
    if(check_web_storage_support() === true) {
		
		var area = document.getElementById("area");
		var pr = document.getElementById("priority").value;
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
		else {	
			  
			items.push(nt);
			localStorage.setItem("item", JSON.stringify(items));
			display_saved_note();         
		}
    }
}
function clean() {
    document.getElementById('area').value = "";
}
