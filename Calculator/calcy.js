
let num1=0,num2=0,ans=0,op= ""
function appendToDisplay(value){
	let display = document.getElementById('display')
	display.value = display.value + value
	
}
function calculateResult(){
	let display = document.getElementById('display')
	num2 = display.value
	//console.log("num2",num2)
	//console.log("op",op)
	let expr = num1 + op + num2
	console.log(expr)
	let ans = eval(expr)//eval ek function hota hota kisi bhi value ko evaluate karne ke liye 
	display.value = ans
}

function clearDisplay(){
	let display = document.getElementById('display')
	display.value =""
} 
function selectOp(value){
	op= value
	let display = document.getElementById('display')
	num1 =display.value
	//console.log("num1",num1)
	clearDisplay()
}