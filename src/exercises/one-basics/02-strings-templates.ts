// export{}

console.log("開始練習： 字串操作與模板字串");
console.log("=".repeat(50));

console.log("\n📝 1. 基本字串宣告與操作");

// 不同的字串宣告方式
const singleQuote: string = 'Hello World';
const doubleQuote: string = "Hello World";
const backtick: string = `Hello World`;

console.log("單引號字串:", singleQuote);
console.log("雙引號字串:", doubleQuote);
console.log("反引號字串:", backtick);

// 字串長度
const message: string = "JavaScript 很有趣，但必須學會!";
console.log("字串內容:", message);
console.log("字串長度:", message.length);

// 字串索引存取 （從0開始）
console.log("第一個字元:", message[0]);
console.log("最後一個字元:", message[message.length - 1]);
console.log("第五個字元:", message[4]);

console.log("\n🔗 2. 傳統字串串接 vs 模板字串");

const firstName: string = "林";
const lastName: string = "哎蹦";
const age: number = 30;
const city: string = "台北";

// 傳統串接方式（不推，但要知道）
const traditionalGreeting: string = "您好，我是" + firstName + lastName + 
  "，今年 " + age + " 歲，住在 " + city + "。";
console.log("傳統串接：", traditionalGreeting);

// ES6 模板字串（推薦）
const modernGreeting: string = `您好，我是 ${firstName}${lastName}，今年 
  ${age} 歲，住在 ${city}。`;
console.log("模板字串：", modernGreeting);

// 模板字串的優勢 - 可讀性更好
const userInfo: string = `
  使用者資訊：
  姓名：${firstName}${lastName}
  年齡：${age}
  居住地：${city}
  狀態：${age >= 18 ? '成年' : '未成年'}
`;
console.log("多行模板字串：", userInfo);

/* 模板字串的表達式
  在 ${} 內寫運算、函數呼叫、條件判斷
*/
console.log("\n⚡ 3. 模板字串中的表達式");

const price: number = 1500;
const quantity: number = 3;
const taxRate: number = 0.05;

// 在模板字串中進行運算
const orderSummary: string = `
  訂單摘要：
  單價：NT$ ${price.toLocaleString()}
  數量：${quantity}
  小計：NT$ ${(price * quantity).toLocaleString()}
  稅金：NT$ ${(price * quantity * taxRate).toLocaleString()}
  總計：NT$ ${(price * quantity * (1 + taxRate)).toLocaleString()}
`;

console.log(orderSummary);

// 條件判斷
const score: number = 90;
const gradeMessage: string = `您的分數是 ${score} 分，等級 ${
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : 'F'
}`;

console.log(gradeMessage);

// 函數呼叫
// const getCurrentTime = (): string => {
//   const now = new Data();
//   return now.toLocaleString('zh-TW');
// };

// const timeMessage: string = `現在時間：${getCurrentTime()}`;
// console.log(timeMessage);



console.log("\n🛠️ 4. 常用字串方法");

const sampleText: string = "  JavaScript TypeScript React  ";
console.log("原始字串：", `"${sampleText}"`);

// 去除空白
console.log("trim()", `"${sampleText.trim()}"`);
console.log("trimStart()", `"${sampleText.trimStart()}"`);
console.log("trimEnd()", `"${sampleText.trimEnd()}"`);

// 大小寫轉換
const techStack: string = "JavaScript";
console.log("原始:", techStack);
console.log("toUpperCase():", techStack.toUpperCase());
console.log("toLowerCase():", techStack.toLocaleLowerCase());

// 搜尋與替換
const sentence: string = "I love JavaScript and JavaScript loves me";
console.log("原始句:", sentence);
console.log("indexOf('JavaScript'):", sentence.indexOf('JavaScript'));
console.log("lastIndexOf('JavaScript'):", sentence.lastIndexOf('JavaScript'));
console.log("includes('love'):", sentence.includes('loves'));
console.log("startsWith('I love'):", sentence.startsWith('I Love'));
console.log("endsWith('me'):", sentence.endsWith('me'));

