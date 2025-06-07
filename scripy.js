document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#inp');
  const addButton = document.querySelector('#butt');
  const itemsContainer = document.querySelector('.items');

  addButton.addEventListener('click', addNewItem);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addNewItem();
    }
  });

  function showDeletedNotification() {
    const existing = document.querySelector('#deleted');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'deleted';
    notification.innerHTML = `
      <span>❗ O item foi removido da lista</span>
      <span>❌</span>
    `;

    itemsContainer.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  function addNewItem() {
    const text = input.value.trim();
    if (text === '') return;

    const newItem = document.createElement('div');
    newItem.className = 'item';

    newItem.innerHTML = `
      <div class="left">
        <input type="checkbox" />
        <h3>${text}</h3>
      </div>
      <div class="right">
    <img src="img/Frame.png" alt="delete" />
      </div>
    `;

    const deleteButton = newItem.querySelector('.right img');
    deleteButton.addEventListener('click', () => {
      newItem.remove();
      showDeletedNotification();
    });

    itemsContainer.appendChild(newItem);
    input.value = '';
  }
});
