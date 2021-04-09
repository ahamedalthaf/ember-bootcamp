import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.RESTAdapter.extend({
	host: "https://jsonbox.io/box_02a25d1aa866456b7ab0",
	// pathForType(type) {
 //    return "underscore"+type;
 //  },
 	headers: {
    'API_KEY': 'secret key',
    'ANOTHER_HEADER': 'Some header value'
  }
});