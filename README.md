Node Mocha Skeleton
===================

NMS is a skeleton for building libraries in Node.JS. Clone the repo, and use it as a jumping-off point.

It demonstrates the approach I've gradually developed over the years for structuring my Node.JS libraries:

* it provides ready-to-run examples of the __mocha__ testing framework.
* it demonstrates the usage of __underscore__, as a way to prettify array and object manipulation.
* it demonstrates the usage of __optimist__, a great library for simplifying the building of command-line applications.

Directory Structure
-------------------------

* __lib/__ this is where all of your applications code will be stored. I approach my design in an OOP manner; hello.js contains a Hello class, banana.js a Banana class, etc.
* __test/__ mocha will discover any tests that you place in this directory. There is generally a corresponding library file for each test, e.g., hello.js has a corresponding hello-test.js.
* __bin/__ files within this folder expose a command-line-interface to your application. When _npm install -g_ is run, these scripts will be installed globally.
* __package.json__ this file serves several purposes: it provides meta-information surrounding your project: author, version, description, etc; it describes the directory structure of your project; it describes your project's dependencies, (running _npm install_ will install the dependencies described in package.json).
* __Makefile__ the make file is used to run the Mocha test framework. _npm test_ looks for this Makefile, and uses it to execute Mocha's test suite.
* __README.md__ a great README file is an important part of any project, take some time to learn the ins and outs of markdown.

Library Dependencies
--------------------

There are a few libraries that I pull into almost every Node.JS project that I begin:

* __[mocha](https://github.com/visionmedia/mocha)__ mocha is a light-weight testing framework for JavaScript. It provides both BDD and TDD interfaces, allowing you to choose whichever you feel more comfortable with.
* __[underscore](https://github.com/documentcloud/underscore)__ underscore provides functional programming constructs: map, reduce, extend, etc. It really helps to cleanup the logic surrounding array and object manipulation my applications.
* __[optimist](https://github.com/substack/node-optimist)__ optimst is a simple, powerful, command-line-argument parser.
* __[sinon](https://github.com/cjohansen/Sinon.JS)__ sinon is a stand-alone testing framework. I use it specifically for its stubbing functionality.

Bootstrapping Your First Project with NMS
-----------------------------------------

* Install the [current stable version of Node.JS](http://nodejs.org/download/)
  * NPM is now packaged along with Node.JS, hooray!
* Clone this repo _git clone git://github.com/bcoe/node-mocha-skeleton.git your-project-name_
* Run _npm install_ within the project directory.
* Run _npm test_.
* all tests should pass, if they don't:
  * try to fix any obvious dependency issues, do you have __make__ installed?
  * is the problem my fault, create an issue on this project.
* Modify the skeleton project to your heart's content:
  * remove the _.git_ folder.
  * run _git init_.
  * add your new project as the origin, _git remote add origin your-project-name.git_
  * edit the package.json, make it your own.
* Once you've built a killer library, make sure to publish it on NPM:
  * _npm adduser_
  * _npm publish_
  * _npm update_ when you roll new versions.

Copyright
---------

Copyright (c) 2013 Benjamin Coe. See LICENSE.txt for further details.