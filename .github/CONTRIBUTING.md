# Contributing to the Cymbals edge application

## Overview
Dependencies: 
  - NodeJS
  - ExpressJS

## Testing

- Framework: **Mocha**
- Assertions: **Chai**
- Spies, Stubs & Mocks: **Sinon**, with the **Sinon-Chai** assertion add-on

### Unit Testing
All critical logic should be backed by unit tests to protect against functionality regressions. Code coverage is strictly enforced and is a consideration when determining the quality of the release. 

Please follow the examples below when creating new tests. 

#### Examples

##### Controller Tests
```js
// hello-controller.spec.js

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
```

```js
// hello-controller.js

module.exports = {
  hello: (req, res) => res.send('Hello World, from Controller!')
};
```