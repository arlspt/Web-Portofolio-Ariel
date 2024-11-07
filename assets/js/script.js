document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animation (Menampilkan bagian halaman dengan animasi saat digulir.)
    // Mengambil semua elemen <section> untuk dipantau
    const sections = document.querySelectorAll("section");

    // Fungsi untuk memantau elemen dengan Intersection Observer
    const observer = new IntersectionObserver((entries) => { // API ini untuk melihat apakah elemen tersebut terlihat di viewport atau tidak.
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Menambahkan kelas 'visible' ketika elemen terlihat
                entry.target.classList.add("visible");
            } else {
                // Menghapus kelas 'visible' ketika elemen keluar dari viewport
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 }); // Mengatur agar animasi dimulai ketika 10% elemen terlihat

    // Memulai observer untuk setiap section
    sections.forEach(section => {
        observer.observe(section);
    });
    /* Cara Mengakses Fitur: Fitur ini berjalan otomatis setiap kali halaman di-scroll. */


    // 2. Dynamic intro teks (Mengganti teks intro secara berkala.)
    const introText = document.querySelector(".intro p");
    const phrases = ["Frontend Developer", "UI/UX Designer", "Mobile Developer"];
    let phraseIndex = 0;

    function changeIntroText() {
        introText.textContent = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setInterval(changeIntroText, 2300);
    /* Cara Mengakses Fitur: Fitur ini berjalan otomatis dan teks akan berganti setiap 2.3 detik. */

    
    // 3. Active Navbar Link (Menyoroti tautan navbar sesuai posisi scroll pengguna.)
    const navLinks = document.querySelectorAll('.nav-list a'); // Mengammbil semua tautan navbar
    function setActiveLink() { // Mengecek setiap tautan navbar untuk mengetahui apakah pengguna berada di dalam bagian yang sesuai.
        let fromTop = window.scrollY + 50; // Tambah offset agar transisi lebih halus

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href')); // Mengambil elemen section berdasarkan tautan href untuk mengetahui posisi target.
            // Cek jika pengguna berada dalam posisi scroll dari setiap bagian
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    // Panggil fungsi setiap kali ada perubahan scroll
    window.addEventListener('scroll', setActiveLink);
    /* Cara Mengakses Fitur: Fitur ini berjalan otomatis setiap kali halaman di-scroll, dan akan menyoroti tautan navbar yang sesuai. */
});
