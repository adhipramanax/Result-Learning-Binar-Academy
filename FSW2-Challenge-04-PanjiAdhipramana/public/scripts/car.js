class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IDR',

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    return `
    <div class="card-tampil-mobil">
      <div class="card-img-top">
        <img src="${this.image}" class="card-img-top" alt="...">
      </div>
      <div class="card-body tampil-mobil">
        <h3 class="car-title" >${this.type}</h3>
        <h4 class="car-price" style="font-weight: bold;">${formatter.format(this.rentPerDay)}/hari</h4>
        <p class="car-subtitle">
        ${this.description}
        </p>
        <div class="car-detail" >
          <div class="detail-item">
            <img src="images/fi_users.png" />
            <p>${this.capacity}</p>
          </div>
          <div class="detail-item">
            <img src="images/fi_settings.png" />
            <p>${this.transmission}</p>
          </div>
          <div class="detail-item">
            <img src="images/fi_calendar.png" />
            <p>Tahun ${this.year}</p>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary btn-register"
          style="width: 100%"
        >
          Pilih Mobil
        </button>
        </div>
        </div>
      </div>
    </div>
    `;
  }
}
