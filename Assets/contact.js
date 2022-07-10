
function sendMail() {
    let myName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let emailReceiver = "mas.bay1904@gmail.com";

    if (myName && email && phone && subject && message) {
        let a = document.createElement('a')
        a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=Hi, my name is ${myName}, this is my phone number ${phone}, ${message}`
        a.setAttribute('target',"_blank")
        a.click()
        alert('Anda akan diarahkan ke Gmail untuk mengkonfirmasi pengiriman pesan anda, terimakasih sudah mengirim pesan :D')
        document.getElementById('myForm').reset();
    } else {
        alert('Please input your FORM !')
        return
    }
    // console.log(myName, email, phone, subject, message);
}