function object(o){
	function F(){}
	F.prototype=o.prototype;
	return new F();
}
function inheritPrototype(sup,sub){
	let pro=object(sup);
	pro.constructor=sub;
	sub.prototype=pro;
}
function sup(name){
	this.name=name;
}
super.prototype={
	constructor:sup,
	sayName:()=>{
		alert(this.name);
	}
}
function sub(name,age){
	sup.call(this,name);
	this.age=age;
}
inheritPrototype(sup,sub);
sub.prototype.sayAge=()=>{
	alert(this.age);
}
let instance1=new sub("mzw",21);
let instance2=new sub("ljx",20);
instance1.sayName();
instance2.sayAge();

