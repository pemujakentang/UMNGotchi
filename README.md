# [WemenGotchi](https://github.com/pemujakentang/UMNGotchi)
## Kelas B/Kelompok 3

### Dev Team:
- Bonifasius Martin Wibawa/[Martin/Bonbon](https://github.com/pemujakentang) (00000068324)
    - Lead Developer/Coordinator
    - Algorithm Developer (Minigame, Activity/Status Functions, Data Processing, General Functions)
    - UI Designer (Wireframe/Layout, General UI Design, Status Bar Design, Draggable Character)
- Samuel Maximus Lamere/[Sam](https://github.com/SamuelMaxs)  (00000068572)
    - Visual Developer (Character Design, Background Design)
    - Algorithm Developer (Clock System, Background Change)
- Friedrich Litani Santoso/[Fritz](https://github.com/Friedrich19) (00000068855)
    - Visual Developer (Custom Button Design & CSS)
    - Algorithm Developer (Minigame Character Movement, Minigame Button Functionality)
- Gerard Stefan Gani/[Stefan](https://github.com/thestrixy) (00000068198)
    - Audio Design (Background Music, SFX)
    - Visual Developer (Character Design, UI Design)

### Aturan
1. Ini endless game. Main sampe mati.
2. Sebelum bermain harap memilih avatar dan memberikan nama pet, kemudian klik Main.
3. Ada 4 tombol dan 4 status bar (Makan, Tidur, Main, Obat) serta 1 status bar Level.
4. Untuk meningkatkan status bar, hanya perlu menekan tombol sekali, kemudian hanya akan berhenti apabila pemain mengklik lagi atau status bar penuh.
5. Setiap tombol yang ditekan/aktivitas yang dilakukan akan memiliki pengaruh yang berbeda terhadap status lainnya.
6. Permainan dapat dipause dengan mengklik tombol di kanan layar.
7. Permainan akan berakhir apabila status bar Health (merah) atau Main (kuning) habis.
    - Apabila status bar Makan (hijau) atau status bar Tidur (biru) habis, pet tidak akan mati hingga status bar Health habis juga
8. Pemain dapat keluar ke halaman depan dengan mengklik tombol di kiri layar.
9. Ketika pemain mengklik tombol Main, akan masuk ke minigame "Sentuh Om Fritz", dengan aturan sebagai berikut:
    - Pemain menggerakkan karakter dengan Arrow Keys keyboard atau dengan tombol pada layar.
    - Karakter harus menyentuh Om Fritz jika ingin mendapat +2 skor.
    - Jika gagal menyentuh Om Fritz maka akan mendapat -1 skor.
    - Akumulasi skor akan berpengaruh terhadap status bar Level dan status bar Main, serta mengurangi Makan dan Tidur.
    - Untuk keluar dari minigame, pencet Main lagi.
    - Kadang Om Fritz ga mau disentuh, coba disentuh 2 kali.
    - Terkadang permainan akan dimulai dengan skor negatif acak, hal ini untuk mempersulit pemain memenuhi status bar main
    - Tidak akan bisa pause saat dalam minigame
10. Ada 3 evolusi peliharaan: Bayi (1-5), Remaja (6-10), dan Dewasa (11 dst.).
11. Level up akan terjadi apabila bar level up penuh, excess xp tidak akan diakumulasi ke level berikutnya.
12. Simulasi waktu: 1 detik realtime = 1 menit ingame

### Catatan
- Tugas UTS PTI Lecture TA 2022/2023 (Kelas B, Dosen: Fenina Adline Twince Tobing).
- Background music seharusnya berjalan otomatis, namun hal itu tergantung browser. Beberapa browser tidak bisa menjalankan bgm secara otomatis.
- Ada tombol about untuk menampilkan data singkat tim dan tombol bantuan untuk bantuan singkat.
- Om Fritz adalah maskot kami
- Github men-detect 88% bahasa yang digunakan CSS karena ada nes.css, file css custom local dan bukan diimport untuk mengantisipasi tidak adanya internet. Sayangnya font tidak bisa local dan harus tetap import dari googlefonts

### Video Demonstrasi
[![Video Demo](http://img.youtube.com/vi/ugV3NpNUeyk/0.jpg)](https://www.youtube.com/watch?v=ugV3NpNUeyk)


### [Evaluasi](https://www.youtube.com/watch?v=cWrSjCZ5AeE)
- Aspek yang sudah tercapai
    - Desain responsif, menarik, lucu, dan unik (15)
    - Komponen tampilan menarik (avatar, gambar, icon, tombol, dsb.) (15)
    - Fitur pemilihan avatar di awal permainan (7)
    - Fitur simulasi jam (7)
    - Fitur salam (7)
    - Fitur status dinamis berdasarkan aktivitas karakter (idle maupun aktivitas tertentu) (7 + 7)
    - Fitur background sesuai jam permainan (8)
    - Fitur bermain/minigame (12)

- Aspek tambahan (+10?)
    - Karakter bisa bergerak bebas dalam div (horizontal), dan pemain bisa drag karakter
    - Fitur pause gameplay + Modal Pause
    - Audio dinamis
    - Exp/Level system dan evolution
    - Modal About dan Help
    - End/Game Over Screen berupa Modal yang diseuaikan kondisi kematian

- Ekspektasi Nilai: 95