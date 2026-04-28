const PRODUCTS = [
  { nome: 'Escova Elétrica Sónica', descricao: 'Escova de dentes elétrica com tecnologia ultrassónica de alta frequência.', preco: 15000, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' },
  { nome: 'Fio Dental Premium', descricao: 'Fio dental antiderrapante com sabor menta refrescante.', preco: 2500, imagem_url: 'https://images.unsplash.com/photo-1631217228268-e5b11bb34d16?w=400' },
  { nome: 'Colutório Antibacteriano', descricao: 'Enxaguante bucal com propriedades antibacterianas e antifúngicas.', preco: 3500, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' },
  { nome: 'Kit Clareamento Profissional', descricao: 'Sistema de clareamento dentário com gel de qualidade profissional.', preco: 22000, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' },
  { nome: 'Retentores Invisalign', descricao: 'Retentores transparentes para manutenção do alinhamento dentário.', preco: 18000, imagem_url: 'https://images.unsplash.com/photo-1587234372519-c21a91ce14ea?w=400' }
];

function renderProdutos(items) {
  const listEl = document.getElementById('produtosLista');
  const noResults = document.getElementById('noResults');
  if (!listEl) return;

  if (!items.length) {
    listEl.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  listEl.innerHTML = items.map((p) => `
    <article class="produto-item">
      <div class="img">
        ${p.imagem_url ? `<img src="${p.imagem_url}" alt="${p.nome}"/>` : '<div class="produto-placeholder"><i class="fas fa-tooth"></i></div>'}
      </div>
      <div class="body">
        <h3>${p.nome}</h3>
        <span class="preco">${formatAOA(p.preco)}</span>
      </div>
    </article>
  `).join('');
}

function loadProdutosPage() {
  renderProdutos(PRODUCTS);
}

function bindSearch() {
  const input = document.getElementById('searchProduto');
  if (!input) return;
  input.addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    const filtered = PRODUCTS.filter((p) =>
      [p.nome, p.descricao].join(' ').toLowerCase().includes(term)
    );
    renderProdutos(filtered);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadProdutosPage();
  bindSearch();
});