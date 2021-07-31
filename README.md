# Question-1_StringInsert5  

原始題目  
[image](/image/OriginalQuestion.bmp)  

Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N.  

Example:  
1. Given N = 268, the function should return 5268.  
2. Given N = 670, the function should return 6750.  
3. Given N = 0, the function should return 50.  
4. Given N = -999, the function should return -5999.  

Assume that:  
* N is an integer within the range [-8,000..8,000].  

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.  

最近在網路上看到有趣的題目，
請你寫個 funtion ，  
給你一個整數N，  
把 5 任意插入整數N的任何位置，做出各種排列組合的數字，  
並且返回所有數字組合中的最大值。  

舉例來說給定 268 你的程式應該返回 5268，  
N的範圍  
-8000 <= N <= 8000  

解法的正確性最重要，  
解決方案的效能不是本題考量的重點。  

這題我的解題思路是先把輸入數字轉成字串，  
接著字串再切割成一個一個的字串陣列，  
然後再依序從陣列前面插到後面，  
以此生出許多不同排列組合的字串陣列，  
最後字串陣列轉換回字串，轉換回數字。
再從這些數字中找出最大值並回傳。  

預前準備：

1. 先去 [Node.js官網](https://nodejs.org/en/) 下載 Node.js 14.17.4版，並安裝在電腦上。  
2. 打開 命令提示字元 ，用 `cd` 指令切換工作目錄到專案資料夾根目錄。  
3. 接著下指令 `npm install` 去讓 npm套件管理器 根據 專案 package.json 的設定下載那包 node_modules 。  
4. 下指令 `npm run test` 即可跑 Unit Test 去測試你寫在 solution function 裡的程式碼是否能通過測試資料。  

關鍵部份程式碼在 `./test/json.test.js` 裡的 solution函數。  

附上程式 Unit Test 執行結果  
[image](image/result1.bmp)  

附上線上網站 Unit Test 執行結果  
[image](image/result2.bmp)  
