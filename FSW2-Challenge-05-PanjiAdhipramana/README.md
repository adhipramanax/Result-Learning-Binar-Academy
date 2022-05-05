# Challenge 5 Membuat Rental Mobil dengan Express

## 🚚 DELIVERY

```sh
1. Membuat  HTTP Server yang dapat digunakan untuk melakukan manajemen data mobil
- Manajemen data mobil harus dapat dilakukan dengan menggunakan browser, sesuai dengan desain yang tertera
- Manajemen data mobil harus dapat dilakukan melalui REST API (Menggunakan Postman)
- Manajemen data mobil meliputi aksi-aksi berikut : Menambahkan data mobil, Memodifikasi data mobil yang sudah ada, Menghapus data mobil yang sudah ada, Melihat daftar - mobil yang tersedia di dalam database
- Agar data mobil terpetakan dengan baik dan benar, maka entity relationship diagram harus tertera di dalam source code dari HTTP Server tersebut.
2. Membuat Entity Relationship Diagram dengan menggunakan dbdiagram.io
```

## 📊 Design

Figma Prototype : [Figma Prototype](https://www.figma.com/proto/H6xTtBW9Kzlf09nYnitvbH/BCR---Car-Management-Dashboard?node-id=18344%3A7128&scaling=scale-down-width&page-id=18343%3A5831&starting-point-node-id=18344%3A7128&hide-ui=1)<br>
Figma Project : [Figma Project](https://www.figma.com/file/H6xTtBW9Kzlf09nYnitvbH/BCR---Car-Management-Dashboard?node-id=18344%3A7128)

## ✨ Overview

```sh
- Dapat membuat sebuah HTTP Server dengan menggunakan Express.js.
- Dapat membuat sebuah HTTP Server sesuai dengan kaidah RESTful API.
- Dapat menggunakan Database Management System untuk membuat tabel, memodifikasi tabel, dan melakukan operasi CRUD.
- Dapat membuat sebuah HTTP Server yang dapat digunakan untuk melakukan operasi CRUD ke dalam Database melalui HTTP Request.
```

## 🔎 ERD (Entity Relationship Diagram)

![This is an image](https://res.cloudinary.com/dhuvbrmgg/image/upload/v1650769770/Binar%20Library/erd-rental-cars_niq7e5.png)

## 📦 Package

1. **List Package**

```sh
  - express
  - nodemon
  - sequelize
  - pg
  - ejs
  - axios
  - uuid
  - cors
  - express-fileupload
```

2. Installation

```sh
  npm init -y
  npm install express nodemon sequelize pg ejs axios uuid cors express-fileupload
```

## ✨ Route Web

- Index : http://localhost:8081
- Create : http://localhost:8081/create
- Update : http://localhost:8081/update

## 🔥 Route API

```sh
- List Car    : http://localhost:8081/api/cars
- Find Car    : http://localhost:8081/api/cars/:id
- Post car    : http://localhost:8081/api/cars
- Update Car  : http://localhost:8081/api/cars/:id
- Delete Car  : http://localhost:8081/api/cars/:id
- list Size   : http://localhost:8081/api/size
```
