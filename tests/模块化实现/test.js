const MyModules = (function Manager() {
  var modeules = {};
  function define(name, deps, impl) {
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modeules[deps[i]];
    }
    modeules[name] = impl.apply(impl, deps);
  }
  function get(name) {
    return modeules[name];
  }
  return {
    define,
    get,
  }
})();
MyModules.define('helloModule', [], function() {
  function hello(who) {
    return `hello ${who}`;
  }
  return {
    hello,
  }
});
MyModules.define('herHelloModule', ['helloModule'], function(helloModule) {
  function awesome() {
    console.log(`${helloModule.hello('ljx')}, I miss you`);
  }
  return {
    awesome,
  }
});

var foo = MyModules.get('helloModule');
var bar = MyModules.get('herHelloModule');
console.log(foo.hello('mzw'));
bar.awesome();