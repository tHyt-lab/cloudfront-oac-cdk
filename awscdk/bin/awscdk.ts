#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsCdkCloudfrontStack } from "../lib/awscdk-stack";

const app = new cdk.App();
new AwsCdkCloudfrontStack(app, "AwsCdkCloudfrontStack", {});
