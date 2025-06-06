const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((books) => {
      // 清除loading
      const loadingImg = document.getElementById('loading');
      if (loadingImg) loadingImg.remove();
      // 渲染每本书
      books.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.style.marginBottom = '2.5em';
        bookDiv.style.textAlign = 'center';
        // 标题
        const title = document.createElement('h3');
        title.textContent = book.name;
        // 作者
        const author = document.createElement('div');
        author.textContent = `by ${book.authors[0]}`;
        // 出版年份
        const year = document.createElement('div');
        year.textContent = new Date(book.released).getFullYear();
        // 页数
        const pages = document.createElement('div');
        pages.textContent = `${book.numberOfPages} pages`;
        // 组装
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(year);
        bookDiv.appendChild(pages);
        app.appendChild(bookDiv);
      });
    });
};

fetchData(url);
