# bs-aeson-specs

Test [bs-aeson](https://github.com/plow-technologies/bs-aeson) serialization against an auto-generated servant server from [ocaml-export](https://github.com/plow-technologies/ocaml-export).

## Changes

### 3.0.0

* Breaking change: support for testing against a server has been dropped because bs-node-fetch is not compatible with the latest bs-platform. Now this package focuses on file based testing. Golden serialization files are produced by Haskell and tested by Haskell and ReasonML.
* Update bs-platform to 5.0.4.
* Update bs-fetch to 0.5.0.
* Delete bs-node-fetch dependency.
* Delete functions: `serverSpec` and `sampleGoldenAndServerSpec`.
* Delete Haskell server for server testing.
* Delete `toJsObject`, it was previously used internally but no longer needed.

### 2.2.0

* Update bs-aeson dependency to 3.1.0, bs-fetch to 3.1.0, bs-node-fetch to 3.0.0, bs-jest to 0.4.8 and bs-platform to 4.0.18.

### 2.1.0

* Update bs-aeson dependency to 3.0.0.

### 2.0.0

* Replace `Js.Result.t` with `Belt.Result.t`.
* Depends on bs-platform >= 3.1.0 and bs-aeson >= 2.0.0.

### 1.2.2

* Move bs-platform to devDependencies.

### 1.2.1

* Fix dependency issue. 1.2.0 is broken.

### 1.2.0

* Add `goldenDirSpec` function.

* Update `@glennsl/bs-jest` dependency to `0.4.1`.

* Update `bs-platform` to `2.2.0`.

### 1.1.0

* Initiate project with a set of tests functions.
