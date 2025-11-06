//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const otpCode = document.querySelectorAll('.code');
	const firstOtp = document.getElementById('code-1');
	firstOtp.focus();
	otpCode.forEach((input,index)=>{
		input.addEventListener('input',(e)=>{
			if(e.target.value.length==1 && index<otpCode.length-1){
				otpCode[index+1].focus();
			}
		})

		input.addEventListener('keydown',(e)=>{
			if(e.key==='Backspace' && e.target.value.length==0 && index>0){
				otpCode[index-1].focus();
			}
		})
	})
})