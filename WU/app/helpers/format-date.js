import Ember from 'ember';

export function formatDate([value, ...rest]) {
  let day = value.getDate();
  let months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juilet", "aout", "septembre", "octobre", "novembre", "décembre"];
  let month = value.getMonth();
  let year = value.getFullYear();
  let hour = value.getHours();
  let min = value.getMinutes();
  let m = months[month];
  return `${day} ${m} à ${hour}h${min}`;
  // return `${day} ${m} ${year}, à ${hour}:${min}`;
  // return moment(value).format('LL');
}

export default Ember.Helper.helper(formatDate);
