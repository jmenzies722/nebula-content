function updateID() {
    var name = document.getElementById('name').value;
    var id = document.getElementById('id').value;
    var address = document.getElementById('address').value;
    var funfact = document.getElementById('funfact').value;

    document.getElementById('cardname').innerText = "Name: " + name;
    document.getElementById('cardid').innerText = "ID: " + id;
    document.getElementById('cardaddress').innerText = "Address: " + address;
    document.getElementById('cardfunfact').innerText = "Fun Fact: " + funfact;
}
