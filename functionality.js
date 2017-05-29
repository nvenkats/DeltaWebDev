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
    document.getElementById('controls').innerHTML = "";
    document.getElementById('menu').className = 'hiddenmenu';
    var container = document.getElementById('container');
    var p = document.createElement('p');
    p.id = 'abouttheapp';
    container.appendChild(p);
    var text = document.createTextNode("This app lets you create, edit and delete notes. All notes are stored in your local storage and hence they will be available even if you restart your browser. Happy organizing!");
    p.appendChild(text);
	}
	var home = document.getElementById('container').innerHTML;
	var controls = document.getElementById('controls').innerHTML;
	display_saved_note();
	document.getElementById('home').onclick = function() {
	document.getElementById('container').innerHTML = home;
	document.getElementById('controls').innerHTML = controls;
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
	
}
function sort() {
	
}
function delete() {
	
}
function edit() {
	
}
function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}
function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("area");
		var p = document.getElementById("priority").length;
        if(area.value != '') {
            localStorage.setItem("note", area.value);
			localStorage.setItem("p", p)
        }
        else {
            alert("Nothing to save");
        }
    }
}
function clear() {
    document.getElementById('area').value = "";
}
