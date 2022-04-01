// ambil element dari id
let areaHeader = document.querySelector('#areaHeader');

// membuat element
let judul = document.createElement('h1');

// menambahkan konten
judul.textContent = 'Hello World';

// menambahkan pada parent suatu element
areaHeader.append(judul);

// ==========================================================
let valBgColor = document.querySelector('#bgcolor');

valBgColor.addEventListener('change', event => {
    document.body.style.backgroundColor = valBgColor.value
});

valBgColor.addEventListener("click", event => {
    console.log("Button terklik")
});

// Event dibagi 2 macam, yaitu: event listener (pendengar, penerima), event emitter (pengirim) (yang ngirim: element DOM html)
// Event, yaitu sebuah peristiwa yang terjadi pada sebuah objek. 
// Contoh event yang terjadi pada sebuah objek adalah: click, dblclick, keydown, keyup, keypress, mouseover, mouseout, mousedown, mouseup, mousemove, dan yang lainnya.

// List all event yang bisa dijalankan pada sebuah element DOM html : https://www.w3schools.com/jsref/dom_obj_event.asp