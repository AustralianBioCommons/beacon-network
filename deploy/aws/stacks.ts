import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { BeaconNetworkStack } from "./beacon-network-stack";

const app = new cdk.App();

/**
 * Stack for Australian Biocommons
 */
new BeaconNetworkStack(app, "BeaconNetworkAustralianBiocommonsTest", {
  env: {
    account: "232870232581",
    region: "ap-southeast-2",
  },
  description: "HGPP Beacon Network",
  tags: {"Division": "HGPP"},
  secretArn: "arn:aws:secretsmanager:ap-southeast-2:232870232581:secret:BeaconNetwork-9awS2E",
  deployUrl: "https://beacon-network.test.biocommons.org.au",
});

/**
 * Stack for UMCCR dev
 */
new BeaconNetworkStack(app, "BeaconNetworkUmccrDev", {
  env: {
    account: "843407916570",
    region: "ap-southeast-2",
  },
  description: "HGPP Beacon Network",
  tags: {
    "umccr-org:Stack": "BeaconNetworkUmccrDev",
    "umccr-org:Product": "BeaconNetwork",
  },
  secretArn:
    "arn:aws:secretsmanager:ap-southeast-2:843407916570:secret:BeaconNetwork-zWANqf",
  deployUrl: "https://beacon-network.dev.umccr.org",
});

