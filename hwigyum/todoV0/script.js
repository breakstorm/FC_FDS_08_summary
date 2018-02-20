const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

document.addEventListener('DOMContentLoaded', (e)=>{
  // todos.content 내용을 화면에 rendering
  // INPUT에 엔터 이벤트 할당
  // UL에 클릭 이벤트 할당

  const inputTarget = document.querySelector('#input-todo');
  const ulTarget = document.querySelector('#todo-list');

  if(todos.length){
    todos.forEach((v, i, a)=>{ insertList(v.content); });
  }

  inputTarget.addEventListener('keyup', function(v) {
    if(v.keyCode === 13 && v.target.value ) {
      insertList(v.target.value);
      v.target.value = '';
    }
  });

  ulTarget.addEventListener("click", function(v) {
    if(v.target.nodeName === 'LI') deleteList(v);    
  });
})

function insertList(item) {
  // li요소 추가
  
  const ulTarget = document.querySelector('#todo-list');
  const template = '<li>' + item + '</li>';
  ulTarget.insertAdjacentHTML('beforeend', template);
}

function deleteList(v) {
  // 선택된 요소가 무엇인지 찾아서 선택. 
  // 부모요소 선택.
  // 요소 제거.

  const parent = v.target.parentElement;
  parent.removeChild(v.target);
}