// 替換
console.log("replace('JavaScript', 'TypeScript'):", sentence.replace('JavaScript', 'TypeScript'));
console.log("replaceAll('JavaScript', 'TypeScript'):", sentence.replaceAll('JavaScript', 'TypeScript'));


console.log("\n✂️ 5. 字串切割與組合");

// 字串分割
const csvData: string = "蘋果,香蕉,橘子,葡萄";
const fruits: string[] = csvData.split(',');
console.log("CSV 字串:", csvData);
console.log("分割後的陣列:", fruits);

// 按空格分隔
const fullName: string = "王 有錢 先生";
const nameParts: string[] = fullName.split(' ');
console.log("全名:", fullName);
console.log("分割後:", nameParts);

// 陣列組合成字串
const techStack2: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];
console.log('技術陣列:', techStack2);

console.log("\n📏 6. 字串截取");

const longText: string = "這是一段很長的文字，用來展示字串截取的各種方法。"
console.log("原始文字:", longText);
console.log("文字長度:", longText.length);

// slice() 
console.log("slice(0, 10):", longText.slice(0, 10));
console.log("slice(5):", longText.slice(5));
console.log("slice(-10):", longText.slice(-10)); // 倒推

// substring()
console.log("substring(0, 10):", longText.substring(0, 10));
console.log("substring(5):", longText.substring(5));

// 實際應用： 生成文字摘要
const createSummary = (text: string, maxLength: number = 20): string => {
  if(text.length <= maxLength) {
    return text;
  }
  console.log("maxLength:",maxLength);
  return text.slice(0, maxLength) + "...";
};

const article: string = "這是一篇關於 JavaScript 字串處理的詳細教學文章，內容涵蓋了各種實用的方法。"
console.log("文章摘要：", createSummary(article, 15));

console.log("\n💼 7. 實際應用範例");

// 應用1 格式化手機號碼
const formatPhoneNumber = (phone: string): string => {
  // 移除所有非數字字元
  const cleanPhone = phone.replace(/\D/g, '');
  // 正則表達式

  // 檢查長度
  if(cleanPhone.length === 10) {
    return `${cleanPhone.slice(0, 4)} - ${cleanPhone.slice(4, 7)}-${cleanPhone.slice(7)}`;
  }

  return "無效的電話號碼";

};

const rawPhone: string = "0912-345-678";
console.log("原始電話：", rawPhone);
console.log("格式化後：", formatPhoneNumber(rawPhone));

// 應用2 產生使用者名稱
const generateUsername = (firstName: string, lastName: string): string => {
  const cleanFirst = firstName.trim().toLowerCase();
  const cleanLast = lastName.trim().toLowerCase();
  const randomNum = Math.floor(Math.random() * 1000);
  // Math.random() 隨意/任意，產生一個介於 0（包含）到 1（不包含）之間的隨機小數
  // Math.floor() 無條件捨去，將小數點無條件捨去，只保留整數
  
  return `${cleanFirst}${cleanLast}${randomNum}`;
};
const randomNum = Math.floor(Math.random() * 1000);
console.log("randomNum:",randomNum);
console.log("產生使用者名稱:", generateUsername("林", "哎蹦"));

// 應用3 驗證Email格式（簡單版）
const isValueEmail = (email: string): boolean => {
  const trimmedEmail = email.trim();
  return trimmedEmail.includes('@') && 
         trimmedEmail.includes('.') &&
         trimmedEmail.indexOf('@') > 0 &&
         trimmedEmail.lastIndexOf('.') > trimmedEmail.indexOf('@')

};
const testEmails: string[] = [
  "user@example.com",
  "invalid-email",
  "test@",
  "@domain.com",
  "valid.email@domain.com.tw"
];
console.log("Email驗證:");
testEmails.forEach(email => {
  console.log(`${email}: ${isValueEmail(email) ? 'ok' : 'no'}`);
});

