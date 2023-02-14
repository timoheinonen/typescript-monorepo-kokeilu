import {Hello} from 'shared-library';
//import {LambdaWithDependencyToAwsCdkLib, LambdaWithoutAnyExternalDependencies} from "shared-library/lambda";

new Hello();

const lambdaWithoutDeps = new LambdaWithoutAnyExternalDependencies();

const lambda = new LambdaWithDependencyToAwsCdkLib(null, 'asd');
