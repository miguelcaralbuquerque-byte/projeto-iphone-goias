// Pequeno script para melhorar a experiência: mostramos um alerta amigável ao enviar o formulário
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = this.nome.value || 'cliente';
    alert('Obrigado, ' + nome + '! Recebemos seu pedido. Iremos entrar em contato via WhatsApp.');
    // Aqui você pode adicionar envio via AJAX para seu backend
  });
}
