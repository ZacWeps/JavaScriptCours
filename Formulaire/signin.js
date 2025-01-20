document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const errorList = document.getElementById('error-list');
    const errorDiv = document.querySelector('.message-error');
    const successDiv = document.querySelector('.message-success');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const errors = [];
  
        if (pseudo.value.trim() === '') {
            errors.push('Le pseudo est requis.');
        } else if (pseudo.value.length < 3) {
            errors.push('Le pseudo doit contenir au moins 3 caractères.');
        }
  
        if (email.value.trim() === '') {
            errors.push('L\'email est requis.');
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            errors.push('L\'email n\'est pas valide.');
        }
  
        if (password.value.trim() === '') {
            errors.push('Le mot de passe est requis.');
        } else if (password.value.length < 6) {
            errors.push('Le mot de passe doit contenir au moins 6 caractères.');
        }
  
        if (password2.value.trim() === '') {
            errors.push('Veuillez confirmer votre mot de passe.');
        } else if (password.value !== password2.value) {
            errors.push('Les mots de passe ne correspondent pas.');
        }
  
        if (errors.length > 0) {
            errorList.innerHTML = '';
            errors.forEach((error) => {
                const li = document.createElement('li');
                li.textContent = error;
                errorList.appendChild(li);
            });
            errorDiv.style.display = 'block';
            successDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'none';
            successDiv.style.display = 'block';
        }
    });
  });
  