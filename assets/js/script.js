setTimeout(function() {
    document.getElementById('welcome').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('logo-penjoki-handal').classList.add('hidden');
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('loader-page').classList.add('hidden');
        setTimeout(function() {
            document.getElementById('loader-page').style.display = "none";
        }, 1000)
    }, 1000)
},800)

function showSidebar() {
    const hamburger = document.querySelector('.fa-bars');
    const xMark = document.querySelector('.fa-xmark');
    if(hamburger != '') {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-xmark');
    } else {
        xMark.classList.remove('fa-xmark');
        xMark.classList.add('fa-bars');
    }
}