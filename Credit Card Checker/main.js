// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

function validateCred(findInvalidCards) {
  let checkSum = [];
  let digitX2 = 0;
  let checkSumTotal = 0

  for (let i = findInvalidCards.length - 1; i > 0; i--) {
    let digit = findInvalidCards[i - 1];
    if ((findInvalidCards.length - i) % 2 != 0) {
      digitX2 = digit * 2
      if (digitX2 > 9) {
        let minus101 = (digitX2 - 9);
        checkSum.push(minus101);
      } else if (digitX2 <= 9) {
        let minus102 = digitX2;
        checkSum.push(minus102);
      }
    } else if ((findInvalidCards.length - i) % 2 === 0) {
      digitX2 = digit;
      let minus103 = digit;
      checkSum.push(minus103);
    }
  }

  checkSum.push(findInvalidCards[findInvalidCards.length - 1]);

  for (let y = 0; y < checkSum.length; y++) {
    checkSumTotal = checkSumTotal + checkSum[y];
  }

  let finalCheck = (checkSumTotal % 10);
  let validyesno = 'hmm';

  if (finalCheck === 0) {
    validyesno = 'Valid';
    console.log(validyesno);
  } else {
    validyesno = 'Invalid';
    console.log(validyesno);
    let company = '';
    switch (findInvalidCards[0]) {
      case 3:
        company = '(Amex)';
        console.log(company);
        break;
      case 4:
        company = '(Visa)';
        console.log(company);
        break;
      case 5:
        company = '(MasterCard)';
        console.log(company);
        break;
      case 6:
        company = '(Discover)';
        console.log(company);
        break;
      default:
        company = '(Company not found)';
        console.log(company);
    }
  }
}

for (let i = 0; i < batch.length; i++) {
  console.log(`\nCard #${i + 1}:`);
  validateCred(batch[i]);
}
