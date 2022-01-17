const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      }).timeout(10000);
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana', summary: 'milanesa a la napolitana' });
      });
    });
    describe('summary', () => {
      it('should throw an error if summary is null', (done) => {
        Recipe.create({ name: 'Milanesa a la napolitana' })
        .then(() => done(new Error('It requires a summary')))
        .catch(() => done())
      }).timeout(10000);
      it('should work when its a valid name and sumary', () => {
        Recipe.create({ name: 'Milanesa a la napolitana', summary: 'milanesa a la napolitana'})
      }).timeout(10000);
    });
  });
});

