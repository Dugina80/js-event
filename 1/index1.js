//Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

const textDiv = document.querySelector('textDiv');
const textArea = document.querySelector('textArea');


function toggleEditMode() {
    if (textDiv.style.display === 'none') {
       
        textDiv.style.display = 'block';
        textDiv.innerHTML = textArea.value;
        textArea.style.display = 'none';
    } else {
     
        textDiv.style.display = 'none';
        textArea.style.display = 'block';
        textArea.value = textDiv.innerHTML;
        textArea.focus();
    }
}

function handleKeyDown(event) {
  
    if (event.ctrlKey && event.key === 'e') {
        event.preventDefault(); 
        toggleEditMode();
    }

    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();

       
        toggleEditMode();
    }
}

document.addEventListener('keydown', handleKeyDown);