$(document).ready(function() {
  $('.send').click(function(e) {
    e.preventDefault();
    
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var product = $('#product').val();
    var description = $('#description').val();
    
    if (name === '' || email === '' || phone === '') {
      $('#notification').html('<div class="alert alert-danger" role="alert">Lengkapi data terlebih dahulu.</div>');
      return;
    }
    
    if (!email.endsWith('@gmail.com')) {
      $('#notification').html('<div class="alert alert-danger" role="alert">Email tidak valid. Harap gunakan email dengan akhiran "@gmail.com".</div>');
      return;
    }
   
    if (!/^\d+$/.test(phone)) {
      $('#notification').html('<div class="alert alert-danger" role="alert">Nomor tidak valid. Harap isi nomor telepon dengan angka saja.</div>');
      return;
    }
   
    if (product === '') {
      $('#notification').html('<div class="alert alert-warning" role="alert">Pilih produk terlebih dahulu.</div>');
      return;
    }
    
    var note = description !== '' ? description : 'Tidak ada catatan';
    
    if (product === 'Request') {
      if (description === '') {
        $('#notification').html('<div class="alert alert-warning" role="alert">Isi catatan ini untuk request order!</div>');
        return;
      }
      note = description;
    }
    
    var now = new Date();
var timezone = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' - ' + now.getHours() + ':' + now.getMinutes();

 
    var message = "𝗡𝗘𝗪 𝗢𝗥𝗗𝗘𝗥 | " + timezone + "%0A%0A" + "𝗡𝗔𝗠𝗔 : " + name + "%0A" +
                  "𝗘𝗠𝗔𝗜𝗟 : " + email + "%0A" +
                  "𝗡𝗢 𝗪𝗔 : " + phone + "%0A" +
                  "𝗣𝗥𝗢𝗗𝗨𝗞 : " + product + "%0A" +
                  "𝗖𝗔𝗧𝗔𝗧𝗔𝗡: " + note + "%0A%0A" +
                  "*© Fayyy's | 2024*";
    
    var whatsapp_url = "https://api.whatsapp.com/send?phone=6281295169487&text=" + message;
    window.open(whatsapp_url, '_blank');
  });
});
