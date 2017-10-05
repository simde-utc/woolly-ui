import Ember from 'ember';

// export function formatCurrency(params/*, hash*/) {
export function formatCurrency([value]) {
  let sign = '€';
  return `${value} ${sign}`;
}

export default Ember.Helper.helper(formatCurrency);