// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as Awscdk from '../lib/awscdk-stack';

import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AwsCdkCloudfrontStack } from "../lib/awscdk-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/awscdk-stack.ts
test("snapshot test", () => {
	const app = new App();

	const stack = new AwsCdkCloudfrontStack(app, "MyTestStack");

	const template = Template.fromStack(stack);

	expect(template.toJSON()).toMatchSnapshot();
});
