export {}


console.log("🚀 開始練習：變數宣告與型別判斷");
console.log("=".repeat(50));

console.log("\n 1.基本變數宣告")



console.log("=== 練習1: 變數宣告與型別判斷 ===");

// let 與 const
// let 可賦值的變數
let userName: string = "Alice";
let userAge: number = 25;
let isActive: boolean = true;
const PI: number = 3.14159;
const COMPANY_NAME: string = "我的公司AT";
const MAX_USERS: number = 100;
// PI = 2;

// 
console.log("let 變數 - userName:", userName);
console.log("let 變數 - userAge:", userAge );
console.log("isActive:", isActive);
console.log("const 常數 PI:", PI);
console.log("const 常數 - COMPANY_NAME:", COMPANY_NAME);
console.log("const 常數 - MAX_USERS:", MAX_USERS);

console.log("\n 2.型別檢查與識別");

// const 不可賦值的常數
const testString: string = "Hello World";
const testNumber: number = 42;
const testBoolean: boolean = false;
const testArray: string[] = ["reading", "coding"];
const testObject: object = { name: "Alice", age: "25" };
console.log("字串型別 - typeof testString:", typeof testString);
console.log("數字型別 - typeof testNumber:", typeof testNumber);
console.log("布林型別 - typeof testBoolean:", typeof testBoolean);
console.log("testArray的型別", typeof testArray);
console.log("testObject的型別", typeof testObject);

//進階 null 與 undefined區別
let testNull: null = null;
let testUndefined: undefined = undefined;
console.log("null的型別", typeof testNull);
console.log("testUndefined的型別", typeof testUndefined);



console.log("\n 3.更精確型別檢查");

console.log("testArray 是否為陣列：", Array.isArray(testArray));
console.log("testObject 是否為陣列", Array.isArray(testObject));

// 檢查是否為真正的物件 （排除null 和陣列）
const isRealObject = (value: any): boolean => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
/* 為什麼需要三個條件？
typeof value === 'object' - 確保是物件型別
value !== null - 排除 null (因為 typeof null === 'object' 是 JS 的歷史 bug)
!Array.isArray(value) - 排除陣列 (因為陣列的 typeof 也是 'object') */

/* JavaScript 比較運算符
== - 相等 (會自動轉型)
=== - 嚴格相等 (不會轉型)
!= - 不相等 (會自動轉型)
!== - 嚴格不相等 (不會轉型) ✅
!=== - ❌ 這不存在！ */

console.log("testObject 是否為真正物件", isRealObject(testObject));
console.log("testArray 是否為真正物件", isRealObject(testArray));
console.log("testNull 是否為真正物件", isRealObject(testNull));


console.log("\n 4.變數重新賦值練習");

let counter: number = 0;
console.log("初始 counter", counter);

counter = 10;
console.log("重新賦值後 counter", counter);

counter += 5;
console.log("累加後 counter", counter);

// 字串變數重新賦值
let message: string = "Hello";
console.log("初始 message:", message);

message = message + " World";
console.log("串接後 message", message);

message += "!";
console.log("再次串接後 message:", message);



console.log("\n 5.實際應用 - 使用者資料管理");

// 使用者基本資料
let currentUser: string = "未登入";
let loginAttempts: number = 0;
let isLoggedIn: boolean = false;
const MAX_LOGIN_ATTEMPTS: number = 3;

console.log("目前使用者：", currentUser);
console.log("登入嘗試次數：", loginAttempts);
console.log("使否已登入：", isLoggedIn);
console.log("最大登入嘗試次數：", MAX_LOGIN_ATTEMPTS);

// 模擬登入過程
function attemptLogin(username: string): void {
  loginAttempts ++;
  console.log(`\n登入嘗試 #${loginAttempts} - 使用者名稱： ${username}`);

  if(loginAttempts <= MAX_LOGIN_ATTEMPTS) {
    if(username === "admin") {
      currentUser = username;
      isLoggedIn = true;
      console.log("登入成功！");
    } else {
      console.log("登入失敗");
    }
  } else {
    console.log("已達最大登入嘗試次數，帳號被鎖定");
  }
  console.log("登入狀態：", isLoggedIn);
  console.log("目前使用者：", currentUser);
}

// 執行登入測試
attemptLogin("user1");
attemptLogin("user2");
attemptLogin("admin");
 

console.log("\n 6.型別轉換練習");

// 字串轉數字
const stringNumber: string = "123";
const convertedNumber: number = Number(stringNumber);
console.log(`字串 "${stringNumber}" 轉換為數字：`, convertedNumber);
console.log("轉換後的型別：", typeof convertedNumber);

// 數字轉字串
const originalNumber: number = 456;
const convertedString: string = String(originalNumber);
console.log(`數字 ${originalNumber} 轉換為字串：`, `"${convertedString}"`);

// 轉換為布林值
const truthyValues: any[] = [1, "hello", [], {}];
const falsyValues: any[] = [0, "", null, undefined, NaN];

console.log("\n真值 (truthy) 轉換:");
truthyValues.forEach(value => {
  console.log(`${JSON.stringify(value)} -> ${Boolean(value)}`);
});

console.log("\n偽值 (falsy) 轉換：");
falsyValues.forEach(value => {
  console.log(`${JSON.stringify(value)} -> ${Boolean(value)}`);
});

/* 
1. let vs const：
   - let: 可重新賦值的變數
   - const: 不可重新賦值的常數

2. 基本資料型別：
   - string: 文字資料
   - number: 數字資料
   - boolean: true/false
   - undefined: 未定義
   - null: 空值

3. typeof 的陷阱：
   - typeof null === "object" (歷史問題)
   - typeof [] === "object" (陣列也是物件)


*/