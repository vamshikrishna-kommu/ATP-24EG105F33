// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000


const transactions = [
   { id: 1, type: "credit", amount: 5000 },
   { id: 2, type: "debit", amount: 2000 },
   { id: 3, type: "credit", amount: 10000 },
   { id: 4, type: "debit", amount: 3000 }
 ];

    //1. filter() all credit transactions
    let r1=transactions.filter(transaction=>transaction.type=="credit")
    console.log("credit transactions are ",r1)
//2. map() to extract only transaction amounts
    let r2=transactions.map(transaction=>transaction.amount)
    console.log("transaction amounts are ",r2)
//3. reduce() to calculate final account balance
    let r3=transactions.reduce((balance,transaction)=>{
        if(transaction.type=="credit"){
            return balance+transaction.amount;
        } else {
            return balance-transaction.amount;
        }   
    },0)
    console.log("final account balance is ",r3)
//4. find() the first debit transaction
    let r4=transactions.find(transaction=>transaction.type=="debit")
    console.log("first debit transaction is ",r4)
//5. findIndex() of transaction with amount 10000
    let r5=transactions.findIndex(transaction=>transaction.amount==10000)
    console.log("index of transaction with amount 10000 is ",r5)