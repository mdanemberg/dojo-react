export default function createPost(actionContext, payload, done) {
	actionContext.dispatch('CREATE_POST', payload);
}
