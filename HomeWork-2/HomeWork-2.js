
// Первая задача
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
  let fCount = 0;
  let sCount = 0;

  for (var i = 0; i <= firstRow.length; i++) {
    if (firstRow[i] == 'а') {
      fCount += 1;
    }else {
      continue;
    }
  }

  for (var i = 0; i <= secondRow.length; i++) {
    if (secondRow[i] == 'а') {
      sCount += 1;
    }else {
      continue;
    }
  }



  if (fCount > sCount) {
    console.log(firstRow);
  }else {
    console.log(secondRow);
  }

}

console.log(getRow(firstRow, secondRow));


// Вторая задача
function formattedPhone(phone) {
  let newPhone = "";

  for (var i = 0; i < phone.length; i++) {

    if (i === 2 || i === 5 || i === 8 || i === 10){
      if (i === 2) {
        newPhone += ' ' + '(' + phone[i];
      }else if (i == 5) {
        newPhone += ')' + ' ' + phone[i];
      }else if (i == 8) {
        newPhone += '-' + phone[i];
      }else if (i == 10) {
        newPhone += '-' + phone[i];
      }
    }else {
      newPhone += phone[i];
    }

  }

  return newPhone;
}

console.log(formattedPhone('+71234567890'))
