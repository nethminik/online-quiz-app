import './bootstrap';
import 'flowbite';

import './bootstrap';
import 'flowbite';

let links = document.querySelectorAll('a');
document.addEventListener('DOMContentLoaded', function() {
    function handleLinkClick(event) {
        event.preventDefault();
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    links.forEach(function(link) {
        link.addEventListener('click', handleLinkClick);
    });
});

let main_body = document.getElementById('admin-body-details');
links.forEach((link)=>{
    if(link.classList.contains('active')){
        main_body.style.display = 'flex';
    }
})
