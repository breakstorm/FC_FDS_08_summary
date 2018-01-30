# 20180130 기본 아닌 기본 내용 
- 식 문 값 연산자 예약어 주석 
   - express : 명령을 수행하여 한개의 값을 도출 
   - value : javascript의 datatype으로 나타낸 것 
   - statement : ; {}을 이용하여 만든 명령의 집합 
   - operator : 지정된 특수한 명령을 수행하는 기호  
   - keyword : 지정된 특수한 명령을 수행하는 단어의 조합 
   - comment : 프로그램에 영향을 미치지 않는 글 
- 변수와 변수
   - 메모리구조 : 1word = 4byte = 32bit = 1번에 읽을수 있는 주소범위(32bit cpu 기준)  
   - 변수의 종류 : primitive type / object type  
      - primitive type : immutable 하고 call by value(pass to value) 하다 
         - 변수의 값을 다시 할당할때 기존의 메모리 주소값을 사용하지 않고, 다른 곳에 할당을 한다. 이를 immutable하다고 한다. 
      - object type : mutable 하고 call by reference(pass to reference) 하다
- 오퍼레이터 
   - 단축평가 : 논리연산자가 boolean과 사용되지 않아 결과값이 피연산자 값중 하나를 반환하는 것을 이용하여 작성 
      - && : 마지막에 나오는 truthy 연산자 반환 
      - || : 처음 나오는 truthy 연산자 반환
- 제어문(반복, 조건, 형변환)

# 20180130 예습내용 
- new 명령어를 통하여 객체 생성이 가능하다. 
- 모든 객체는 \[\[prototype\]\] 이라는 은닉속성을 가지고 있고, 이는 다른 protype을 가리킨다.  
- 결국 선행해서 알아야 하는 내용은 객체(클래스) 선언 내용이다.
   - prototype에서 상속이 class와의 연관관계를 모르겠다.
   - this의 위치별 의미 
   - bind, apply, call의 차이점 및 활용방법

# 20180129 자바스크립트 시작 
## 수업내용
- 프로그래밍 = 컴퓨터 언어 = 컴퓨터 + 언어(의사전달을 효율적으로 하는 수단) 
- 웹의 동작 = 클라이언트에서 요청(request)을 하고, 서버에서 응답(response)를 보내는 방식 
- 브라우저 동작 = 웹엔진(HTML파서, CSS파서) + 자바스크립트엔진(JS파서)

## 선배와의 만남
- 프론트엔드 개발 공부 어떻게 했나 
   - (이론 학습 + 체득) 반복
- 팀 프로젝트 (DADA) 를 통해 얻게된 부분
- 구직 활동
   - 자신이 PR을 할 방향성을 잡아야 한다.  
   - 잘 만든 문서화 내용은 구직과 연결된다. 
- 리액트 네이티브로 진행한 개인 프로젝트
- 내가 수강생일 때 알았다면 좋았을 것들  
   - 알고리즘, 프로그래밍 기초. 왜냐하면 이슈가 발생을 하였을때 기초가 없으면 해결을 할 수 없다고 요즘 느끼고 있다. 
- 팀프로젝트 
   - 팀원 들의 정확한 역할 분배 
   - 기획 단계에서 많은 시간을 절약하고 개발 시간을 확보 
   - 코드인벤션, github, 프로젝트 tool(invision, zeplin), 웹폰트 등을 사용해도 좋지만 바쁘다면 패스.
- 내가 알고 싶은것 
   - 각 단계별 취업이 된 이유를 꼽으면, (서류통과, 면접) 
     답변 : 디자인을 할 수 있다는 점과 당시 회사에서 디자인이 필요한 사람이 필요하다는 것이 맞았다. 하지만 정확한 이유는 자신도 알 수 없다. 
   - 프로젝트 선정 기준은 무엇인가? (트렌디한 기술 or 하고싶은 기술) 
     답변 : 2가지 이유보다 자신이 왜 이기술을 선정했는 지에 대해서 이야기를 할 수 있어야 한다. 

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

## 프로토토입 객체 
   0. 기존 알고 있던 내용 : 프로토타입을 공유하여 개별 객체 선언시 사용되는 메모리 공간을 절약 한다. 
   1. prototype chain 찾을려고 하는 프로퍼티에 대해 자신의 객체부터 부모까지 찾아가는 행위. 
   2. 프로퍼티 추가 삭제 가능 
   3. 프로퍼티에 함수 뿐만이 아니라, 값도 가능.

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
   10. 모듈화(module) - export&import 
   11. 비동기처리(promise) 
   12. 이터레이션 프로토콜  : iterator = iterable[Symbol.iterator](); 
   13. for of 루프 
   14. symbol 자료형 (7번째 자료형) 
   15. 데코레이터 
   16. 제네레이터 : iterable을 generate하는 function
   17. 

## ES6 2. 실행 컨텍스트 관련
   1. this를 원하는 실행위치에 실행시키기 위한 방법 
      - this = that 
      - bind, call, apply 사용  

## ES6 3. 오브젝트 상속과 class
   - 변수에 객체를 바로 생성 가능 var test = {}; 
   - 동일한 기능의 객체를 동적으로 사용하기 위해 함수를 만들어 new를 선언
      function test() { this.a = 'a' }
      var aDash = new test(); 
      - new키워드도 prototype을 이용하는 방법  
   - new 키워드 없이 객체를 만드는 방법이 객체를 선언하는 방법 필요성 대두. Object 객체 
      - Object.create() 
      - Object.assign() 
      - Object.setProperty() ... 
      - Object.freeze() // immutable variable 변경 / deepFreeze 가능
      - Object.seal() //변경가능, 추가 및 삭제 불가능
   - class로 객체 만들기 
```javascript
class Polygon {
   constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
class Square extends Polygon {
   constructor(sideLength) {
      super(sideLength, sideLength)
    }
   get area() {
      return this.height * this.width;
    }
   set sideLength(newLength){
      this.height = newLength;
      this.width = newLength;
    }
}

var square = new Square(2);

square.area
4
square.sideLength = 5
5
square.area
25
```
   - prototype link + prototype object 
      1. [참고링크1](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67) 
      2. [참고링크2](http://rhio.tistory.com/236) 
      3. [참고링크3](http://insanehong.kr/post/javascript-prototype/)




object.assign 
object.createElement 
object.create