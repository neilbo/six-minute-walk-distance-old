# Six Minute Walk Distance

Designs: [Marvel app](https://marvelapp.com/4jagfg7)

Project management: [Waffle.io](https://waffle.io/neilbo/six-minute-walk-distance)

This is an open source six minute walk distance calculator often used for the six minute walk test.
If you are familiar with nursing, cardiac rehabilitation (phase 2), pulmonary rehabilitation this may make sense to you.

### Stuff you need

1. git
2. nodejs
3. npm
4. ionic v2

## Installation

1. clone this project `git clone git@github.com:neilbo/six-minute-walk-distance.git`
2. install ionic `npm install -g ionic cordova`
3. run ionic serve `ionic serve` or `ionic serve -l`

## Getting started

1. Install ios deploy `sudo npm install -g ios-deploy --unsafe-perm=true --allow-root`
2. Install ios sim `sudo npm install -g ios-sim`

## Tests

Follow [this guide](http://roblouie.com/article/376/ionic-2-set-up-unit-testing-the-best-way/) 
by [@roblouie](https://github.com/roblouie/) for setup unit tests

Uses 
* [Karma](https://karma-runner.github.io/1.0/index.html) - Test Runner 
* [Jasmine](https://jasmine.github.io/2.0/introduction.html) - Testing Framework

Please read for adding unit tests to ionicframework
 * https://forum.ionicframework.com/t/ionic-2-x-official-unit-testing-example/83527
 * https://github.com/driftyco/ionic-unit-testing-example
 * http://roblouie.com/article/376/ionic-2-set-up-unit-testing-the-best-way/
 * https://github.com/roblouie/unit-testing-demo

Run unit tests: in another terminal window

```
npm test
```
Will open it up in Chrome where you can debug

Unit tests:
* Should live alongside the components they test
* Should be named after component but with .spec appended

```
conversion-service.ts
conversion-service.spec.ts
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
