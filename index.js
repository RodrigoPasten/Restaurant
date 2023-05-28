function mostrarFormulario(formId) {
    var formCont = document.getElementsByClassName('form-cont');
    for (var i = 0; i < formCont.length; i++) {
        formCont[i].classList.remove('active');
    }

    var form = document.getElementById(formId);
    form.classList.add('active');

}







