import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        let error = false;
        
        if(!validator.isEmail(emailInput.value)) {
            document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.'; 
            error = true;
        }
        if(passwordInput.value.length < 4 || passwordInput > 18) {
            document.getElementById('passwordError').textContent = 'Senha precisa ter entre 4 e 18 caracteres.';
            error = true;
        }

        if(!error) el.submit();
    }
}
