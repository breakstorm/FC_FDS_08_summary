let todos = [
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
    todos.forEach((v, i, a)=>{ viewInsertList(v.content); });
  }

  inputTarget.addEventListener('keyup', function(v) {
    if(v.keyCode === 13 && v.target.value ) {
      modelInsertList(v.target.value);
      // viewInsertList(v.target.value);
      v.target.value = '';
    }
  });

  ulTarget.addEventListener("click", function(v) {
    if(v.target.nodeName === 'LI'){
      modelDeleteList(v.target.innerText);
      // viewDeleteList(v);
    }     
  });
})


function viewInsertList(item) {
  // li요소 추가
  
  const ulTarget = document.querySelector('#todo-list');
  const template = '<li>' + item + '</li>';
  ulTarget.insertAdjacentHTML('beforeend', template);
}

function viewDeleteList(v) {
  // 선택된 요소가 무엇인지 찾아서 선택. 
  // 부모요소 선택.
  // 요소 제거.

  const parent = v.target.parentElement;
  parent.removeChild(v.target);
}

function viewAllDeleteList() {
  // debugger;
  let ulTarget = document.querySelector('#todo-list');
  let childCount = ulTarget.childElementCount;
  for(let i = 0; i < childCount; i++){
    ulTarget.removeChild(ulTarget.firstElementChild);
  }
  // ulTarget.childNodes.forEach(v => { ulTarget.removeChild(v) });
}

function viewRerendering() {
  viewAllDeleteList();
  todos.forEach(v => { viewInsertList(v.content) });
}

function modelInsertList(item){
  // template : { id: 3, content: "HTML", completed: false }
  const template = {id: 'test', content: item, completed: false}
  todos = todos.concat([template]);

  // render 호출(전체삭제, 전체호출)
  viewRerendering();
}

function modelDeleteList(item) {
  //todos에서 해당 되는 아이템 이외의 것만 살리기
  todos = todos.filter(v => { if(v.content !== item) return v})

  // render 호출
  viewRerendering();
}
