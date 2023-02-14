import { Construct } from "constructs";

export class LambdaWithoutAnyExternalDependencies {

};

export class LambdaWithDependencyToAwsCdkLib extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}
