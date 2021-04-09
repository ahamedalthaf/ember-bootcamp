import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		// return this.store.findAll('intern');
		return this.store.createRecord('intern');
	},

	actions: {
		create() {
			let employee = this.get('controller.model');
			employee.save().then((res) => {
				this.router.transitionTo('interns');
			});
		}
	}
});
