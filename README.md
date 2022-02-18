## 後端

### 專有名詞

1. Schema : 資料型別
2. Resolver : 可以把它當成傳統後端架構的 Router
3. rootValue : 可以當作Controller，也就是真正實現資料操作的地方

### GraphQL架構

為了完成一個簡單的GraphQL架構你會需要以下四個檔案

1. app.js : 主程式，宣告、設定GraphQL 基本都在這
2. models/item.model.js : " 實現 " 資料讀寫函式
3. models/item.graphql : “ 定義 " graphql 的資料型別
4. models/item.resolver.js : " 執行 ” 資料CRUD 的真正程式
   
p.s. 這裡執行的意思是 graphql 只會從這邊呼叫你定義的"資料讀寫函式"

### 實現步驟

Step1 define Schema & resolvers

Step2 define rootValue 

## 前端 (根據使用情境)

Scenario 1 fetch data (獲取資料 R) : Query

Scenario 2 Mutate data (更動資料 C-U-D) : Mutation