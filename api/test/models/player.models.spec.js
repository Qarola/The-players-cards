const { Player, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Player model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Player.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Player.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      }).timeout(10000);
      it('should work when its a valid name', () => {
        Player.create({ name: 'me encanta desarrollar' });
      });
    });
    describe('status', () => {
      it('should throw an error if status is null', (done) => {
        Player.create({ name: 'Me encanta desarrollar' })
        .then(() => done(new Error('It requires a sttus')))
        .catch(() => done())
      }).timeout(10000);
      it('should work when its a valid name and status', () => {
        Player.create({ name: 'Me encanta desarrollar', status: 'me encanta desarrollar'})
      }).timeout(10000);
    });
  });
});
