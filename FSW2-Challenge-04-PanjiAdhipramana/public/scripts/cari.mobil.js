let valCariMobil = document.querySelector('#cari-mobil');

valCariMobil.addEventListener('click', async event =>  {
    let typeDriver = await document.querySelector('#tipe-driver').value;
    let tanggal = await document.querySelector('#tanggal').value;
    let waktuAmbil = await document.querySelector('#waktu-ambil').value;
    let jumlahPenumpang = await document.querySelector('#jumlah-penumpang').value;
    await app.loadCars({jumlahPenumpang, tanggal, waktuAmbil, typeDriver})
});

function dimBackground(e) {
    let background = document.querySelector('#dam');
    background.style.display = 'block';
}

function unDimBackground(e) {
    let background = document.querySelector('#dam');
    background.style.display = 'none';
}