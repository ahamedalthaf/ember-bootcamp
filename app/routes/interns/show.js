import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		// return this.store.findRecord('intern', params.id);
		// return this.store.findRecord('intern', params.id, { 'backgroundReload': false} );
		return this.store.peekRecord('intern', params.id);
	}
});
