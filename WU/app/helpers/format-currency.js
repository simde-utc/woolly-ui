import Ember from 'ember';

// export function formatCurrency(params/*, hash*/) {
export function formatCurrency([value, ...rest]) {
  let euros = Math.floor(value);
  // let cents = value % 100;
  let sign = '€';
  let decimal = (value - Math.floor(value))*100;

  // if (decimal.toString().length === 1) { decimal = '0' + decimal; }
  // return `${sign}${euros}.${decimal}`;
  return `${value} ${sign}`;
}

export default Ember.Helper.helper(formatCurrency);

// import Ember from 'ember';
//
// export function formatCurrency([value, ...rest]) {
//   let euros = Math.floor(value);
//   // let cents = value % 100;
//   let sign = '€';
//   let decimal = value - Math.floor(value)
//
//   if (cents.toString().length === 1) { cents = '0' + cents; }
//   return `${sign}${euros}.${cents}`;
// }
//
// export default Ember.Helper.helper(formatCurrency);
