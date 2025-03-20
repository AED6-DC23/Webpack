import './styles.css';

const app = document.getElementById('app');

async function fetchPosts() {
  try {
    const response = await fetch('http://localhost:3001/posts');
    const posts = await response.json();
    
    const postsList = posts.map(post => `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </div>
    `).join('');
    
    app.innerHTML = `
      <h1>Посты из JSON-serverа</h1>
      <div class="posts-container">${postsList}</div>
    `;
  } catch (error) {
    app.innerHTML = `<p>Ошибка загрузки данных: ${error.message}</p>`;
  }
}

fetchPosts();

// Для Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}