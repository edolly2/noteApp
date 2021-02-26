/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFontFunction() {
    document.getElementById('fontDropdown').classList.toggle('fontShow');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName('dropdown-font');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('fontShow')) {
                openDropdown.classList.remove('fontShow');
            }
        }
    }
};

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myColorFunction() {
    document.getElementById('colorDropdown').classList.toggle('colorShow');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName('dropdown-color');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('colorShow')) {
                openDropdown.classList.remove('colorShow');
            }
        }
    }
};

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myTypeFunction() {
    document.getElementById('typeDropdown').classList.toggle('typeShow');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
        var dropdowns = document.getElementsByClassName('dropdown-type');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('typeShow')) {
                openDropdown.classList.remove('typeShow');
            }
        }
    }
};