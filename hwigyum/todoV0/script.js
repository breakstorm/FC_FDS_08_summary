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

  modelInitialize()

  inputTarget.addEventListener('keyup', function(v) {
    if(v.keyCode === 13 && v.target.value ) {
      modelInsertList(v.target.value);
      v.target.value = '';
    }
  });

  ulTarget.addEventListener("click", function(v) {
    if(v.target.nodeName === 'LI'){
      modelDeleteList(v.target.innerText);
    }     
  });
})


function viewInsertList(item) {
  // li요소 추가
  
  const ulTarget = document.querySelector('#todo-list');
  const template = '<li>' + item + '</li>';
  ulTarget.insertAdjacentHTML('beforeend', template);
}

function viewAllDeleteList() {
  // 현재 모든 li요소를 삭제
  // debugger;

  let ulTarget = document.querySelector('#todo-list');
  let childCount = ulTarget.childElementCount;
  for(let i = 0; i < childCount; i++){
    ulTarget.removeChild(ulTarget.firstElementChild);
  }
}

function viewRerendering() {
  // todos의 모든 content를 출력하는 함수

  viewAllDeleteList();
  todos.forEach(v => { viewInsertList(v.content) });
}

function modelInitialize() {
  // 초기화 과정시 사용, todos에 데이터가 있으면 이를 출력

  if(todos.length) todos.forEach(v => { viewInsertList(v.content); });
}

function modelInsertList(item){
  // todos에 객체단위로 데이터 입력 
  // template : { id: 3, content: "HTML", completed: false }

  const template = {id: 'test', content: item, completed: false}
  todos = todos.concat([template]);

  // render 호출(전체삭제, 전체호출)
  viewRerendering();
}

function modelDeleteList(item) {
                                 //todos에서 해당 되는 아이템 이외의 것만 살리기

                                 todos = todos.filter(
                                   v => {
                                     if (
                                       v.content !==
                                       item
                                     )
                                       return v;
                                   }
                                 );

                                 // render 호출(전체삭제, 전체호출)
                                 viewRerendering();
                               }
