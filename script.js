

const Name=document.querySelector('#Name')
const LastName=document.querySelector('#lastName')
const NumbeR=document.querySelector('#Number')
const Submit=document.querySelector('#btnSend')
const statusName=document.querySelector('#statusName')
// FORMUMAIRE
const form=document.querySelector('#form')






// EVENT LISTENNER ON SUBMIT

form.addEventListener('submit',request)



function request(event){
	event.preventDefault()
	
	const nameValue=Name.value.trim()
	const lastNameValue=LastName.value.trim()
	const NumbeRValue=NumbeR.value.trim()
	
	if(!nameValue ){
		 erroroninput(Name,"Name shoud'nt be empy")
		 return
	
	}else{
		succesoninput(Name)

	}
	if(!lastNameValue ){
		erroroninput(LastName,"Lastname shoud'nt be empy")
		 return
	}else{
		succesoninput(LastName)

	}
	if(!NumbeRValue){
		erroroninput(NumbeR,"Number shoud'nt be empy")
		return
		
	}else{
		succesoninput(NumbeR)

	}

	console.log("validated")
	console.log(typeof(NumbeRValue))
	

}



function erroroninput(input,message){
	const Parent=input.parentElement
	const messageDiv=Parent.querySelector('div')
	const icon=Parent.querySelectorAll('i')
	
	messageDiv.style.display="block";
	messageDiv.innerHTML=message;
	input.classList.add("error")
}
function succesoninput(input){
	const Parent=input.parentElement
	const messageDiv=Parent.querySelector('div')
	const icon=Parent.querySelectorAll('i')
	messageDiv.style.display="none";
	
	input.classList.add("succes")
}