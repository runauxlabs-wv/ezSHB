// 비밀번호 정규식 모음
// // 최소 8 자, 최소 하나의 문자 및 하나의 숫자
// const re2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
// const re2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

// // 최소 8 자, 대문자 하나 이상, 소문자 하나 및 숫자 하나
// const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// // 최소 8 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
// const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

// // 최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
// const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
//------------------------------------ 유효성 검사
function validate() {
    const re = /^[a-zA-Z0-9]{4,12}$/;
    // 아이디와 패스워드가 적합한지 검사할 정규식
    const re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 이메일이 적합한지 검사할 정규식

    var id = document.getElementById("id");
    var pw = document.getElementById("pw");
    var email = document.getElementById("email");
    var num1 = document.getElementById("num1"); //주민번호 앞
    var num2 = document.getElementById("num2"); //주민번호 뒤


    //check함수에서 파라미터 3종을 가지고 비교를 돌린다. 
    //정규식 조건에 위배되었을 때, alert이 출력되는 함수였다.
    //요 값이 true이고 이걸 부정한 조건(false)일 때 넘어간다.
    if (!check(re, id, "아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }

    if (!check(re, pw, "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }

    if (join.pw.value != join.checkpw.value) {
        alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
        join.checkpw.value = "";
        join.checkpw.focus();
        return false;
    }

    if (email.value == "") {
        alert("이메일을 입력해 주세요");
        email.focus();
        return false;
    }

    if (!check(re2, email, "적합하지 않은 이메일 형식입니다.")) {
        return false;
    }

    if (join.name.value == "") {
        alert("이름을 입력해 주세요");
        join.name.focus();
        return false;
    }

    // -------------- 주민번호 -------------
    var arrNum1 = new Array(); // 주민번호 앞자리숫자 6개를 담을 배열
    var arrNum2 = new Array(); // 주민번호 뒷자리숫자 7개를 담을 배열
    // 주민번호 앞 861117
    // i<6
    for (var i = 0; i < num1.value.length; i++) { //6회반복
        arrNum1[i] = num1.value.charAt(i);
    } // 주민번호 앞자리를 배열에 순서대로 담는다.


    for (var i = 0; i < num2.value.length; i++) {
        arrNum2[i] = num2.value.charAt(i);
    } // 주민번호 뒷자리를 배열에 순서대로 담는다.

    var tempSum = 0;

    for (var i = 0; i < num1.value.length; i++) {
        tempSum += arrNum1[i] * (2 + i);
    } // 주민번호 검사방법을 적용하여 앞 번호를 모두 계산하여 더함

    for (var i = 0; i < num2.value.length - 1; i++) {
        if (i >= 2) {
            tempSum += arrNum2[i] * i;
        }
        else {
            tempSum += arrNum2[i] * (8 + i);
        }
    } // 같은방식으로 앞 번호 계산한것의 합에 뒷번호 계산한것을 모두 더함

    if ((11 - (tempSum % 11)) % 10 != arrNum2[6]) {
        alert("올바른 주민번호가 아닙니다.");
        num1.value = "";
        num2.value = "";
        num1.focus();
        return false;

    } else {
        // ------------ 생일 자동 등록 -----------
        if (arrNum2[0] == 1 || arrNum2[0] == 2) {
            //주민번호 뒷자리 첫숫자가 1 or 2일때 (2000이전 출생자)
            var y = parseInt(num1.value.substring(0, 2));
            var m = parseInt(num1.value.substring(2, 4));
            var d = parseInt(num1.value.substring(4, 6));
            // 주민번호 두자리씩 쪼개기

            join.years.value = 1900 + y; //1990
            join.month.value = m; //11
            join.day.value = d; //18
        }
        else if (arrNum2[0] == 3 || arrNum2[0] == 4) {
            //주민번호 뒷자리 첫숫자가 3 or 4일때 (2000이후 출생자)
            var y = parseInt(num1.value.substring(0, 2));
            var m = parseInt(num1.value.substring(2, 4));
            var d = parseInt(num1.value.substring(4, 6));
            join.years.value == 2000 + y;
            join.month.value = m;
            join.day.value = d;
        }
    }
}
function check(re, what, message) {
    //정규식에 위배되지 않았을때
    if (re.test(what.value)) {
        return true;
    }
    //정규식에 위배되었을때
    alert(message); //3번째 파라미터를 참조한 경고메시지 출력
    what.value = ""; //해당 위치 공백화
    what.focus(); //해당위치로 포커싱
}

const validation = document.querySelector('#validation');
validation.addEventListener('click', (e) => validate(e));


//------------------------------------ 












