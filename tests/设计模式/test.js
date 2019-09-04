// 单例模式
class Single {
  constructor(val) {
    this.val = val;
  }
  static getInstance(val) {
    if (!this.instance) {
      this.instance = new Single(val);
    }
    return this.instance;
  }
}
console.log(Single.getInstance(1) === Single.getInstance(2));

// 发布订阅者模式
class Event {
  constructor() {
    this.list = {};
  }
  listen(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  }
  trigger() {
    const key = [].shift.call(arguments);
    const fns = this.list[key];
    if (!fns || fns.length === 0) {
      return;
    }
    for(let i=0; i<fns.length; i++) {
      const fn = fns[i];
      fn.apply(this, arguments);
    }
  }
  remove(key, fn) {
    if (!this.list[key]) {
      return;
    }
    if (!fn) {
      this.list[key] = [];
    } else {
      for (let i=fns.length; i>=0; i--) {
        if (fns[i] === fn) {
          fns.splice(i, 1);
        }
      }
    }
  }
}

const event = new Event();
event.listen('color', function(val) {
  console.log(val);
})
event.listen('color', function(val) {
  console.log(`${val} 2`);
})
console.log('trigger');
event.trigger('color', 'red');
console.log('removed');
event.remove('color');
event.trigger('color', 'red');