// 應用4 文字統計
const analyzeText = (text: string) => {
  const trimmedText = text.trim();
  const words = trimmedText.split(' ').filter(word => word.length > 0);
  const sentences = trimmedText.split(/[.!?]+/).filter(s => s.trim().length > 0);

  return {
    字元數: trimmedText.length,
    字數: words.length,
    句數: sentences.length,
    段落數: trimmedText.split('\n').filter(line => line.trim().length > 0).length
  };
};

const article2: string = `
  JavaScript 是一種高階的程式語言
  他廣泛用於網頁開發
  學習 JavaScript 可以幫助你建立互動性強的網站！
`

console.log("文字分析結果：", analyzeText(article2));


/*
  常用字串方法：
   - trim(): 去除首尾空白
   - toUpperCase()/toLowerCase(): 大小寫轉換
   - includes(): 檢查是否包含
   - replace()/replaceAll(): 替換
   - split(): 分割成陣列
   - slice(): 截取部分字串
  
*/




// 彭彭 TS 函式參數/回傳值資料
function show(msg: string) {
  console.log(msg);
}
/* show(5); // 類型為number
show(ture); // 找不到ture
show("Hello", "world"); // 只有一個參數，但這裡有兩個 */
show("hello")

// function add(n1:number, n2:number):number {
//   console.log(n1+n2);
//   return n1+n2;
// }
function add(n1:number, n2:number): void {
  console.log(n1+n2);
  // return n1+n2; 
}
add(3,4);
add(5,6);
// let ans:number = add(11,19); 
let ans = add(11,19); 
console.log(ans);

// 定義一個函式, 接受一個數字的陣列, 計算數字加總的結果並回傳
function calculate(nums: number[]): number {
  let total:number = 0;
  // 巡迴陣列 
  for(let i = 0; i < nums.length; i++) {
    total+=nums[i];
  }
  return total;
}
// let result = calculate(3, 4, 2, 1);
let result = calculate([3, 4, 2, 1]);
console.log(result);


// 彭彭 TS interface 物件資料型態
interface Point {
  x: number
  y: number
  // render: Function
}

interface Point2 {
  x: number
  y: number
}
function abs(p: Point) {
  return Math.sqrt(p.x * p.x+p.y * p.y);
}
abs({x: 3, y: 4});
// abs({x: 3, Y: 4}); // 沒有Y

// 匿名的物件型態
function abs2(p:{x:number, y:number}) {
  return Math.sqrt(p.x * p.x+p.y * p.y);
}
abs2({x: 3, y: 4});
// abs2({x: 3, Y: 4});


interface Employees {
  name: string
  role: string
}
interface Company {
  name: string
  description: string
  employees: Employees[]
  size: Function
}
//  基本物件資料型態
let c ={
  name: "at company",
  description: "code",
  employees: [
    {name: "John", role: "Manager"},
    {name: "Alice", role: "Engineer"}
  ],
  size: function() {
    return this.employees.length;
  }
};
console.log(c.name, c.description);
console.log(c.size() * 5000);

function list(c: Company) {
  c.employees.forEach((employees) => {
    console.log(employees.name, employees.role);
  });
}
list(c);

// 修識字的演練
interface CompanyInfo {
  readonly id: number // 唯獨
  name: string
  size: number
  description?: string // 可選可不選
}

function renderCompany(c: CompanyInfo) {
  // c.id = 20; 
  console.log("公司基本資訊");
  console.log(c.id, c.name, c.size);
  if(c.description !== undefined) {
    console.log("公司詳細說明");
    console.log(c.description);
  }
}

renderCompany({
  id: 88888,
  name: "lorita company",
  size: 5,
});

renderCompany({
  id: 889988,
  name: "company",
  size: 5,
  description: "搜尋引勤"
})

