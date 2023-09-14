// -----------------------------------------Get days in year-----------------------------------------

const daysInYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
};

const inputYear = parseInt(prompt('Введіть рік:'));

if (!isNaN(inputYear)) {
  const daysCount = daysInYear(inputYear);
  alert(`${daysCount} днів.`);
}

// ------------------------------------------Get day of a year---------------------------------------------------

const inputDate = new Date(prompt('Введіть дату (рік-місяць-день):'));

if (!isNaN(inputDate)) {
  const startOfYear = new Date(inputDate.getFullYear(), 0, 1);

  const millisecondsInDay = 24 * 60 * 60 * 1000;

  const daysDifference = Math.floor((inputDate - startOfYear) / millisecondsInDay); 

  const dayOfYear = daysDifference + 1; 

  alert(`День у році: ${dayOfYear}`);
}

// ---------------------------------------------Get fiscal quarters--------------------------------------------------

const inputDate = new Date(prompt('Введіть дату (рік-місяць-день):'));

if (!isNaN(inputDate)) {
  const month = inputDate.getMonth();
  let quarter;
  let quarterName;

  switch (month) {
    case 0: 
    case 1:
    case 2: 
      quarter = 1; 
      quarterName = 'I квартал';
      break;
    case 3: 
    case 4: 
    case 5: 
      quarter = 2; 
      quarterName = 'II квартал';
      break;
    case 6: 
    case 7: 
    case 8: 
      quarter = 3; 
      quarterName = 'III квартал';
      break;
    case 9: 
    case 10:
    case 11: 
      quarter = 4; 
      quarterName = 'IV квартал';
      break;
  }

  const formattedDate = `${inputDate.getDate()} ${inputDate.toLocaleDateString('uk-UA', { month: 'long' })}`;
  alert(`${formattedDate} - ${quarterName}`);
}