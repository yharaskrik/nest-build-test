module.exports = {
  name: 'build-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/build-test',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
