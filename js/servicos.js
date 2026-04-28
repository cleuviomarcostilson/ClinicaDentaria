const SERVICES = [
  { nome: 'Consulta Odontológica', descricao: 'Avaliação completa da saúde oral e diagnóstico preventivo.', preco: 5000 },
  { nome: 'Limpeza Dentária', descricao: 'Remoção de tártaro e placa com higiene profissional.', preco: 3000 },
  { nome: 'Tratamento de Cáries', descricao: 'Restauração e preenchimento de cáries com materiais de qualidade.', preco: 4500 },
  { nome: 'Aparelhos Ortodônticos', descricao: 'Alinhamento dentário com tecnologia moderna e confortável.', preco: 8000 }
];

function loadServicosPage() {
  const listEl = document.getElementById('servicosLista');
  if (!listEl) return;

  listEl.innerHTML = SERVICES.map((s) => `
    <article class="servico-item">
      <div class="top">
        <h3>${s.nome}</h3>
        <span class="preco">${formatAOA(s.preco)}</span>
      </div>
      <p>${s.descricao}</p>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', loadServicosPage);