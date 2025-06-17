 function verificarLogin() {
      const usuario = document.getElementById('username').value;
      const senha = document.getElementById('senha').value;
      const mensagem = document.getElementById('mensagem');

      // Simulação de verificação simples (exemplo: user: admin, senha: 1234)
      if (usuario === 'admin' && senha === '1234') {
        mensagem.textContent = 'Login bem-sucedido!';
        mensagem.style.color = 'green';
      } else {
        mensagem.textContent = 'Usuário ou senha incorretos.';
        mensagem.style.color = 'red';
      }
    }