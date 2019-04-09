function factorial(num){
	if(num<=1)
		return 1;
	else
		return num*arguments.callee(num-1);
}
//apply方法传递一个参数数组，call方法传递每个参数，bind方法之传入一个作用范围对象，返回一个可以在该作用域上运行的函数