const connect = require('connect');
const serveStatic = require('serve-static');
const ngApiMock = require('ng-apimock')();
const mockRequestsFolder = 'src/app/testing/mocks';
const outputFolder = 'src/app/testing/mocks/output';

ngApiMock.watch(mockRequestsFolder);
ngApiMock.run({
  "src": mockRequestsFolder,
  "outputDir": outputFolder
});

const app = connect();
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use('/mocking', serveStatic(outputFolder));
app.listen(8080);
