import DS from 'ember-data';
import { underscore } from '@ember/string';
import { set, get, computed } from '@ember/object';

export default DS.JSONSerializer.extend({
  primaryKey: '_id',
  // attrs: {
  //   myname: 'name'
  // },
  // serialize(snapshot, options) {
  //   let json = this._super(...arguments);
  //   try {
  //     let team = this.store.peekRecord('team', snapshot.id);
  //     let employees = get(team, 'employees');
  //     let empArr = employees.map((employee) => employee.id);
  //     json.interns = empArr;
  //   } catch(e) {

  //   }
  //   delete json.new_property;
  //   return json;
  // },
  // normalize(typeClass, hash) {
  //   hash.new_property = true;
  //   return this._super(...arguments);
  // },
  // normalizeResponse(store, primaryModelClass, payload) {
  //   // if (token) {
  //   //   let modelName = get(primaryModelClass, 'modelName');
  //   //   payload[modelName].token = token;
  //   // }
  //   // let modelName = get(primaryModelClass, 'modelName');
  //   // payload=payload[modelName]
  //   let newPayLoad = {};
  //   let modelName = get(primaryModelClass, 'modelName');
  //   newPayLoad["interns"]=payload;
  //   payload=newPayLoad;
  //   return this._super(...arguments);
  // }
});