/*
Cash Register:
"Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key."
*/

// lengthy but functional and logical.
function checkCashRegister(price, cash, cid) {
  let status = "";
  let change = [];
  let changeNeededCents = (cash*100) - (price*100);
  let drawerTotalCents = 0;
  cid.forEach(drawerFunction);
  function drawerFunction(x) {
    drawerTotalCents += x[1]*100;
  }
  if (drawerTotalCents < changeNeededCents) {
    status = "INSUFFICIENT_FUNDS";
    console.log(status, change);
    return {status , change};
  } else if (drawerTotalCents == changeNeededCents) {
    status = "CLOSED";
    change = cid;
    console.log(status, change);
    return {status , change};
  } else {
    // cash in drawer
    let hundreds = cid[8][1]*100;
    let twenties = cid[7][1]*100;
    let tens = cid[6][1]*100;
    let fives = cid[5][1]*100;
    let ones = cid[4][1]*100;
    let quarters = cid[3][1]*100;
    let dimes = cid[2][1]*100;
    let nickels = cid[1][1]*100;
    let pennies = cid[0][1]*100;
    // cash taken
    let totalTaken = 0;
    let tryChange = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    while (changeNeededCents >= 10000
    && hundreds >= 10000) {
      changeNeededCents -= 10000
      hundreds -= 10000;
      totalTaken += 10000;
      tryChange[8][1]+=100;
    }
    while (changeNeededCents >= 2000
    && twenties >= 2000) {
      changeNeededCents -= 2000;
      twenties -= 2000;
      totalTaken += 2000;
      tryChange[7][1] += 20;
    }
    while (changeNeededCents >= 1000
    && tens >= 1000) {
      changeNeededCents -= 1000;
      tens -= 1000;
      totalTaken += 1000;
      tryChange[6][1] += 10;
    }
    while (changeNeededCents >= 500
    && fives >= 500) {
      changeNeededCents -= 500;
      fives -= 500;
      totalTaken += 500;
      tryChange[5][1] += 5;
    }
    while (changeNeededCents >= 100
    && ones >= 100) {
      changeNeededCents -= 100;
      ones -= 100;
      totalTaken += 100;
      tryChange[4][1] += 1;
    }
    while (changeNeededCents >= 25
    && quarters >= 25) {
      changeNeededCents -= 25;
      quarters -= 25;
      totalTaken += 25;
      tryChange[3][1] += 0.25;
    }
    while (changeNeededCents >= 10
    && dimes >= 10) {
      changeNeededCents -= 10;
      dimes -= 10;
      totalTaken += 10;
      tryChange[2][1] += 0.10;
    }
    while (changeNeededCents >= 5
    && nickels >= 5) {
      changeNeededCents -= 5;
      nickels -= 5;
      totalTaken += 5;
      tryChange[1][1] += 0.05;
    }
    while (changeNeededCents >= 1
    && pennies >= 1) {
      changeNeededCents -= 1;
      pennies -= 1;
      totalTaken += 1;
      tryChange[0][1]+= 0.01;
    }
    if (totalTaken/100 == cash-price
    && changeNeededCents == 0) {
      status = "OPEN";
      //change = tryChange;
      for (let i=tryChange.length-1; i>=0 ;i--) {
        if (tryChange[i][1]!== 0) {
          change.push(tryChange[i]);
        }
      }
      console.log(status, change);
      return {status , change};
    } else {
      status = "INSUFFICIENT_FUNDS";
      console.log(status, change);
      return {status , change};
    }
  }
}

// tests:
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
