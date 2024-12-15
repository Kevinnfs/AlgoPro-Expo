import { images } from "@/assets/images";

export const courseDetails = [
  {
    id: 1,
    title: "Algoritma",
    intro:
      "Algoritma adalah langkah-langkah atau instruksi yang sistematis dan terstruktur untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu. Algoritma merupakan inti dari pemrograman karena semua program komputer pada dasarnya merupakan implementasi dari algoritma untuk menjalankan fungsi tertentu. Untuk menuliskan algoritma tidak perlu menggunakan simbol-simbol tertentu dari bahasa pemrograman, tetapi dapat menggunakan simbol-simbol yang bersifat umum. Karena program ditulis untuk dapat dimengerti oleh mesin dan algoritma ditulis untuk dapat dimengerti oleh manusia.\nPada materi ini kalian akan mempelajari tiga cara menyajikan algoritma yaitu, simbol instruksi, diagram alir (flowchart), dan kode semu (pseudocode). Diharapkan dengan mempelajari penulisan algoritma yang benar maka akan mempermudah kalian ketika akan mengimplementasikan menjadi suatu program.",
    materiContent: [
      {
        subBab: "Simbol Instruksi",
        content:
          "Simbol instruksi adalah lambang atau bentuk yang digunakan dalam perancangan algoritma untuk mewakili langkah-langkah atau tindakan tertentu. Dalam algoritma, simbol-simbol instruksi ini membantu memvisualisasikan urutan proses, membuat alur logika menjadi lebih terstruktur dan mudah dipahami. Beberapa simbol dasar yang sering digunakan antara lain simbol untuk memulai dan mengakhiri proses, simbol keputusan untuk percabangan, serta simbol untuk menerima input atau menghasilkan output.\nSelain itu, terdapat pula simbol instruksi operasi aritmatika yang digunakan untuk menunjukkan perhitungan atau manipulasi data numerik dalam algoritma. Simbol-simbol ini meliputi:\nBerikut adalah beberapa operasi aritmatika yang sering digunakan:\n• Penjumlahan (+) untuk menambahkan dua nilai atau lebih \n• Pengurangan (-) untuk mengurangi satu nilai dari nilai lainnya \n• Perkalian (*) untuk mengalikan dua nilai atau lebih \n• Pembagian (/) untuk membagi satu nilai dengan nilai lainnya \n• Modulus (%) untuk mendapatkan sisa hasil bagi dari pembagian.\n\nDalam perancangan algoritma, kita juga sering membutuhkan simbol perbandingan untuk mengontrol alur logika berdasarkan kondisi tertentu. Simbol perbandingan ini sering digunakan dalam struktur pengambilan keputusan, seperti if-else atau while, untuk mengontrol alur algoritma berdasarkan hasil evaluasi kondisi. Simbol-simbol ini meliputi:\n•  Lebih besar (>) untuk memeriksa apakah suatu nilai lebih besar dari nilai lainnya,\n•   Lebih kecil (<) untuk memeriksa apakah suatu nilai lebih kecil dari nilai lainnya,\n• Lebih besar atau sama dengan (≥) untuk memeriksa apakah suatu nilai lebih besar atau sama dengan nilai lainnya,\n•  Lebih kecil atau sama dengan (≤) untuk memeriksa apakah suatu nilai lebih kecil atau sama dengan nilai lainnya,\n•  Sama dengan (==) untuk memeriksa apakah dua nilai memiliki nilai yang sama, dan\n•  Tidak sama dengan (!=) untuk memeriksa apakah dua nilai berbeda.\n\nSelain operasi aritmatika dan perbandingan, simbol penting lainnya adalah panah ke kiri (←), yang menunjukkan operasi penugasan (assignment) atau menyimpan nilai ke dalam suatu variabel. Simbol ini berarti bahwa nilai di sebelah kanan akan disimpan dalam variabel di sebelah kiri. Dalam banyak bahasa pemrograman modern, simbol ini digantikan dengan tanda sama dengan (=) untuk menunjukkan proses penugasan. Dengan menggunakan kombinasi simbol-simbol operasi aritmatika, perbandingan, dan penugasan, kita dapat menyusun algoritma yang lebih kompleks dan terstruktur. Algoritma yang dirancang dengan simbol-simbol instruksi ini memungkinkan instruksi untuk diikuti dengan jelas dan akurat, serta memudahkan penerjemahannya ke dalam bahasa pemrograman.",
        images: [], // Gambar dapat ditambahkan jika diperlukan
      },
      {
        subBab: "Diagram Alir (Flowchart)",
        content:
          "Simbol instruksi umumnya digunakan dalam flowchart (diagram alir) untuk membantu memvisualisasikan alur logika dan urutan langkah dalam algoritma. Setiap simbol memiliki arti dan fungsi tertentu, misalnya untuk menunjukkan permulaan proses, input atau output data, pengambilan keputusan, atau perhitungan.\nFlowchart (atau diagram alir) adalah representasi visual dari langkah-langkah atau proses dalam suatu algoritma atau sistem, yang digambarkan menggunakan simbol-simbol tertentu. Flowchart memudahkan pemahaman mengenai alur kerja atau logika dari suatu proses, karena setiap langkah dalam proses atau algoritma dapat digambarkan secara urut dan terstruktur.\n\n** Simbol-Simbol Dasar Dalam Flowchart **",
        images: [
          images["flow1"], // Menggunakan gambar dari objek `images`
          images["flow2"],
          images["flowchart"],
        ],
        additionalTexts: [
          "\nContoh Penggunaan Flowchart Sederhana\n1. Flowchart untuk Menghitung Luas Persegi Panjang\nDeskripsi Alur:\n• Mulai\n• Input panjang dan lebar\n• Hitung luas = panjang * lebar\n• Tampilkan hasil luas\n• Selesai",
          images["persegi"], // Gambar flowchart pertama
          "2. Flowchart untuk Penjumlahan 2 Angka\nDeskripsi Alur:\n• Mulai\n• Input angka pertama dan angka kedua\n• Hitung Jumlah = a+b\n• Tampilkan hasil penjumlahan\n• Selesai",
          images["jumlah"],
        ],
      },
      {
        subBab: "Kode Semu (Pseudocode)",
        content:
          "Pseudocode atau kode semu adalah representasi dari langkah-langkah algoritma yang ditulis dalam format yang menyerupai bahasa manusia. Kode semu tidak menggunakan aturan sintaks bahasa pemrograman tertentu, tetapi lebih mengutamakan logika dan struktur yang mudah dipahami. Tujuan dari pseudocode adalah untuk membantu perancang program atau algoritma dalam memetakan dan merancang solusi secara konseptual sebelum diterjemahkan ke dalam bahasa pemrograman yang sesungguhnya.",
        images: [
          images["persegi1"], // Menggunakan gambar dari objek `images`
        ],
      },
    ],
    videoContent: [
      {
        source: "https://www.youtube.com/embed/fPUv75x2Gho?autoplay=0",
        title: "Penjelasan Algoritma",
      },
      {
        source: "https://www.youtube.com/embed/u1huXRBkSbE?autoplay=0",
        title: "Implementasi Flowchart",
      },
    ],
  },
  {
    id: 3,
    title: "Bahasa Pemrograman C dan C++",
    intro:
      "Bahasa pemrograman C dan C++ merupakan dua bahasa pemrograman yang sangat populer dan sering digunakan dalam dunia pendidikan serta industri teknologi. Keduanya telah terbukti memiliki kemampuan yang sangat handal dalam pengembangan berbagai aplikasi, dari perangkat lunak sistem hingga aplikasi berbasis objek yang lebih kompleks. Meski memiliki banyak kesamaan dalam hal sintaks dan konsep dasar pemrograman, C dan C++ juga memiliki sejumlah perbedaan mendasar yang mempengaruhi cara mereka digunakan dalam berbagai konteks pemrograman. Salah satu perbedaan utama antara keduanya terletak pada cara mereka mengelola data, manajemen memori, serta pendekatan dalam menyusun struktur program. Di dalam kurikulum pemrograman, baik C maupun C++ memiliki peran yang sangat penting dalam membantu siswa memahami dasar-dasar algoritma, struktur data, dan prinsip dasar dalam pengembangan perangkat lunak yang efisien. Berikut penjelasan mengenai kedua bahasa pemrograman :",
    materiContent: [
      {
        subBab: "Pengantar Bahasa C dan C++",
        content:
          "• Bahasa C : Bahasa pemrograman C dikembangkan oleh Dennis Ritchie pada awal 1970-an dan digunakan untuk mengembangkan sistem operasi Unix. C dikenal sebagai bahasa yang cukup sederhana, namun sangat powerful dan efisien. Bahasa ini memberikan kontrol yang sangat tinggi atas pengelolaan memori, yang membuatnya cocok untuk aplikasi sistem dan perangkat keras.\n• Bahasa C++ :  C++ merupakan pengembangan dari bahasa C yang dikembangkan oleh Bjarne Stroustrup  tahun 1983. C++ menambahkan konsep pemrograman berorientasi objek (OOP) yang memungkinkan program untuk dikelola lebih modular dan lebih mudah dikembangkan. C++ mendukung pemrograman prosedural seperti C, tetapi juga memperkenalkan kelas, objek, pewarisan, polimorfisme, dan enkapsulasi.",
        images: [],
      },
      {
        subBab: "Perbedaan Utama antara C dan C++",
        content:
          "C dan C++ adalah dua bahasa pemrograman yang sering digunakan dalam dunia komputer. Meskipun keduanya memiliki banyak kesamaan, ada beberapa perbedaan utama yang membedakan keduanya. Berikut penjelasan sederhana mengenai perbedaan utama antara bahasa C dan C++ :\n1. Paradigma Pemrograman\n• C adalah bahasa pemrograman prosedural. Artinya, program di C bekerja berdasarkan urutan langkah-langkah atau prosedur yang dieksekusi satu per satu. Misalnya, program di C biasanya berisi banyak fungsi yang bekerja mengolah data.\n• C++ yaitu bahasa pemrograman berorientasi objek (OOP). Artinya, C++ memungkinkan program untuk mengelompokkan data dan fungsi dalam satu kesatuan yang disebut kelas (class). Di C++, kita bisa membuat objek dari kelas tersebut dan bekerja dengan cara yang lebih terstruktur dan fleksibel.\n2. Pemrograman Berorientasi Objek \n• C tidak mendukung pemrograman berorientasi objek. Semua data dan fungsi berada terpisah.\n• C++ mendukung pemrograman berorientasi objek. Di C++, kita bisa membuat kelas yang menggabungkan data dan fungsi menjadi satu. Dengan OOP, program menjadi lebih mudah diorganisir dan dikembangkan.\n3. Fungsi yang Bisa Diulang (Overloading)\n• Di C, setiap fungsi harus memiliki nama yang berbeda. Misalnya, jika kita punya dua fungsi yang mirip, kita tidak bisa memberi mereka nama yang sama meskipun parameternya berbeda.\n• C++ mendukung fungsi yang bisa diulang (function overloading), artinya kita bisa membuat fungsi dengan nama yang sama tapi dengan parameter yang berbeda.\n4. Template\n• C tidak memiliki template. Jadi, jika kita ingin menulis fungsi yang bisa bekerja dengan berbagai tipe data, kita harus menulis fungsi yang berbeda untuk tiap tipe data.\n• C++ memiliki template, yang memungkinkan kita menulis fungsi atau kelas yang bisa digunakan untuk berbagai tipe data tanpa menulis ulang kode.\n5. Penanganan Kesalahan (Exception Handling)\n• C tidak memiliki cara khusus untuk menangani kesalahan. Biasanya, kesalahan ditangani dengan memeriksa nilai pengembalian dari fungsi.\n• C++ memiliki fitur penanganan kesalahan menggunakan try, catch, dan throw, yang membuat penanganan kesalahan lebih mudah dan lebih terstruktur.\n6. Pustaka Standar\n• C memiliki pustaka standar yang lebih sederhana dan terbatas, lebih berfokus pada operasi dasar seperti input/output dan manipulasi string.\n• C++ memiliki pustaka yang lebih kaya dan canggih, yang disebut STL (Standard Template Library). STL menyediakan banyak struktur data dan algoritma seperti vector, list, map, yang memudahkan pemrogram dalam menulis kode.\n7. Kompleksitas Kode\n• C cenderung lebih sederhana dan langsung. Ini membuatnya lebih mudah untuk dipelajari dan digunakan untuk pemrograman sistem atau perangkat keras.\n• C++ lebih kompleks karena memiliki banyak fitur tambahan seperti OOP, template, dan exception handling. Ini membuat C++ lebih cocok untuk pengembangan aplikasi besar dan rumit.\n\n8. Kesimpulan \n• C lebih cocok untuk program yang sederhana dan mengharuskan kontrol langsung atas memori dan perangkat keras, seperti pengembangan sistem operasi atau aplikasi tingkat rendah.\n• C++ menawarkan lebih banyak fitur dan lebih cocok untuk pengembangan aplikasi besar yang membutuhkan struktur yang lebih kompleks, seperti aplikasi desktop, game, atau perangkat lunak yang menggunakan pemrograman berorientasi objek.",
        images: [],
      },
      {
        subBab: "Konsep Dasar Pemrograman dalam C dan C++",
        content:
          "Konsep dasar pemrograman yang diimplementasikan dalam C dan C++, mencakup elemen-elemen berikut :\nA. Algoritma dan Struktur Program\n1. Algoritma adalah serangkaian langkah-langkah logis untuk menyelesaikan suatu masalah. Pemrograman dalam C dan C++ mengimplementasikan algoritma tersebut ke dalam kode program.\n2.  Struktur dasar dalam pemrograman C dan C++ mencakup:\n• Pendeklarasian Variabel: Variabel digunakan untuk menyimpan data. Variabel memiliki tipe data yang sesuai dengan jenis informasi yang disimpan, misalnya int, float, char, dan double.\n• Fungsi: Fungsi adalah blok kode yang melakukan tugas tertentu dan bisa dipanggil berulang kali dalam program.\n• Kontrol Alur Program: Menggunakan struktur kontrol seperti if-else, switch-case, for loop, while loop, dan do-while loop untuk mengatur jalannya program berdasarkan kondisi tertentu. \n\nB. Tipe Data dan Variabel\n1. Tipe Data: Dalam C dan C++, tipe data dasar yang sering digunakan antara lain:\n• int: untuk menyimpan angka bulat (integer).\n• float: untuk menyimpan angka desimal dengan presisi tunggal.\n• double: untuk angka desimal dengan presisi ganda.\n• char: untuk menyimpan karakter.\n• void: digunakan untuk fungsi yang tidak mengembalikan nilai. \n2. Konstanta: Sebagai nilai tetap dalam program yang tidak dapat diubah, seperti const int x = 10;",
        images: [],
      },
      {
        subBab: " Perbedaan Penulisan Bahasa C dan C++",
        content: "",
        images: [],
        additionalTexts: [
          "DEKLARASI PENULISAN PROGRAM DALAM BAHASA C\nBahasa C adalah bahasa prosedural yang sederhana dengan struktur program yang lebih terorganisasi dalam fungsi-fungsi.\n1. Struktur Dasar Program\nStruktur dasar program C terdiri dari:\n• Header Files: Berisi pustaka fungsi yang akan digunakan.\n• Fungsi Utama: Fungsi main() yang dieksekusi pertama kali.\n• Fungsi Tambahan (Opsional): Fungsi pendukung untuk modularitas.\nContoh Program Dasar C:",
          images["c1"], // Gambar flowchart pertama
          "2. Deklarasi Variabel\n• Variabel harus dideklarasikan sebelum digunakan.\n• C bersifat statically typed (tipe data ditentukan saat deklarasi).\nContoh :",
          images["c2"],
          "3. Fungsi\n• Fungsi di C digunakan untuk membagi program menjadi bagian kecil yang modular.\n• Harus dideklarasikan sebelum digunakan atau melalui prototipe.\nContoh Fungsi :",
          images["c3"],
          "4. Input dan Output\n• Menggunakan fungsi scanf dan printf.\nContoh :",
          images["c4"],
          "\n\nDEKLARASI PENULISAN PROGRAM DALAM BAHASA C++\nC++ adalah pengembangan dari C dengan tambahan fitur Object-Oriented Programming dan sintaks modern.\n1. Struktur Dasar Program\nStruktur program C++ mirip dengan C tetapi lebih fleksibel:\n• Header Files: Biasanya <iostream> untuk operasi input/output.\n• Namespace: Menggunakan std untuk menghindari konflik nama.\n• Fungsi Utama: Fungsi main().\nContoh Program Dasar C++:",
          images["c5"], // Gambar flowchart pertama
          "2. Deklarasi Variabel\n• Mirip dengan C, tetapi mendukung tipe data tambahan seperti string dan bool.\n• Mendukung inisialisasi modern menggunakan {}.\nContoh :",
          images["c6"],
          "3. Fungsi\n• Fungsi dapat menggunakan overloading (fungsi dengan nama sama tetapi parameter berbeda).\nContoh Overloading :",
          images["c7"],
          "4. Input dan Output\n• Menggunakan cin untuk input dan cout untuk output\nContoh :",
          images["c8"],
          "TABEL PERBANDINGAN",
          images["c9"],
        ],
      },
      {
        subBab: "Instalasi dan Konfigurasi Software Dev C++",
        content:
          "Untuk membuat program dalam bahasa C++, memerlukan dua software, yaitu : \na. Text Editor, untuk menuliskan kode-kode program.\nb. C++ Compiler, untuk menerjemahkan kode bahasa C++ menjadi program.\nBerikut langkah-langkah instalasi dan kofigurasi software Dev C++.",
        images: [],
        additionalTexts: [
          "A. Instalasi dan Konfigurasi\nSoftware Dev-C++ yang merupakan sebuah C/C++ dalam Integrated Development Environment (IDE) yang sudah dilengkapi MinGW C/C++ Compiler. Instalasi software Dev-C++ sangat mudah untuk dilakukan, berikut ini adalah tahapan dari proses instalasi serta konfigurasi Dev-C++.\nLANGKAH INSTALASI Dev-C++\n1) Unduh Software Dev-C++\n• Kunjungi situs resmi Dev-C++ (misalnya di SourceForge) atau sumber terpercaya lainnya.\n• Pilih versi terbaru Dev-C++ yang mendukung sistem operasi Anda",
          images["c10"], // Gambar flowchart pertama
          "2) Buka atau jalankan file yang sudah di unduh\n• Buka file installer (biasanya berekstensi .exe) yang sudah diunduh.\n• Pada jendela License Agreement, baca dan klik I Agree jika Anda setuju dengan syarat dan ketentuan.",
          images["c11"],
          "3) Pilih Full lalu klik next, selanjutnya Pilih Lokasi Instalasi \n• Tentukan direktori tempat Dev-C++ akan diinstal (secara default biasanya di C:/Program Files/Dev-C++).\n• Klik Install untuk melanjutkan.",
          images["c12"],
          images["c13"],
          "4) Proses Instalasi \n• Tunggu hingga proses instalasi selesai.\n• Klik Finish untuk menyelesaikan proses instalasi.",
          images["c14"],
          "\n\nLANGKAH KONFIGURASI Dev-C++\n1) Pengaturan Awal\n• Ketika pertama kali dibuka, Dev-C++ mungkin akan meminta Anda untuk memilih bahasa. Pilih English atau bahasa lain sesuai preferensi Anda. lalu pilih Next\n• Kemudian akan diminta untuk menentukan tema tampilan ( disarankan bawaan dari aplikasi nya saja ), lalu pilih Next",
          images["c15"], // Gambar flowchart pertama
          images["c16"], // Gambar flowchart pertama
          "2) Uji Konfigurasi\n• Pilih File > New > Project.\n• Pilih Console Application, lalu klik C++.\n• Pilih Empty Project\n• Simpan proyek dengan nama dan lokasi pilihan Anda.",
          images["c17"],
          "3) Uji Output Berfungsi\nTulis kode sederhana berikut untuk diuji dan Klik Execute > Compile & Run atau tekan F11 untuk menjalankan program.",
          images["c19"],
          "Jika output muncul di konsol dengan teks Hello, World!, berarti instalasi dan konfigurasi berhasil.",
          images["c18"],
        ],
      },
    ],
    videoContent: [
      {
        source: "https://www.youtube.com/embed/AmoTQhK6gmI?autoplay=0",
        title: "Perbedaan Dasar C dan C++",
      },
      {
        source: "https://www.youtube.com/embed/xDf-3atHE8Y?autoplay=0",
        title: "Program Bahasa C dan C++",
      },
    ],
  },
  {
    id: 4,
    title: "Komponen Program dalam Bahasa C++",
    intro:
      "Ketika membuat program menggunakan bahasa pemrograman C++, harus mengenal beberapa komponennya terlebih dahulu. Mengutip dari Modul Pengenalan Bahasa C++, Algoritma Pemrograman, Integrated Development Equipment (IDE) Visual C++ dan, Dasar-dasar Bahasa C++, berikut adalah komponen bahasa C++:",
    materiContent: [
      {
        subBab: "Header File",
        content:
          "Header file digunakan untuk menyertakan pustaka atau file yang berisi fungsi-fungsi standar yang digunakan dalam program. Direktif ini ditulis dengan awalan #. Contoh header file yang sering digunakan:\n• #include <iostream> → Digunakan untuk input dan output (I/O) standar.\n• #include <cmath> → Digunakan untuk operasi matematika.",
        images: [],
      },
      {
        subBab: "Namespace",
        content:
          "Namespace adalah cara untuk mengorganisasikan kode dan mencegah konflik nama. Dalam program C++, kita sering menggunakan std untuk mengakses fungsi bawaan standar seperti cout dan cin. Contoh :\n• using namespace std; ",
        images: [],
      },
      {
        subBab: "Fungsi Utama (main())",
        content:
          "Fungsi main() adalah titik awal eksekusi program C++. Semua instruksi program dimulai dari fungsi ini. Fungsi ini wajib ada dalam setiap program C++.",
        images: [],
      },
      {
        subBab: " Identifier/Pengenal",
        content:
          "Identifier ini berfungsi dalam pengenalan variable, konstanta, fungsi, dan tipe data. Penulisan identifier pada bahasa pemrograman C++ memiliki aturannya sendiri, yaitu:\n1. Harus dimulai dengan huruf (a-z, A-Z) atau garis bawah (_)\n• Tidak boleh diawali dengan angka.\n• Contoh yang benar: nilai, _variabel.\n• Contoh yang salah: 1variabel, #angka.\n2. Hanya boleh mengandung huruf, angka, dan garis bawah\n• Tidak boleh ada spasi\n• Tidak boleh menggunakan karakter khusus seperti @, #, %, &, dll.\n• Contoh yang benar: jumlah_data, nilai2.\n• Contoh yang salah: nilai@data, jumlah-data.\n3. Tidak boleh menggunakan kata kunci bahasa C++\n• Kata kunci seperti int, float, for, while, dll., tidak bisa digunakan sebagai nama pengenal.\n• Contoh yang salah: int break;, int return; (identifier mengandung kata kunci C++ break dan return)\n4. Peka huruf besar dan kecil (Case Sensitive)\n• C++ membedakan antara huruf besar dan kecil. Misalnya, nilai dan Nilai dianggap sebagai dua identifier yang berbeda.\n Contoh Penulisan Identifier yang Benar ",
        images: [
          images["c21"], // Menggunakan gambar dari objek `images`
        ],
      },
      {
        subBab: "Komentar",
        content:
          "Komentar adalah bagian kode yang digunakan untuk memberikan penjelasan atau catatan di dalam program dan sangat berguna untuk dokumentasi kode, memudahkan pembacaan ulang, atau memberi catatan pada kode yang kompleks. Komentar tidak akan ditampilkan saat program dijalankan.\n1) Komentar satu baris: Menggunakan //\n2) lebih satu baris: Menggunakan /* ... */ ",
        images: [
          images["c22"], // Menggunakan gambar dari objek `images`
        ],
      },
      {
        subBab: "Konstanta",
        content:
          "Konstanta adalah nilai yang tidak dapat diubah selama program berjalan. Konstanta digunakan untuk menyimpan data yang tetap (immutable), seperti nilai-nilai tetap matematika, parameter yang tidak boleh dimodifikasi, atau nilai yang sering digunakan dalam program.\nJenis Konstanta dalam C++",
        images: [],
        additionalTexts: [
          "1. Konstanta dengan const\n• Kata kunci const digunakan untuk mendeklarasikan konstanta.\n• Setelah nilai diberikan ke konstanta, nilainya tidak dapat diubah.\n• Penggunaan const harus diakhiri dengan tanda titik koma (;)",
          "Sintaks :",
          images["c23"], // Gambar flowchart pertama
          "Contoh :",
          images["c24"],
          "\n2. Konstanta dengan #define (Makro)\n• #define digunakan untuk mendefinisikan makro konstanta.\n• Biasanya digunakan untuk nilai tetap sederhana yang tidak memerlukan tipe data.\n• Penggunaan define tidak diakhiri dengan tanda titik koma (;)",
          "Sintaks :",
          images["c25"], // Gambar flowchart pertama
          "Contoh :",
          images["c26"],
          "\n3. Konstanta Enumerasi (Enumerations)\n• Enumerasi adalah daftar nilai konstanta yang terkait.\n• Digunakan untuk membuat kumpulan nilai tetap dengan nama yang lebih bermakna.\n• Secara default, nilai konstanta pada enumerasi dimulai dari 0 dan bertambah 1 untuk setiap elemen berikutnya. (Nilai dapat diubah jika diperlukan)",
          "Sintaks :",
          images["c27"], // Gambar flowchart pertama
          "Contoh :",
          images["c28"],
        ],
      },
      {
        subBab: "Deklarasi dan Inisialisasi Variabel",
        content:
          "Variabel adalah lokasi penyimpanan dalam memori yang digunakan untuk menyimpan data sementara selama program berjalan. Variabel memiliki nama, tipe data, dan nilai tertentu.\nUntuk menggunakan variabel, harus dilakukan deklarasi terlebih dahulu. Deklarasi bertujuan untuk memberi tahu compiler nama variabel dan tipe datanya.\nInisialisasi adalah pemberian nilai awal pada variabel. Variabel dapat diinisialisasi saat deklarasi atau setelahnya.",
        images: [],
        additionalTexts: [
          "\n** JENIS-JENIS VARIABEL **",
          "1. Variabel Lokal\nVariabel lokal adalah variabel yang dideklarasikan di dalam suatu fungsi, blok, atau metode tertentu. Variabel ini hanya dapat diakses dan digunakan dalam lingkup fungsi atau blok tempat variabel tersebut dideklarasikan.\nCiri-ciri :\n• Hanya dapat diakses dalam fungsi atau blok tempat dideklarasikan.\n• Nilai variabel akan dihapus dari memori setelah fungsi selesai dijalankan.\n• Tidak dapat diakses oleh fungsi lain.",
          "Contoh :",
          images["c29"],
          "Penjelasan :\n• Variabel umur hanya bisa diakses di dalam fungsi hitungUmur.\n• Jika mencoba mengakses umur di luar hitungUmur, akan terjadi error.",
          "2. Variabel Global\nVariabel global adalah variabel yang dideklarasikan di luar semua fungsi. Variabel ini dapat diakses oleh semua fungsi dalam program.\nCiri-ciri :\n• Dapat diakses oleh semua fungsi dalam program.\n• Berlaku selama program berjalan (lifetime global).\n• Perlu digunakan dengan hati-hati karena dapat menyebabkan konflik nama atau efek samping (side effect).",
          "Contoh :",
          images["c30"],
          "Penjelasan :\n• Variabel total adalah variabel global dan dapat diakses serta diubah oleh fungsi tambahTotal dan main.",
          "\n** DEKLARASI BEBERAPA VARIABEL SEKALIGUS **\nDalam C++, Anda dapat mendeklarasikan beberapa variabel sekaligus dengan tipe data yang sama.\nContoh :",
          images["c31"],
          "\n** MENGUBAH NILAI VARIABEL **\nNilai variabel dapat diubah kapan saja setelah deklarasi.\nContoh :",
          images["c32"],
          "\n** INPUT DATA KE VARIABEL **\nVariabel dapat diisi dengan nilai yang diinputkan oleh pengguna menggunakan cin.\nContoh :",
          images["c33"],
        ],
      },
      {
        subBab: "Tipe Data",
        content:
          "Tipe data digunakan untuk menentukan jenis data yang dapat disimpan di dalam variabel dan bagaimana data tersebut diproses. Berikut ini penjelasan lengkap mengenai tipe data dalam C++:",
        images: [],
        additionalTexts: [
          "1. Tipe Data Primitif (Fundamental)\nTipe data primitif adalah tipe data dasar yang sudah disediakan oleh C++ dan sering digunakan untuk berbagai kebutuhan pemrograman.\na. Tipe Data Bilangan Bulat (Integer)\n• int: Tipe data ini digunakan untuk menyimpan bilangan bulat seperti -1, 0, 1, 2, dll.\n• short int: Bilangan bulat dengan ukuran lebih kecil dari int.\n• long int: Bilangan bulat dengan ukuran lebih besar, digunakan untuk menyimpan angka yang lebih besar dari yang dapat disimpan oleh int\n•unsigned int: Bilangan bulat positif (tanpa tanda negatif), berguna jika hanya membutuhkan bilangan positif.",
          "Contoh :",
          images["c35"],
          "b. Tipe Data Desimal (Floating Point)\n• float: Digunakan untuk menyimpan angka desimal dengan presisi yang lebih rendah.\n• double: Digunakan untuk menyimpan angka desimal dengan presisi yang lebih tinggi dibandingkan float.",
          "Contoh :",
          images["c36"],
          "c. Tipe Data Karakter\n• char: Menyimpan satu karakter, misalnya huruf, angka, atau simbol dalam bentuk ASCII.",
          "Contoh :",
          images["c37"],
          "d. Tipe Data Boolean\n• bool: Menyimpan nilai true atau false. Tipe ini digunakan untuk kondisi logika.",
          "\n2. Tipe Data Terkait String\nstring (dari library <string>): Digunakan untuk menyimpan rangkaian karakter atau teks. Tipe ini tidak termasuk tipe data primitif, melainkan tipe data kompleks yang disediakan melalui pustaka standar.",
          "Contoh :",
          images["c39"],
          "\n3. Tipe Data Struktur (Struct)\nstruct adalah tipe data kompleks yang digunakan untuk menggabungkan beberapa tipe data berbeda menjadi satu kesatuan.",
          "Contoh :",
          images["c38"],
        ],
      },
    ],
    videoContent: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    id: 5,
    title: "Ekspresi",
    intro:
      'Dalam pemrograman, ekspresi adalah kombinasi operand dan operator yang menghasilkan nilai tertentu setelah evaluasi. Ekspresi merupakan salah satu elemen fundamental dalam algoritma dan pemrograman, karena digunakan untuk menghitung, mengevaluasi kondisi, atau memanipulasi data. Ekspresi terdiri atas dua elemen utama:\n1. Operand: Data atau nilai yang dioperasikan. Operand bisa berupa:\n• Variabel: x, y\n• Konstanta: 5, 3.14\n• Fungsi: sqrt(16)\n2. Operator: Simbol atau kata kunci yang menentukan jenis operasi pada operand.\nContoh Ekspresi:\n1. Ekspresi Aritmatika: a + b * c (menghasilkan nilai numerik).\n2. Ekspresi Logika: a > b && c < d (menghasilkan nilai boolean: true atau false).\n3. Ekspresi String: "Hello " + name (menghasilkan string baru).\n\nOperator adalah simbol atau kata kunci yang digunakan untuk melakukan operasi pada operand dalam sebuah ekspresi. Operator menentukan bagaimana operand diproses, dihitung, atau dibandingkan.\nJenis-jenis Operator:\n1. Operator Aritmatika: +, -, *, /, %\n2. Operator Relasional: ==, !=, <, >, <=, >=\n3. Operator Logika: &&, ||, !\n4. Operator Penugasan: =, +=, -=, *=, /=, %=\n5. Operator Ternary: ? :\n6. Operator Unary: +, -, ++, --',
    materiContent: [
      {
        subBab: "Operator Aritmatika",
        content:
          "Operator Aritmatika digunakan untuk melakukan operasi matematis pada nilai numerik (operand). Operasi ini melibatkan operasi dasar seperti penjumlahan, pengurangan, perkalian, pembagian, dan modulus (sisa pembagian).\nSifat-Sifat Operator Aritmatika",
        images: [],
        additionalTexts: [
          "1. Operand Numerik:\n• Operator aritmatika bekerja dengan tipe data numerik seperti int, float, dan double.\n• Pembagian dengan tipe int akan menghasilkan hasil pembagian integer.",
          "Contoh:",
          images["c40"], // Gambar flowchart pertama
          "2. Prioritas (Precedence):\n• Operator *, /, dan % memiliki prioritas lebih tinggi dibandingkan + dan -.\n• Anda dapat menggunakan tanda kurung () untuk mengatur prioritas evaluasi.",
          "Contoh:",
          images["c41"], // Gambar flowchart pertama
          "3. Associativity (Asosiativitas):\n• Semua operator aritmatika bersifat associative left, artinya evaluasi dilakukan dari kiri ke kanan.",
          "Contoh:",
          images["c42"],
          "Contoh Program Menggunakan Operator Aritmatika:",
          images["c43"],
          "Hasil Program:",
          images["c44"],
        ],
      },
      {
        subBab: "Operator Relasional",
        content:
          "Operator Relasional adalah operator yang digunakan untuk membandingkan dua nilai atau ekspresi. Hasil dari evaluasi operator relasional adalah nilai boolean, yaitu true (benar) atau false (salah).\nSifat-Sifat Operator Relasional",
        images: [],
        additionalTexts: [
          "1. Evaluasi Boolean:\n• true (jika kondisi terpenuhi).\n• false (jika kondisi tidak terpenuhi).",
          "2. Bekerja dengan Tipe Data:\n• Operator relasional umumnya digunakan untuk tipe data numerik (int, float, double) atau karakter (char).\n• Dapat juga digunakan untuk string menggunakan fungsi pembanding tambahan, seperti compare() dalam string.",
          "3. Associativity (Asosiativitas):\n• Semua operator aritmatika bersifat associative left, artinya evaluasi dilakukan dari kiri ke kanan.",
          "4. Prioritas:\n• Prioritas operator relasional lebih rendah dibandingkan operator aritmatika (+, -, *, /), tetapi lebih tinggi daripada operator logika (&&, ||).",
          "Contoh Program Menggunakan Operator Relasional:",
          images["c45"],
          "Hasil Program:",
          images["c46"],
        ],
      },
      {
        subBab: "Operator Logika",
        content:
          "Operator Logika adalah operator yang digunakan untuk menggabungkan, memanipulasi, atau mengevaluasi nilai boolean (logika). Nilai boolean terdiri dari dua kemungkinan:\n• true: Benar\n• false: Salah\n Operator logika biasanya digunakan dalam pernyataan kondisi seperti if, while, atau for untuk mengontrol alur program.\n1. Operator AND (&&) \nOperator AND digunakan untuk mengevaluasi apakah kedua kondisi bernilai true. Jika salah satu kondisi bernilai false, maka hasilnya adalah false.\n2. Operator OR (||)\nOperator OR digunakan untuk mengevaluasi apakah salah satu kondisi bernilai true. Jika salah satu kondisi bernilai true, maka hasilnya adalah true. Hanya jika keduanya false, hasilnya adalah false.\n3. Operator NOT (!)\nOperator NOT digunakan untuk membalikkan nilai boolean. Jika kondisi bernilai true, maka operator ini mengubahnya menjadi false, dan sebaliknya.\nSifat-Sifat Operator Logika",
        images: [],
        additionalTexts: [
          "1. Associativity (Asosiativitas):\n• Operator && dan || bersifat left-to-right associative, artinya evaluasi dilakukan dari kiri ke kanan.\n• Pembagian dengan tipe int akan menghasilkan hasil pembagian integer.",
          "Contoh:",
          images["c47"], // Gambar flowchart pertama
          "2. Prioritas (Precedence):\n• Operator ! memiliki prioritas lebih tinggi dibandingkan && atau ||.\n• Operator && memiliki prioritas lebih tinggi daripada ||.",
          "Contoh:",
          images["c48"], // Gambar flowchart pertama
          "3. Short-circuit Evaluation:\nEvaluasi berhenti lebih awal jika hasilnya sudah pasti:\n• && (AND): Jika operand pertama false, operand kedua tidak dievaluasi.\n• || (OR): Jika operand pertama true, operand kedua tidak dievaluasi.",
          "\nContoh Program Menggunakan Operator Logika:",
          images["c49"],
          "Hasil Program:",
          images["c50"],
        ],
      },
      {
        subBab: "Operator Penugasan",
        content:
          "Operator Penugasan digunakan untuk memberikan nilai kepada suatu variabel. Operator ini menetapkan hasil ekspresi atau nilai tertentu ke dalam variabel. Selain penugasan dasar, operator penugasan juga mendukung operasi aritmatika, logika, dan lainnya dalam bentuk yang lebih ringkas.\nJenis-Jenis Operator Penugasan",
        images: [],
        additionalTexts: [
          "1. Penugasan Dasar (=)\n• Operator ini menetapkan nilai langsung ke variabel.",
          "Contoh: int a = 5; // Nilai 5 diberikan ke variabel a",
          "2. Penugasan dengan Operasi Aritmatika\n• Operator penugasan ini menggabungkan operasi aritmatika dengan penugasan dalam satu langkah.",
          "Contoh:\n1. a += 5; // Sama dengan a = a + 5\n2. a -= 3; // Sama dengan a = a - 3, dst",
          "\nContoh Program Menggunakan Operator Penugasan:",
          images["c51"],
          "Hasil Program:",
          images["c52"],
        ],
      },
      {
        subBab: "Operator Ternary",
        content:
          "Operator Ternary adalah operator yang digunakan untuk membuat pernyataan bersyarat dalam satu baris kode. Operator ini memiliki tiga operand dan sering digunakan untuk menggantikan struktur if-else yang sederhana.\nSintaks Operator Ternary",
        images: [],
        additionalTexts: [
          images["c53"],
          "\n• kondisi: Ekspresi yang akan dievaluasi sebagai true atau false.\n• nilai_jika_true: Nilai atau ekspresi yang akan dikembalikan jika kondisi bernilai true.\n• nilai_jika_false: Nilai atau ekspresi yang akan dikembalikan jika kondisi bernilai false.",
          "Contoh 1: Memilih Nilai Berdasarkan Kondisi",
          images["c54"],
          "Hasil Program",
          images["c55"],
          "Contoh 2: Menampilkan Pesan Berdasarkan Kondisi",
          images["c56"],
          "Hasil Program",
          images["c57"],
        ],
      },
      {
        subBab: "Operator Unary",
        content:
          "Operator Unary adalah operator yang hanya bekerja dengan satu operand. Operator ini digunakan untuk melakukan berbagai operasi seperti negasi, increment, decrement, dan lainnya pada operand.\nJenis-jenis Operator Unary",
        images: [],
        additionalTexts: [
          "a. Unary Plus (+) -> Menunjukkan nilai positif operand atau biasanya digunakan untuk eksplisit menunjukkan nilai positif.",
          "Contoh:",
          images["c58"],
          "b. Unary Minus (-) -> Mengubah tanda operand (positif menjadi negatif atau sebaliknya).",
          images["c59"],
          "c. Increment (++) -> Menambahkan 1 ke nilai operand. Ada dua jenis yaitu:\n• Pre-increment (++a): Operand ditambahkan 1 sebelum digunakan dalam ekspresi.\n• Post-increment (a++): Operand ditambahkan 1 setelah digunakan dalam ekspresi.",
          "Contoh:",
          images["c60"],
          "d. Decrement (--) -> Mengurangi 1 dari nilai operand.. Ada dua jenis yaitu:\n• Pre-decrement (--a): Operand dikurangi 1 sebelum digunakan dalam ekspresi.\n• Post-decrement (a--): Operand dikurangi 1 setelah digunakan dalam ekspresi.",
          "Contoh:",
          images["c61"],
        ],
      },
    ],
    videoContent: [
      {
        source: "https://www.youtube.com/embed/euxcvQ30Aik?autoplay=0",
        title: "Penggunaan Operator dan Ekspresi",
      },
      {
        source: "https://www.youtube.com/embed/z2_BN6Y-Ibw?autoplay=0",
        title: "Operasi Aritmatika dan Logika",
      },
    ],
  },
  {
    id: 6,
    title: "Struktur Kontrol Keputusan",
    intro:
      "Struktur kontrol keputusan adalah salah satu elemen penting dalam algoritma dan pemrograman yang memungkinkan program untuk menentukan alur eksekusi berdasarkan kondisi tertentu. Dengan adanya struktur ini, program dapat mengambil keputusan secara otomatis sesuai dengan masukan atau situasi yang terjadi selama proses eksekusi. Hal ini menjadikan program lebih dinamis, fleksibel, dan interaktif, karena dapat merespons berbagai keadaan yang tidak dapat diprediksi sebelumnya.\nDalam pengembangan algoritma, struktur kontrol keputusan digunakan untuk membuat program mampu beradaptasi dengan masukan, menyelesaikan logika bercabang, dan menjalankan aksi yang sesuai dengan syarat tertentu. Hal ini sangat penting dalam berbagai skenario, seperti menentukan hasil ujian siswa, memproses transaksi pada aplikasi e-commerce, hingga memvalidasi input pengguna.\nSebagai contoh, dalam sistem pembayaran, program harus memeriksa apakah pengguna memiliki saldo yang cukup sebelum mengotorisasi transaksi. Jika tidak, program harus menampilkan pesan kesalahan atau menawarkan opsi lain kepada pengguna.\nBerikut beberapa jenis struktur kontrol keputusan yang dapat digunakan untuk menangani situasi yang berbeda.",
    materiContent: [
      {
        subBab: "if (Jika Kondisi Sederhana)",
        content:
          "if adalah salah satu struktur kontrol keputusan paling dasar dalam pemrograman yang digunakan untuk mengeksekusi sebuah blok kode hanya jika kondisi tertentu terpenuhi (bernilai true). Jika kondisi tidak terpenuhi (bernilai false), blok kode di dalam if akan diabaikan, dan program akan melanjutkan ke baris berikutnya.\nSintaks if",
        images: [],
        additionalTexts: [
          images["c62"],
          "Penjelasan:\n• kondisi: Ekspresi logika yang menghasilkan nilai boolean (true atau false). Kondisi dapat berupa perbandingan (x > y, a == b) atau nilai logis (true, false).\n• Blok kode: Kumpulan perintah di dalam {} yang hanya akan dieksekusi jika kondisi bernilai true. \nCara Kerja if",
          "1. Evaluasi Kondisi:\n• Program akan mengevaluasi ekspresi dalam tanda kurung (kondisi).\n• Jika hasilnya true, blok kode di dalam {} akan dijalankan.\n• Jika hasilnya false, blok kode tersebut diabaikan.",
          "2. Sifat if:\n• Hanya memeriksa satu kondisi.\n• Tidak memiliki alternatif jika kondisi false (untuk itu digunakan if-else)",
          "Contoh 1: Menampilkan Pesan Jika Kondisi Terpenuhi",
          images["c63"], // Gambar flowchart pertama
          "Hasil Program:",
          images["c64"],
          "Contoh 2: Tidak Menjalankan Blok Jika Kondisi Salah",
          images["c65"],
          "Hasil Program:",
          images["c66"],
        ],
      },
      {
        subBab: "if-else (Jika-Kondisi dan Alternatif)",
        content:
          "if-else adalah struktur kontrol keputusan yang digunakan untuk menangani dua kemungkinan dalam program:\n1. Menjalankan blok kode pertama jika kondisi bernilai true.\n2. Menjalankan blok kode alternatif jika kondisi bernilai false.\nStruktur ini memberikan pilihan kepada program untuk mengambil salah satu dari dua jalur eksekusi, berdasarkan evaluasi kondisi tertentu.\nSintaks if-else",
        images: [],
        additionalTexts: [
          images["c67"],
          "Penjelasan:\n• kondisi: Ekspresi logika yang menghasilkan nilai true atau false.\n• Blok if: Dieksekusi jika kondisi bernilai true. \n• Blok else: Dieksekusi jika kondisi bernilai false.\nCara Kerja if-else",
          "1. Program mengevaluasi kondisi di dalam tanda kurung ().",
          "2. Jika kondisi bernilai true, program akan menjalankan blok kode di dalam {} setelah if.",
          "3. Jika kondisi bernilai false, program akan menjalankan blok kode di dalam {} setelah else.",
          "Contoh Program:",
          images["c68"], // Gambar flowchart pertama
          "Hasil Program: (Jika Memasukkan angka positif dan lebih besar dari 0)",
          images["c69"],
          "Hasil Program: (Jika Memasukkan angka 0 dan angka negatif)",
          images["c70"],
        ],
      },
      {
        subBab: "if-else if-else (Kondisi Bertingkat)",
        content:
          "if-else if-else adalah struktur kontrol keputusan yang digunakan untuk menangani lebih dari dua kemungkinan kondisi. Struktur ini mengevaluasi beberapa kondisi secara bertingkat dari atas ke bawah, dan program akan menjalankan blok kode pertama yang kondisinya bernilai true. Jika tidak ada kondisi yang bernilai true, maka blok else akan dijalankan..\nSintaks if-else if-else",
        images: [],
        additionalTexts: [
          images["c71"],
          "Penjelasan:\n• kondisi1, kondisi2: Ekspresi logika yang menghasilkan nilai true atau false.\n• Blok if atau else if: Dieksekusi jika kondisi terkait bernilai true. \n• Blok else: Dieksekusi jika semua kondisi sebelumnya bernilai false.\nCara Kerja if-else if-else",
          "1. Program mengevaluasi kondisi pertama (if). -> Jika bernilai true, blok kode dalam if dijalankan, dan kondisi berikutnya diabaikan.",
          "2. Jika kondisi pertama false, program mengevaluasi kondisi berikutnya (else if) -> Blok kode dalam else if akan dijalankan jika kondisinya true.",
          "3. Jika semua kondisi sebelumnya bernilai false, blok kode dalam else akan dijalankan.",
          "Contoh Program:",
          images["c72"], // Gambar flowchart pertama
          "Hasil Program: (Jika Memasukkan angka sesuai ketiga kondisi)",
          images["c73"],
          "Hasil Program: (Jika Memasukkan angka diluar ketiga kondisi)",
          images["c74"],
        ],
      },
      {
        subBab: "switch (Kontrol Keputusan Berdasarkan Nilai)",
        content:
          "switch adalah struktur kontrol keputusan yang digunakan untuk memilih satu dari beberapa jalur eksekusi berdasarkan nilai spesifik dari suatu ekspresi. Struktur ini sangat berguna untuk kondisi dengan banyak nilai diskret (nilai tetap, seperti angka atau karakter).\nSintaks switch",
        images: [],
        additionalTexts: [
          images["c75"],
          "Penjelasan:\n1. ekspresi: Nilai yang akan diperiksa, biasanya berupa variabel atau hasil operasi sederhana.\n• Harus memiliki tipe data integer, char, atau enum (bukan float atau string).\n2. case: Menyediakan nilai tetap untuk dibandingkan dengan ekspresi.\n• Jika cocok, blok kode di dalam case tersebut dijalankan.\n3. break: Menghentikan eksekusi dan keluar dari blok switch. \n• Tanpa break, eksekusi akan terus berlanjut ke case berikutnya (fenomena fallthrough).\n4. default: Pilihan alternatif yang dijalankan jika tidak ada case yang cocok.\n• default bersifat opsional.\nCara Kerja switch",
          "1. Program mengevaluasi ekspresi di dalam switch.",
          "2. Program mencocokkan nilai ekspresi dengan nilai di setiap case.",
          "3. Jika ada case yang cocok, blok kode di dalam case tersebut dijalankan.",
          "4. Jika tidak ada case yang cocok, blok kode di dalam default (jika ada) akan dijalankan.",
          "Contoh Program:",
          images["c76"], // Gambar flowchart pertama
          "Hasil Program: (Jika Pilihan Sesuai)",
          images["c77"],
          "Hasil Program: (Jika Tidak Sesuai)",
          images["c78"],
          "Fenomena Fallthrough\nJika tidak ada break, eksekusi akan terus berlanjut ke case berikutnya, meskipun nilai case tidak cocok.",
          images["c79"],
          "Hasil Program: (Karena tidak ada break, setelah case 2 dijalankan, program terus menjalankan case 3.)",
          images["c80"],
        ],
      },
    ],
    videoContent: [
      {
        source: "https://www.youtube.com/embed/yAv3YR6xaJk?autoplay=0",
        title: "Macam-Macam Kontrol Keputusan",
      },
    ],
  },
  {
    id: 7,
    title: "Struktur Kontrol Perulangan",
    intro:
      "Struktur kontrol perulangan adalah salah satu elemen fundamental dalam algoritma dan pemrograman. Struktur ini memungkinkan program untuk mengulang eksekusi blok kode berulang kali selama kondisi tertentu terpenuhi atau hingga batas tertentu tercapai. Dengan struktur perulangan, programmer dapat mengurangi pengulangan manual kode, mengotomasi proses berulang, dan meningkatkan efisiensi program.\nDalam konteks algoritma, perulangan berfungsi untuk menyelesaikan tugas-tugas yang memerlukan langkah-langkah berulang atau pemrosesan data dalam jumlah besar. Hal ini membuat perulangan menjadi komponen penting dalam berbagai aplikasi seperti pengolahan data, simulasi, penghitungan matematis, dan banyak lagi.\nBerikut beberapa jenis struktur kontrol perulangan yang dapat digunakan, yaitu:",
    materiContent: [
      {
        subBab: "Perulangan for",
        content:
          "Perulangan for adalah struktur kontrol yang digunakan ketika jumlah iterasi sudah diketahui sebelumnya. Struktur ini cocok untuk menghitung, mengakses elemen array, atau tugas-tugas yang membutuhkan pengulangan dengan counter.\nSintaks:",
        images: [],
        additionalTexts: [
          images["c81"],
          "Cara Kerja:",
          "1. Inisialisasi: Variabel counter diatur ke nilai awal.",
          "2. Evaluasi Kondisi: Jika kondisi bernilai true, blok kode dijalankan.",
          "3. Perubahan Counter: Counter diperbarui (misalnya i++).",
          "4. Proses berulang hingga kondisi bernilai false.",
          "Contoh Penggunaan:",
          images["c82"], // Gambar flowchart pertama
          "Hasil:",
          images["c83"],
        ],
      },
      {
        subBab: "Perulangan while",
        content:
          "Perulangan while digunakan ketika jumlah iterasi tidak diketahui sebelumnya, tetapi bergantung pada suatu kondisi. Struktur ini berguna untuk tugas-tugas yang memerlukan validasi kondisi sebelum pengulangan.\nSintaks:",
        images: [],
        additionalTexts: [
          images["c84"],
          "Cara Kerja:",
          "1. Program memeriksa kondisi.",
          "2. Jika kondisi bernilai true, blok kode dijalankan.",
          "3. Setelah eksekusi blok, kondisi dievaluasi kembali.",
          "4. Perulangan berhenti ketika kondisi bernilai false.",
          "Contoh Penggunaan:",
          images["c85"], // Gambar flowchart pertama
          "Hasil:",
          images["c86"],
        ],
      },
      {
        subBab: "Perulangan do-while",
        content:
          "Perulangan do-while mirip dengan while, tetapi memiliki perbedaan utama: blok kode dijalankan setidaknya satu kali sebelum kondisi dievaluasi. Ini cocok untuk tugas-tugas seperti validasi input, di mana aksi harus dilakukan minimal sekali.\nSintaks:",
        images: [],
        additionalTexts: [
          images["c87"],
          "Cara Kerja:",
          "1. Blok kode dijalankan terlebih dahulu.",
          "2. Setelah itu, kondisi dievaluasi.",
          "3. Jika kondisi bernilai true, blok kode dijalankan lagi.",
          "Contoh Penggunaan:",
          images["c88"], // Gambar flowchart pertama
          "Hasil:",
          images["c86"],
        ],
      },
    ],
    videoContent: [
      {
        source: "https://www.youtube.com/embed/hVzmJwyMH2Q?autoplay=0",
        title: "Kontrol Perulangan for",
      },
      {
        source: "https://www.youtube.com/embed/ctxtCv7plVc?autoplay=0",
        title: "Kontrol Perulangan while",
      },
      {
        source: "https://www.youtube.com/embed/kH8bkgogfD0?autoplay=0",
        title: "Kontrol Perulangan do-while",
      },
    ],
  },
  {
    id: 8,
    title: "Fungsi",
    intro:
      "Fungsi dalam pemrograman adalah blok kode yang dirancang untuk menyelesaikan tugas tertentu. Fungsi dapat dipanggil di berbagai bagian program sehingga kode tidak perlu ditulis ulang. Konsep fungsi sangat penting untuk membuat program yang terstruktur, modular, dan efisien.\nFungsi digunakan untuk:\n1. Mengurangi pengulangan kode (redundancy)\nFungsi yang sama dapat dipanggil di berbagai tempat tanpa menulis ulang logikanya.\n2. Membuat program terorganisir\nProgram yang panjang dapat dibagi menjadi bagian-bagian kecil.\n3. Meningkatkan efisiensi \nFungsi mempermudah perbaikan kesalahan karena setiap bagian kode dapat diperbaiki secara terpisah.\n\nElemen Dasar dalam Fungsi\na. Nama Fungsi\nNama yang digunakan untuk mengidentifikasi fungsi. Harus unik dan mengikuti aturan penamaan dalam pemrograman.\nb. Parameter\nInput yang diberikan ke fungsi untuk diproses. Parameter adalah variabel yang didefinisikan dalam tanda kurung setelah nama fungsi.\nc. Nilai Kembali (Return Value)\nHasil yang dikembalikan oleh fungsi setelah selesai menjalankan tugas. Fungsi dapat mengembalikan satu nilai dengan perintah return.\nd. Badan Fungsi (Body)\nBagian dari fungsi yang berisi logika atau perintah yang akan dijalankan ketika fungsi dipanggil.\ne. Tipe Data\nSetiap fungsi harus memiliki tipe data yang menentukan jenis nilai yang dikembalikan (seperti int, float, void).\n Berikut Jenis-Jenis Fungsi",
    materiContent: [
      {
        subBab: "Berdasarkan Nilai Kembali",
        content: "",
        images: [],
        additionalTexts: [
          "a. Fungsi dengan Nilai Kembali\nMengembalikan nilai tertentu dengan tipe data tertentu.\nContoh:",
          images["c89"],
          "Contoh Program",
          images["c90"],
          "Hasil:",
          images["c91"],
          "b. Fungsi Tanpa Nilai Kembali (void)\nTidak mengembalikan nilai. Fungsi ini hanya menjalankan aksi tertentu.\nContoh:",
          images["c92"],
          "Contoh Program",
          images["c93"],
          "Hasil:",
          images["c94"],
        ],
      },
      {
        subBab: "Berdasarkan Parameter",
        content: "",
        images: [],
        additionalTexts: [
          "a. Fungsi dengan Parameter\nMemerlukan input untuk diproses.\nContoh:",
          "Contoh Program",
          images["c95"],
          "Hasil:",
          images["c96"],
          "b. Fungsi Tanpa Parameter\nTidak memerlukan input.\nfungsi tanpa nilai kembali dan tanpa parameter tidak memiliki perbedaan jika digabungkan menjadi satu fungsi yang tanpa parameter dan tanpa nilai kembali. Dalam situasi ini, fungsi hanya menjalankan aksi tertentu tanpa menerima masukan (parameter) dan tanpa memberikan hasil (nilai kembali).",
        ],
      },
    ],
    videoContent: [
      {
        source: "https://www.youtube.com/embed/CripazfuzpM?autoplay=0",
        title: "Prosedur dan Fungsi",
      },
      {
        source: "https://www.youtube.com/embed/Z1OrbOL_5wo?autoplay=0",
        title: "Parameter",
      },
    ],
  },
];
