// 1.객체를 찾는다.
// 2.document는 화면에 존재하는 모든 UI 객체를 가지고 있다. CSS의 선택자 기능을 통해서 찾는다.
// 3. 한개만 찾고 싶으면 id를 줘야한다. 클래스 이름으로 찾으면 객체 참조 배열을 통해 넘어온다.[index] -> 반복문 이용 id -> querySelect class -> querySelectAll

let h1_obj = document.querySelector("#heading"); //선택자는 #을 이용해서 찾는다. return값으로 자동으로 타입이 결정된다.
// JavaScript 변수 타입(var -> 자동 할당)
// 숫자 -> number, big int
// 문자(문자열) -> String
// boolean, null, undefined, 객체 참조 변수, Array !undefined -> 아직 정하지 못한 상태
// var과 let의 차이점?
// java, javascript, DB에서의 'null'
// [Java
//  -> 객체 참조를 하지 않고 있는 상태] [DB -> field에 Null 값을 넣어도 되고 안넣어도 됨] <br>
// [Javascript -> 동작 결과 오류 발생을 확인시켜줌]

//객체를 마음대로 설정(기본 속성, style 속성, event 속성 : on, content) : event 설정을 제일 많이한다.

h1_obj.onclick = () => {
  h1_obj.style.color = "#ff0000";
  window.alert("h1을 클릭하셨습니다");
};
