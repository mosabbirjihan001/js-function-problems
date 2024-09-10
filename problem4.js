function password(obj){
  let capitalSiteName = obj.siteName[0].toUppercase + obj.siteName.slice(1)
  let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;

  return passwordString;
}

console.log( password(
  {name : 'kolimuddin',
   birthYear : 1999, 
   siteName : 'google'}
   ) ) ;
console.log(password);