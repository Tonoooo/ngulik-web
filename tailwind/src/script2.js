const menuMode = document.getElementById('hs-dropdown-dark-mode');
const dropdownMode = document.getElementById('selectThemeDropdown');

menuMode.addEventListener('click', () => {
    dropdownMode.classList.toggle('hidden'); // Toggle kelas 'hidden'
});

// Menangani klik di luar dropdown untuk menutupnya
window.addEventListener('click', (event) => {
    if (!menuMode.contains(event.target) && !dropdownMode.contains(event.target)) {
        dropdownMode.classList.add('hidden'); // Sembunyikan dropdown jika klik di luar
    }
});

// ==============================================================



// Logika untuk mengatur tema berdasarkan pilihan
const buttons = dropdownMode.querySelectorAll('button[data-hs-theme-click-value]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-hs-theme-click-value');
        //console.log(`Selected theme: ${theme}`); // Debugging

        // Logika untuk mengatur tema sesuai pilihan
        if (theme === 'dark') {
            document.body.classList.add('dark'); // Menambahkan kelas 'dark'
            localStorage.setItem('hs_theme', 'dark'); // Menyimpan tema ke localStorage
            
        } else if (theme === 'default') {
            document.body.classList.remove('dark'); // Menghapus kelas 'dark'
            localStorage.setItem('hs_theme', 'light'); // Menyimpan tema ke localStorage
        } else if (theme === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            if (mediaQuery.matches) {
                document.body.classList.add('dark'); // Menambahkan kelas 'dark' jika sistem dalam mode gelap
            } else {
                document.body.classList.remove('dark'); // Menghapus kelas 'dark' jika sistem dalam mode terang
            }
            localStorage.setItem('hs_theme', 'auto'); // Menyimpan tema ke localStorage
        }
        
        dropdownMode.classList.add('hidden'); // Sembunyikan dropdown setelah memilih
    });
});

// Cek tema saat halaman dimuat
const html = document.querySelector('html');
const currentTheme = localStorage.getItem('hs_theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
} else if (currentTheme === 'light') {
    document.body.classList.remove('dark');
} else if (currentTheme === 'auto') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.matches) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}