# 20180129 자바스크립트 시작 
- 프로그래밍 = 컴퓨터 언어 = 컴퓨터 + 언어(의사전달을 효율적으로 하는 수단) 
- 웹의 동작 = 클라이언트에서 요청(request)을 하고, 서버에서 응답(response)를 보내는 방식 
- 브라우저 동작 = 웹엔진(HTML파서, CSS파서) + 자바스크립트엔진(JS파서)

# 20180127 사전학습 

## 프로그래밍언어 
> 사람의 언어를 컴퓨터가 이해할 수 있는 언어로 이야기 하는 것. 
- [프로그래밍언어-구성요소](http://www.bsidesoft.com/?p=760)

## 컴퓨터적 사고방식 
> 논리적, 수학적  

## 자바스크립트 
현재 ES6가 공개되었고, 간단히 추가된 부분을 나열 하면 'let/const keyword, module system, Arrow Function, class' 이다. 

## 브라우저 동작원리 
- DOM랜더링(파일다운로드 + 실행) + 스크립트랜더링(파일다운로드 + 실행)  
- 스크립트 랜더링 효율화 방법 
   1. HTML파일 하단부에서 script호출을 한다. 
   2. script async DOM,과 스크립트 다운로드 동시 진행. 다운로드 완료직후 스크립트 실행. 
   3. script defer DOM,과 스크립트 다운로드 동시 진행. DOM랜더링 완료후 스크립트 실행.  

## 모르던 내용 
   1. !! : 피연산자를 불린값으로 변환한다. undefine 값이 아니면 모두 true 이다.  

## ES6 변수관련  
   1. scope(유효범위) 
      - 기존 function-level scope : 함수 내에서 모든 변수를 사용 가능 하다. 
         - 문제점 : 함수 안의 함수, scope-chain으로 다른 함수의 변수를 참조할 수 있게 된다.  
         - 초기화, 할당, 선언
      - scope-chain : [식별자를 찾기 위해서 local에서 global로 단계별 찾아나간다.](https://stackoverflow.com/questions/1484143/scope-chain-in-javascript) 
      - [자유변수](https://en.wikipedia.org/wiki/Free_variables_and_bound_variables) 와 [클로져](https://en.wikipedia.org/wiki/Closure_(computer_programming)) : local변수 이외는 모두 자유변수라고 칭한다. 그중 scope-chain 일어나면서 자신이 참조(사용)할 수 있는 변수를 클로져 라고 한다. 
      - 쉐도잉 : 같은 변수명을 사용 하는 것이 가능 해서 상위 변수를 사용하지 못하는 것을 의미 한다. 
      - [호이스팅](http://poiemaweb.com/js-data-type-variable#24-%EB%B3%80%EC%88%98-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85variable-hoisting) : 변수와 함수 선언문을 scope의 선두로 옮겨지는 작업.  
   2. let&const 공통점 
      - block-scope를 가진다. 
      - 호이스팅이 발생하지 않는다. 
      - 전역에 선언을 하여도 window.변수명 으로 접근할 수 없다. 
   3. let
      - var처럼 변수에 값을 재할당 할 수 있다. 
   4. const 
      - 상수값만을 가진다. (재할당 불가능)  

## ES6 1. 
   1. 백틱(backtick)  
      - 홑 따옴표와, 쌍 따옴표를 모두 사용할 수 있다. 
   2. 대입문(template substitution) 
      - `${변수명}` 의 형태로 template을 사용할 수 있다. 
   3. 화살함수(ArrowFunction)  
      - `() => {}` 의 형태  
      - (항상 익명이다.)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98] 그래서 생성자로 사용할 수 없다.  
      - lexical this 발생. this를 상속(계승) 받는다. 
      - 사용하지 말아야할 경우 
         1. 객체 메소드 
         2. 객체 prototype 
         3. 생성자 함수 
         4. addEventListener 함수  
   4. 값 
      - 6종류의 primitive type, others call by reference type
   5. 함수인자 초기값 설정 (default parameter value) 
      - 타입선언 없이 사용
   6. rest 파라메터 
      - 스프레드 오퍼레이터를 이용하여 작성한 변수 
   7. 스프레드 오퍼레터   
   8. 프로퍼티 축약표현 
      - 메소드 프로퍼티 축약
   9. 디스트럭쳐링  
      - 배열 디스트럭쳐링 
      - 객체 디스트럭쳐링  

## ES6 2. 실행 컨텍스트 관련
   1. this를 원하는 실행위치에 실행시키기 위한 방법 
      - this = that 
      - bind, call, apply 사용  

## ES6 3. class 
   - getter, setter 
   - extends (상속) 
   - super 
   - 
   




object.assign 
object.createElement 
object.create