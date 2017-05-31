import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  //indiquer que l'id appelé depuis les routes correspond en fait au login de lutilisateur:
  primaryKey: 'login'
});
