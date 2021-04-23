const addTask = document.querySelector('.add_task__textarea'),
    addButton = document.querySelector('.add_task__button'),
    todo = document.querySelector('.tasks__list'),
    btnImportant = document.querySelector('.btnImportant'),
    searchWindow = document.querySelector('.search_input');
    

    const tabs = document.querySelectorAll('.tab');
    const tabsParent = document.querySelector('.tabs');
    const tabAll = document.querySelector('.tab--all');
    const addTaskSection = document.querySelector('.area__tasks');
    

  function loadTasks() {
    todo.innerHTML = localStorage.getItem('todos');
  }

    loadTasks();

  //обновление local Storage
  function updateLocalStorage() {
    localStorage.setItem('todos', todo.innerHTML);
  }


  //добавление новой задачи
  function displayTasks() {
      if (addTask.value.trim().length !== 0) {
      let taskText = addTask.value.split('\n').join('<br>');

      let displayTask = '';

          displayTask += `
          <li>
              <button class="btnImportant">MARK IMPORTANT</button>
              <img class="delete_btn" src="./images/Delete.svg" onclick= "deleteTask(this)">
              <span class="text-task">${taskText}</span>
          </li>
          `;
          todo.innerHTML += displayTask;
          updateLocalStorage();
    }
    addTask.value = '';
  }

  //добавление задач по "ентер"
  function textAreaEnterClick(e) {
    if (e.keyCode === 13 && !e.shiftKey) { // для переноса зажать shift + enter
    displayTasks();
    e.preventDefault(); // чтобы не создавать перенос строки
    }
  }

  //добавить звездочку при клике на кнопку "MARK IMPORTANT"
  function markImportant(e) {

    btn = e.target.closest('.btnImportant');
    
    if (btn) { // если произошел клик на кнопку
    let img1 = btn.parentNode.querySelector('.star');
    
    if (img1 === null) {
      img1 = document.createElement('img');
      img1.classList.add('star');
      img1.src = './images/star_border.svg';
      btn.parentNode.prepend(img1);
      btn.parentNode.querySelector('span').style.fontWeight = 'bold';
    }
    
    if (btn.classList.contains('notImportant')) {
      btn.classList.remove('notImportant');
      btn.innerText = "MARK IMPORTANT";
      img1.style.display = 'none';
      btn.parentNode.querySelector('span').style.fontWeight = 'normal';
      img1.remove();
    
    } else {
      btn.classList.add('notImportant');
      btn.innerText = "NOT IMPORTANT";
      img1.style.display = 'inline';
      }
    }
    updateLocalStorage();
  }

  document.querySelector('.tasks__list').addEventListener('click', (e) => markImportant(e));
    
  
  //удаление элемента по нажатию на мусорку 
  function deleteTask(elem) {
      elem.parentNode.remove();
      updateLocalStorage();
  }

  //зачеркивание текста по клику 
  function crossText(e) {
  if (e.target.classList.contains('text-task')){
    e.target.classList.toggle("active");
    }
  }

  //функция поиска   
  function searchTasksFromInput(searchWindow,parentName) {  
      for (let x = 0; x <= parentName.children.length - 1; x++) {
          if (parentName.children[x].innerHTML.toLowerCase().includes(searchWindow.value.toLowerCase())) {
              parentName.children[x].style.display = 'block';
          }
          else {
             parentName.children[x].style.display = 'none';         
          }
      }
  }

  //функция табов
  function tabClick(e) {
      const tab = e.target.closest('.tab');
      if (tab) {
        tabs.forEach((el) => {
          el.classList.remove('tab--current');
        });
        tab.classList.add('tab--current');
        tab.parentNode.childNodes.forEach((tab) => {
          tab.addEventListener('click', () => {
            addTaskSection.style.visibility = 'visible';
            addTaskSection.style.height = 'unset';
          });
        });
      if (tab.classList.contains('tab--all')) {
          for (let x = 0; x <= todo.children.length - 1; x++) {
            todo.children[x].style.display = 'block';
          }
          for (let y = 0; y <= todo.children.length - 1; y++) { 
            if (todo.children[y].querySelector('button').classList.contains('btnImportant'))
              todo.children[y].querySelector('button').removeAttribute('style');
          }
        } 
      }
      if (tab.classList.contains('tab--active')) { 
        for (let y = 0; y <= todo.children.length - 1; y++) { 
            todo.children[y].style.display = 'block';
        }             
        for (let y = 0; y <= todo.children.length - 1; y++) { 
          if (todo.children[y].querySelector('button').classList.contains('btnImportant'))
            todo.children[y].querySelector('button').removeAttribute('style');
        }
        for (let x = 0; x <= todo.children.length - 1; x++) {
         if (todo.children[x].querySelector('span').classList.contains('active')) {
            todo.children[x].style.display = 'none';
      }
    }
  }
      if (tab.classList.contains('tab--done')) {
        addTaskSection.style.visibility = 'hidden';
        addTaskSection.style.height = '37px';
        for (let y = 0; y <= todo.children.length - 1; y++) { 
          if (todo.children[y].querySelector('button').classList.contains('btnImportant'))
              todo.children[y].querySelector('button').style.display = 'none';
        }
        for (let y = 0; y <= todo.children.length - 1; y++) { 
          todo.children[y].style.display = 'block';
        }       
      for (let x = 0; x <= todo.children.length - 1; x++) {
        if (todo.children[x].querySelector('span').classList.contains('active') === false)
            todo.children[x].style.display = 'none';
        }
    }         
  }
   
  //вызов функции ТАБов
  tabsParent.addEventListener('click', (e) => tabClick(e));

  // вызов функции поиска
  searchWindow.addEventListener('input', () => searchTasksFromInput(searchWindow, todo));

  //вызов функции добавления задач по "ентер"
  addTask.addEventListener('keydown', (e) => textAreaEnterClick(e));