    //Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
    
    const table = document.querySelector('.table');
    const tableHead = document.querySelector('.table-head');
    const tableBody = document.querySelector('.table-body');
  
  
    const data = [
      { name: 'Аріна', age: 13, height: 152 },
      { name: 'Олена', age: 42, height: 164 },
      { name: 'Артем', age: 43, salary: 175 },
     
    ];
  
  
    const tableHeaderRow = document.createElement('tr');
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      th.addEventListener('click', () => sortTable(key));
      tableHeaderRow.appendChild(th);
    });
    tableHead.appendChild(tableHeaderRow);
  
   
    data.forEach(item => {
      const tr = document.createElement('tr');
      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  
    function sortTable(column) {
      const columnIndex = Object.keys(data[0]).indexOf(column);
      const isNumericColumn = typeof data[0][column] === 'number';
  
      data.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
  
        if (isNumericColumn) {
          return valueA - valueB;
        } else {
          return valueA.localeCompare(valueB);
        }
      });
  
    
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
  
     
      data.forEach(item => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });
    };