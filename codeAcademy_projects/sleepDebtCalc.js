
function getSleepHours(day){
  switch (day) {
    case 'monday':
    return 7;
    break;
    case 'tuesday':
    return 6;
    break;
    case 'wednesday':
    return 7;
    break;
    case 'thursday':
    return 6;
    break;
    case 'friday':
    return 6;
    break;
    case 'saturday':
    return 8;
    break;
    case 'sunday':
    return 9;
    break;
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

}

function getIdealSleepHours() {
  var idealHours = 7;
  return idealHours * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('That was a perfect week of sleeping!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('The user has Overslept!!!!');
  } else {
    console.log('Caution!!! The user is Sleep deprived!!!!');
  }
  var sleepDebtHours = actualSleepHours- idealSleepHours;
  console.log('Sleep deficit/surplus hours:', sleepDebtHours);
}

calculateSleepDebt();
