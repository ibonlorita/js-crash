// export {}

console.log("🔢 開始練習：數字運算與型別轉換");
console.log("=".repeat(50));

console.log("\n🧮 1. 基本數字運算");

const num1: number = 15;
const num2: number = 4;

console.log('num1:', num1);
console.log(`num2: ${num2}`);

console.log("加法:", num1 + num2);
console.log("減法:", num1 - num2);
console.log("乘法:", num1 * num2);
console.log("除法:", num1 / num2);
console.log("取餘數:", num1 % num2);
console.log("次方:", num1 ** num2);

// 運算優先順序
const complexExpression: number = 2 + 3 * 4 ** 2;
console.log("複雜運算: 2 + 3 * 4 ** 2 =", complexExpression);
console.log("加括號改變優先順序:((2+3)*4)**2:", ((2 + 3) * 4) ** 2);

// 小數點（浮點數）運算注意事項
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 不是0.3耶！
console.log("0.1 + 0.2 ===", 0.1 + 0.2 === 0.3);
// 解決小數點精度問題
const fixDecimal = (num: number, decimals: number = 2): number => {
  return Number(num.toFixed(decimals));
}
console.log("修正後的相加: fixDecimal(0.1 + 0.2):", fixDecimal(0.1 + 0.2));


console.log("\n🔍 2. 數字型別檢查與特殊值");

// 特殊數字值
const positiveInfinity: number = Infinity;
const negativeInfinity: number = -Infinity;
const notANumber: number = NaN;

console.log("正無限大:", positiveInfinity);
console.log("負無限大:", negativeInfinity);
console.log("非數字:", notANumber);

// 檢查特殊值型別
/* 
  isFinite 檢查是否為有限數字，isNaN 檢查是否為非數字
 */
console.log("typeof positiveInfinity:", typeof positiveInfinity);
console.log("typeof negativeInfinity:", typeof negativeInfinity);
console.log("typeof notANumber:", typeof notANumber);
console.log("是否為有限數字-isFinite(100):", isFinite(100));
console.log("是否為有限數字-isFinite(Infinity):", isFinite(Infinity));
console.log("是否為 NaN - isNaN(NaN):", isNaN(NaN));
console.log("是否為 NaN - isNaN(100):", isNaN(100));

// Number 物件的檢查方法（更嚴格） true false
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isFinite('100'):", Number.isFinite('100'));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('Hello'):", Number.isNaN('Hello'));


// 安全數字除法運算
// 型別註解與錯誤處理，回傳數字或錯誤訊息
function safeDivide(a: number, b: number): number | string {
  console.log(`嘗試計算 ${a} + ${b}`);
  
  // 檢查是否有為有效數字
  if (isNaN(a) || isNaN(b)) {
    const error = "參數包含非數字值";
    console.log(`errorX: ${error}`);
    return error;
  }
  // 檢查除數是否為零
  if (b === 0) {
    const error ="除數不為零";
    console.log(`errorX: ${error}`);
    return error;
  }
  
  const result = a / b;

  // 檢查結果是否為有限數值
  if (!isFinite(result)) {
    const error = "計算結果為無限大";
    console.log(`errorX: ${error}`);
    return error;
  }

  console.log(`計算結果: ${result}`);
  return result;
}

console.log("預測正常情況 safeDivide(10, 2):", safeDivide(10, 2));
console.log("測試除零錯誤 safeDivide(10, 0):", safeDivide(10, 0));
console.log("測試NaN錯誤 safeDivide(NaN, 2):", safeDivide(NaN, 2));
console.log("測試無限大:", safeDivide(1e308, 1e-308));

// 用戶輸入驗證（數字檢查）支援字串或數字輸入，回傳驗證結果物件
type ValidationResult = {
  isValid: boolean;
  message: string;
  value?: number;
};

