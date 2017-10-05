import Ember from 'ember';

export function statusOrder([value]) {
  if (value==="not_payed") {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> À payer`);
  }
  else if (value === "payed")   {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Payé`);
  }
  else if (value === "awaiting_validation") {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Payé`);
  }
  else if (value === "validated") {
    return Ember.String.htmlSafe(`<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Payé`);
  }
  else return ` Payé`;
}

export default Ember.Helper.helper(statusOrder);
