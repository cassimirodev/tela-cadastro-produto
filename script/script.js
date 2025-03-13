document.addEventListener('DOMContentLoaded', function() {
    const inputFile = document.querySelector('#picture-input');
    const pictureImage = document.querySelector('.picture-image');
    const formCadastro = document.querySelector('#formCadastro');

    const pictureImageText = 'Escolha uma imagem';
    pictureImage.innerHTML = pictureImageText; 

    inputFile.addEventListener('change', function(e) {  
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;
                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('picture-image');
                pictureImage.innerHTML = '';
                pictureImage.appendChild(img);
            });
            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageText;
        }
    });

    const buttonAdicionar = document.querySelector('#register-button');
    const buttonResetar = document.querySelector('#reset-button');

    buttonAdicionar.addEventListener('click', functionAdicionar);
    buttonResetar.addEventListener('click', functionResetar);

    function functionResetar() {
        const textInputs = document.querySelectorAll('.text-inputs input');
        textInputs.forEach(function(input) {
            input.value = '';
        });
        inputFile.value = '';
        pictureImage.innerHTML = pictureImageText;
    }

    function functionAdicionar() {
        if (validarInput()) {
            alert('Produto registrado com sucesso!');
            functionResetar(); 
        } else {
            alert('Corrija os campos inválidos.');
        }
    }

    function validarInput() {
        const textInputs = document.querySelectorAll('.text-inputs input');
        let isValid = true;

        textInputs.forEach(function(input) {
            const pattern = input.getAttribute('pattern');
            const regex = new RegExp(pattern);
            if (pattern && !regex.test(input.value)) {
                isValid = false;
                input.style.borderColor = 'red'; 
                alert(`O campo ${input.name} está inválido.`);
            } else {
                input.style.borderColor = ''; 
            }
        });

        return isValid;
    }
});
