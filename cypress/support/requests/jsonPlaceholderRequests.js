export const JsonPlaceholderRequests = {
  getAllPosts() {
    return cy.request('/posts');
  },

  getPostById(id) {
    return cy.request(`/posts/${id}`);
  },

  getCommentsByPostId(id) {
    return cy.request(`/posts/${id}/comments`);
  },

  getCommentsByQuery(postId) {
    return cy.request(`/comments?postId=${postId}`);
  },

  createPost(body) {
    return cy.request('POST', '/posts', body);
  },

  updatePost(id, body) {
    return cy.request('PUT', `/posts/${id}`, body);
  },

  patchPost(id, body) {
    return cy.request('PATCH', `/posts/${id}`, body);
  },

  deletePost(id) {
    return cy.request('DELETE', `/posts/${id}`);
  },
};
