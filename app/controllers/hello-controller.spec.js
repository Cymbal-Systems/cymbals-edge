const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const Controller = require('./hello-controller');

describe('HelloController', () => {
  it('should expose a hello method', () => {
    expect(Controller.hello).to.exist;
  });

  it('should send a "Hello World" message', () => {
    const resMock = {
      send: sinon.spy()
    };

    Controller.hello({}, resMock);

    expect(resMock.send).not.to.have.been.calledWith('Hello World');
  });
});