function validationNumber(input: number | string): ValidationResult {
  console.log(`驗證輸入: "${input}", (型別: ${typeof input})`);

  // 將輸入轉換為數字
  const num: number = parseFloat(input.toString());
  console.log(`轉換後的數字: ${num}`);
 

  // 檢查是否為有效數字
  if(isNaN(num)) {
    const result = {isValid: false, message: "請輸入有效數字"};
    console.log(`錯誤X: ${result.message}`);
    return result;
  }

  // 檢查是否為有限數
  if(!isFinite(num)) {
    const result = {isValid: false, message: "數字必須是有限值"};
    console.log(`錯誤X: ${result.message}`);
    return result;
  }

  const result = {isValid: true, message: "輸入有效", value: num};
  console.log(`正確 ${result.message}，數值： ${result.value}`);
  return result;
}

console.log("測試有效數字:", validationNumber("132.25"));
console.log("測試無效輸入:", validationNumber("Hello"));
console.log("測試無限大:", validationNumber(Infinity));
console.log("測試空字串:", validationNumber(""));
console.log("測試數字型別:", validationNumber(42));

 /*
    | 方法             | 功能              | 範例                       | 結果    |
| -------------- | --------------- | ------------------------ | ----- |
| `parseFloat()` | 轉成浮點數           | `parseFloat("12.34abc")` | 12.34 |
| `parseInt()`   | 轉成整數            | `parseInt("12.34")`      | 12    |
| `Number()`     | 嚴格轉型（整個字串必須是數字） | `Number("12.34abc")`     | NaN   |
  */

// 用戶年齡處理
// 嚴格驗證年齡範圍，使用throw Error進行錯誤處理
function processUserAge(ageInput: number | string): number {
  console.log(`處理年齡輸入: "${ageInput}", (型別: ${typeof ageInput})`);

  // 將輸入轉換為數字
  const age: number = parseInt(ageInput.toString());
  console.log(`轉換後的數字: ${age}`);

  // 檢查是否為有效數字
  if(isNaN(age) || !isFinite(age)) {
    const errorMsg = "請輸入有效的年齡";
    console.log(`錯誤X: ${errorMsg}`);
    throw new Error(errorMsg);
  }

  // 檢查年齡是否在合理範圍
  if(age < 0 || age > 150) {
    const errorMsg = "年齡超出合理範圍 (0-150)";
    console.log(`錯誤X: ${errorMsg}`);
    throw new Error(errorMsg);
  }

  console.log(`年齡驗證成功: ${age} 歲`);
  return age;
}

console.log("\n👤 測試 processUserAge 函式:");
console.log("-".repeat(30));
console.log("⚠️  注意：此函式會拋出錯誤，必須使用 try-catch");

// 測試有效年齡
try {
  console.log(`結果： ${processUserAge("25")} 歲`);
} catch (error) {
  const errMsg = error instanceof Error ? error.message : "未知錯誤";
  console.error(`錯誤: ${errMsg}`);
}

// 測試無效輸入
try {
  console.log(`結果: ${processUserAge("abc")} 歲`);
} catch(error) {
  console.error(`錯誤: ${(error as Error).message}`);
}

// 測出超出範圍
try {
  console.log(`結果: ${processUserAge("151")} 歲`);
} catch(error: unknown) {
  if(error instanceof Error) {
    console.error(`錯誤: ${error.message}`);
  } else {
    console.error("發生未知錯誤");
  }
}

// 不同複雜度版本展示

// 基本版

// 嚴格版，使用聯合型別

// 物件版，完整資訊回傳


// 檢查是否為整數
console.log("Number.isInteger(100):", Number.isInteger(100));
console.log("Number.isInteger(100.1):", Number.isInteger(100.1));
console.log("Number.isInteger('100'):", Number.isInteger('100'));
console.log("Number.isInteger(NaN):", Number.isInteger(NaN));
console.log("Number.isInteger(Infinity):", Number.isInteger(Infinity));

// ========================================
// 3. 型別轉換 - 字串轉數字
// 定義：將字串轉換為數字的不同方法
// 方法：Number()、parseInt()、parseFloat()、+ 運算符
// 基本功：處理使用者輸入和外部資料的關鍵技能
// ========================================？

console.log("\n🔄 3. 型別轉換 - 字串轉數字");

const stringNumber: string[] = [
  "123",
  "123.45",
  "123abc",
  "abc123",
  "  456  ",
  "",
  "0xFF", // 16進位
  "1e3", // 科學記號
];

console.log("測試字串", stringNumber);

// Number() 嚴格轉換

