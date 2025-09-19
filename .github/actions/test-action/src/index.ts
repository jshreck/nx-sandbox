import * as core from '@actions/core';

try {
  const testValue = core.getInput('test_value');
  const envTestValue = process.env.TEST_VALUE;
  console.log('envTestValue:', envTestValue);
  console.log('testValue:', testValue);
} catch (error) {
  core.setFailed((error as Error).message);
}
