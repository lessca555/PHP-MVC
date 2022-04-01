$(function(){

    $('.tombolTambahData').on('click', function(){
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.ubahData').html('Tambah Data');
    });

    $('.tampilModalUbah').on('click', function(){
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.ubahData').html('Edit Data');
        $('.modal-body form').attr('action', 'http://localhost/bebas/phpmvc/public/mahasiswa/ubah');

        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/bebas/phpmvc/public/mahasiswa/getubah',
            //kiri id yang dikirimkan, kanan isi data.
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data){

                $('#id').val(data.id);
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
            }
        });
    })
});