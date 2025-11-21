document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('todo-form');
  const taskInput = document.getElementById('task-input');
  const categorySelect = document.getElementById('category-select');
  const taskList = document.getElementById('task-list');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    const categoryValue = categorySelect.value;
    if (taskValue && categoryValue) {
      addTask(taskValue, categoryValue);
      form.reset();
    }
  });

  function addTask(task, category) {
    // Create task item elements
    const item = document.createElement('div');
    item.className = 'task-item';
    const info = document.createElement('div');
    info.className = 'task-info';
    const taskName = document.createElement('span');
    taskName.textContent = task;
    const cat = document.createElement('span');
    cat.className = 'task-category';
    cat.textContent = category;
    info.appendChild(taskName);
    info.appendChild(cat);

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', function () {
      item.remove();
    });
    item.appendChild(info);
    item.appendChild(delBtn);
    taskList.appendChild(item);
  }
});
