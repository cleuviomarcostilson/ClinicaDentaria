const SERVICES = [
  { nome: 'Consulta Odontológica', descricao: 'Avaliação completa da saúde oral e diagnóstico preventivo.', preco: 5000 },
  { nome: 'Limpeza Dentária', descricao: 'Remoção de tártaro e placa com higiene profissional.', preco: 3000 },
  { nome: 'Tratamento de Cáries', descricao: 'Restauração e preenchimento de cáries com materiais de qualidade.', preco: 4500 },
  { nome: 'Aparelhos Ortodônticos', descricao: 'Alinhamento dentário com tecnologia moderna e confortável.', preco: 8000 }
];

const PRODUCTS = [
  { nome: 'Escova Elétrica Sónica', descricao: 'Escova de dentes elétrica com tecnologia ultrassónica de alta frequência.', preco: 15000, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' },
  { nome: 'Fio Dental Premium', descricao: 'Fio dental antiderrapante com sabor menta refrescante.', preco: 2500, imagem_url: 'https://images.unsplash.com/photo-1631217228268-e5b11bb34d16?w=400' },
  { nome: 'Colutório Antibacteriano', descricao: 'Enxaguante bucal com propriedades antibacterianas e antifúngicas.', preco: 3500, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' },
  { nome: 'Kit Clareamento Profissional', descricao: 'Sistema de clareamento dentário com gel de qualidade profissional.', preco: 22000, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' }
];

function loadHomeData() {
  const servicosEl = document.getElementById('servicosDestaque');
  const produtosEl = document.getElementById('produtosDestaque');
  if (!servicosEl || !produtosEl) return;

  const servicos = SERVICES.slice(0, 3);
  const produtos = PRODUCTS.slice(0, 4);

  servicosEl.innerHTML = servicos.map((s) => `
    <article class="servico-card">
      <div class="servico-card-icon"><i class="fas fa-stethoscope"></i></div>
      <h3>${s.nome}</h3>
      <p>${s.descricao}</p>
      <div class="servico-preco">${formatAOA(s.preco)}</div>
    </article>
  `).join('');

  produtosEl.innerHTML = produtos.map((p) => `
    <article class="produto-card">
      <div class="produto-img">
        ${p.imagem_url ? `<img src="${p.imagem_url}" alt="${p.nome}"/>` : `<div class="produto-img-placeholder"><i class="fas fa-tooth"></i></div>`}
      </div>
      <div class="produto-body">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <div class="produto-preco">${formatAOA(p.preco)}</div>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', loadHomeData);