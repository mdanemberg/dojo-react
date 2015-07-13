export default function createComment(actionContext, payload, done) {
	actionContext.dispatch('CREATE_COMMENT', payload);
}
