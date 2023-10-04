document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const umur = document.getElementById("umur").value;
        const alamat = document.getElementById("alamat").value;

        // Simpan atau kirim data pendaftaran ke server sesuai kebutuhan.

        alert(`Terima kasih, ${nama}! Pendaftaran Anda berhasil.`);
        registrationForm.reset();
    });
});
