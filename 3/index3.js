//Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

const resizableBlock = document.querySelector('.block');

resizableBlock.addEventListener('mousedown', function (e) {
  if (e.target === resizableBlock) {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = parseInt(getComputedStyle(resizableBlock).width);
    const startHeight = parseInt(getComputedStyle(resizableBlock).height);

    function resize(e) {
      const width = startWidth + e.clientX - startX;
      const height = startHeight + e.clientY - startY;
      resizableBlock.style.width = `${width}px`;
      resizableBlock.style.height = `${height}px`;
    }

    function stopResize() {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  }
});