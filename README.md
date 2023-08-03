Workspace Link - [Click Me](https://devspaces.apps.cluster-225g7.225g7.sandbox1786.opentlc.com/kube-admin/quiz-client-gitea/3100/)




= .NET Core Sample App for OpenShift

This repository contains a simple MVC .NET Core application that can be deployed on OpenShift.

The example is meant to be built and run with the https://github.com/redhat-developer/s2i-dotnetcore[s2i-dotnetcore] builder
images. The branches of this repository correspond to versions of the s2i-dotnetcore images.

== Deploying the application

You can deploy the application using the OpenShift client (`oc`) with the following commands:

[source]
----
# Create a new OpenShift project
$ oc new-project pipelines-quiz-client

# Add the .NET Core application
$ oc new-app dotnet:7.0-ubi8~https://github.com/redhat-developer/s2i-dotnetcore-ex#dotnet-7.0 --context-dir quiz-client

# Make the .NET Core application accessible externally and show the url
$ oc expose service s2i-dotnetcore-ex
$ oc get route s2i-dotnetcore-ex
----

== Copyright and License

Copyright 2022 by Red Hat, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this package except in compliance with the License (see the `LICENSE` file
included in this distribution). You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
