/// <reference types="cypress" />

describe('Testes de API - JSONPlaceholder', () => {
  // Valida tempo de resposta (mantido simples e local)
  const validateResponseTime = (response, max = 500) => {
    expect(response, 'response object').to.exist;
    expect(response.duration, 'response.duration').to.be.a('number');
    expect(response.duration).to.be.lessThan(max);
  };

  // Centraliza endpoints pra evitar repetição
  const endpoints = {
    posts: '/posts',
    postById: (id) => `/posts/${id}`,
    commentsByPost: (id) => `/posts/${id}/comments`,
    commentsByQuery: (postId) => `/comments?postId=${postId}`,
  };

  // ---------------- GET ----------------
  it('GET /posts - deve retornar todos os posts', () => {
    cy.request(endpoints.posts).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.all.keys('userId', 'id', 'title', 'body');
    });
  });

  it('GET /posts/1 - deve retornar o post com id 1', () => {
    cy.request(endpoints.postById(1)).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
      expect(response.body).to.have.all.keys('userId', 'id', 'title', 'body');
    });
  });

  it('GET /posts/1/comments - deve retornar os comentários do post 1', () => {
    cy.request(endpoints.commentsByPost(1)).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.all.keys('postId', 'id', 'name', 'email', 'body');
    });
  });

  it('GET /comments?postId=1 - via query param', () => {
    cy.request(endpoints.commentsByQuery(1)).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('postId', 1);
    });
  });

  // ------------- POST / PUT / PATCH / DELETE -------------
  it('POST /posts - deve criar um novo post', () => {
    const newPost = { title: 'novo post', body: 'conteúdo do post', userId: 1 };

    cy.request('POST', endpoints.posts, newPost).then((response) => {
      expect(response.status).to.eq(201);
      validateResponseTime(response);
      expect(response.body).to.include.keys('title', 'body', 'userId', 'id');
      expect(response.body.title).to.eq(newPost.title);
    });
  });

  it('PUT /posts/1 - deve atualizar o post com id 1', () => {
    const updatedPost = { id: 1, title: 'titulo atualizado', body: 'novo conteúdo', userId: 1 };

    cy.request('PUT', endpoints.postById(1), updatedPost).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
      expect(response.body.title).to.eq(updatedPost.title);
      expect(response.body.body).to.eq(updatedPost.body);
    });
  });

  it('PATCH /posts/1 - deve atualizar parcialmente o post', () => {
    const partialUpdate = { title: 'titulo parcial' };

    cy.request('PATCH', endpoints.postById(1), partialUpdate).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
      expect(response.body.title).to.eq(partialUpdate.title);
    });
  });

  it('DELETE /posts/1 - deve deletar o post com id 1', () => {
    cy.request('DELETE', endpoints.postById(1)).then((response) => {
      expect(response.status).to.eq(200);
      validateResponseTime(response);
    });
  });
});
