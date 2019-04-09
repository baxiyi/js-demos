const app=new Vue({
	el:'#first',
		data:{
			text:'hello vue',
			seen:true,
		},
		computed:{
			reverseText:function(){
				return this.text.split(' ').reverse().join(' ');
			}
		}
});
const app2=new Vue({
	el:"#second",
	data:{
		colors:["red","yellow","green"]
	}
});
const app3=new Vue({
	el:'#third',
	data:{
		isActive:true
	},
	computed:{
		classObject:function(){
			return{
				active:this.isActive
			}
		}
	}
});
const app4=new Vue({
	el:'#fourth',
	data:{
		styleObject:{
			color:'red'
		}
	}
});
const app5=new Vue({
	el:'#fifth',
	data:{
		parentMessage:'Parent',
		items:[
			{message:'Foo'},
			{message: 'Bar'}
		],
		object:{
			name:'mzw',
			age:21
		}
	},
	computed:{
		filitems:function(){
			return this.items.filter(function(item,index){
				return index>0;
			})
		}
	}
});
Vue.set(app5.items,2,{message:'mzw'});
app5.$set(app5.items,3,{message:'mmmm'});
/*Object.assign(app5.object,{
	address:'Dalian'
})*/
//正确方法
app5.object=Object.assign({},app5.object,{
	address:'Dalian'
})
//添加数组新项
//Vue.set(array,index,value);
//为对象添加属性
//Vue.set(object,key,value);
//v-for="n in 10" 也可以取常量
//v-for优先级高于v-if，如果要用v-if作为循环条件，需要放在外层
const app6=new Vue({
	el:'#sixth',
	data:{
		btnMessage:"you click me"
	},
	methods:{
		btnClick:function(){
			alert(this.btnMessage);
		}
	}
})
//修饰符:.prevent,.stop,.self,.capture,.once,.passive
//表单操作
//对于表单操作,text类型忽略value属性,checkbox忽略checked属性,select忽略selected属性
//修饰符.lazy:只有change的时候才触发事件，而不是input
//.number:将输入结果变为Number
//.trim:输入结果调用trim()方法
const app7=new Vue({
	el:'#seventh',
	data:{
		content:'',
		checked:false,
		selected:[]
	}
})