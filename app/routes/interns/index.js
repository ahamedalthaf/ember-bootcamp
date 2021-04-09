import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { set, get, computed, setProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
	sample: service(),
	model() {
		return this.store.findAll('intern');
	},

	beforeModel() {
		// this.transitionTo('/');
		console.log('beforeModel');
	},

	afterModel(model) {
		console.log('aftermodel');
	},

	setupController(controller) {
		this._super(...arguments);
		set(controller, 'showBanner', this.sample.showBanner);
		console.log(this.controller);
	},

	activate() {
		console.log('activate');
	    this._browserAlert = this._showBrowserNavigationAlert.bind(this);
	    window.addEventListener('beforeunload', this._browserAlert, false);
	},

	deactivate() {
		console.log('deactivate');
    	window.removeEventListener('beforeunload', this._browserAlert, false);
	},

	actions: {
		delete(id) {
			let intern = this.store.peekRecord('intern', id);
			intern.deleteRecord();
			intern.save();
		},
		update(id) {
			let intern = this.store.peekRecord('intern', id);
			intern.save();
		},
		toggleBanner(isBanner) {
			set(this, 'controller.showBanner', !isBanner);
		}
	},

	_showBrowserNavigationAlert(event) {
      return event.returnValue = true;
  	}
});
