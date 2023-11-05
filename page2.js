document.addEventListener('DOMContentLoaded', function() {
    var groupNameInput = document.getElementById('groupNameInput');

    groupNameInput.addEventListener('keyup', function() {
        var inputValue = groupNameInput.value;
        if (/^[A-Z]/.test(inputValue)) {
            groupNameInput.classList.remove('wrongGroupNameInput');
            groupNameInput.classList.add('correctGroupNameInput');
        } else {
            groupNameInput.classList.remove('correctGroupNameInput');
            groupNameInput.classList.add('wrongGroupNameInput');
        }
    });

    var groupPasswordInput = document.getElementById('groupPasswordInput');

    groupPasswordInput.addEventListener('keyup', function() {
        var inputValue =  groupPasswordInput.value;
        // if (inputValue.length >= 8 && /\d/.test(inputValue)) {
        //     groupPasswordInput.setCustomValidity('');
        // } else {
        //     groupPasswordInput.setCustomValidity('Password must be at least 8 characters long and contain a digit.');
        // }
        
        var passwordContainer = document.getElementById('groupPasswordInputContainer');
        // var errors = passwordContainer.getElementsByClassName('error');

        while (passwordContainer.children.length > 1) {
            passwordContainer.removeChild(passwordContainer.children[1]);
        }
        
        if (inputValue.length < 8) {
            var lengthError = document.createElement('p');
            lengthError.classList.add('error1');
            lengthError.textContent = 'password too short';
            passwordContainer.appendChild(lengthError);
        }

        if (!/\d/.test(inputValue)) {
            var digitError = document.createElement('p');
            digitError.classList.add('error2');
            digitError.textContent = 'password has no digit';
            passwordContainer.appendChild(digitError);
        }




    });






});
