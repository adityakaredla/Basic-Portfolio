let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('checked');
}

function contactMe()
{
    let name = document.getElementById('name_of_sender').value;
    let ph_no = document.getElementById('ph_no').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let mailBody = 'Name: '+name +'\nPhone Number:'+ph_no+'\n'+message;
    let mailLink = 'mailto:aditya.official1302@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(mailBody);
    window.location.href=mailLink;
}

