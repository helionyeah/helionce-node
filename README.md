# helionce-node
## Overview
This is a simple NodeJS express web application for testing the build, test, and deploy steps of the Helion CE under different scenarios.

## Branches
### master
Main branch that can be used to test a successful cloud foundry or docker build.

### build-failure
Branch that fails on build due to exit 1 on the postinstall script.

### test-failure
Branch with a failing test.

### missing-manifest
Branch with a missing missing manifest.

### docker-test
Branch to point a second project to for testing docker builds.
