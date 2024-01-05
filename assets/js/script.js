setTimeout(function() {
    document.getElementById('welcome').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('logo-penjoki-handal').classList.add('hidden');
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('loader-page').classList.add('hidden');
    }, 1000)
},800)