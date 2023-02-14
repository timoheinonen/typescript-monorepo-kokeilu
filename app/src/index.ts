import {Hello} from 'shared-library';
import {LambdaWithDependencyToAwsCdkLib, LambdaWithoutAnyExternalDependencies} from "shared-library/lambda";
import {Construct} from "constructs";

new Hello();

const lambdaWithoutDeps = new LambdaWithoutAnyExternalDependencies();
export class CustomConstruct extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);
    }
}

const lambda = new LambdaWithDependencyToAwsCdkLib(new CustomConstruct(null, 'asdasdas'), 'asd');
