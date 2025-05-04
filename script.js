const input = document.getElementById('todo-input');
const button = document.getElementById('add-button');
const list = document.getElementById('todo-list');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
  }
});
