// Weak sets & maps only accept objects and give error on setting primitive types i.e. numbers and strings.

const ws = new WeakSet();
ws.add({a: 1, b:2});
console.log(ws);

const wm = new WeakMap();
const user = {name:'Ahsan'};
wm.set(user, true);
console.log(wm);
