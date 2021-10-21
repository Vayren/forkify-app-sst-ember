import * as sst from "@serverless-stack/resources";

export default class FrontendStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Define our Ember app
    const site = new sst.StaticSite(this, "Site", {
      path: "frontend",
      buildOutput: "dist",
      buildCommand: "npm run build"
    });

    // Show the url in the output
    this.addOutputs({
      SiteUrl: site.url,
    });
  }
}