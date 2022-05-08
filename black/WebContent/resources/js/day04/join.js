$(document).ready(function(){
	$('#ckmsg').css('display', 'none');
	$('#repw').keyup(function(){
		var pw = $('#password').val();
		var repw = $('#repw').val();
		
		if(pw == repw){
			$('#repw').removeAttr('name');
			$('#ckmsg').html('*** 비밀번호가 일치합니다. ***').css('color', 'blue');
			$('#ckmsg').css('display', 'block');
		} else {
			$('#ckmsg').html('*** 비밀번호가 다릅니다. ***').css('color', 'red');
			$('#ckmsg').css('display', 'block');
		}
	});
});

document.getElementById('idckbtn').onclick = function() {
	var sid = document.getElementById('id').value;
	var idPat = /^[a-zA-Z0-9]{4,10}$/;
	var idResult = idPat.test(sid);
	
	if(idResult) {
		$('#idck').html('*** 사용가능한 아이디입니다. ***').css('color', 'blue');
		$('#idck').css('display', 'block');
	} else {
		$('#idck').html('*** 사용할 수 없는 아이디입니다. ***').css('color', 'red');
		$('#idck').css('display', 'block');
	}
};

// join
document.getElementById('jbtn').onclick = function(){
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('password').value;	
	var smail = document.getElementById('mail').value;
	var stel = document.getElementById('tel').value;

	var idPat = /^[a-zA-Z0-9]{4,10}$/;
	var pwPat = /^[a-zA-Z0-9]{4,10}$/;
	var mailPat = /^[a-zA-Z0-9]{4,10}$/;
	var telPat = /^[0-9]{11,11}$/;

	var idResult = idPat.test(sid);
	var pwResult = pwPat.test(spw);
	var mailResult = mailPat.test(smail);
	var telResult = telPat.test(stel);
	
	if(idResult && pwResult && mailResult && telResult) {
		document.getElementById('fid').value = sid;
		document.getElementById('fpw').value = spw;
		
		document.getElementById('frm').submit();
	} else {
		document.getElementById('id').value = '';
		document.getElementById('password').value = '';
		document.getElementById('repw').value = '';
		document.getElementById('mail').value = '';
		document.getElementById('tel').value = '';
		document.getElementById('id').focus();
	}
};

// reset
document.getElementById('rbtn').onclick = function(){
	document.getElementById('name').value = '';
	document.getElementById('id').value = '';
	document.getElementById('password').value = '';
	document.getElementById('repw').value = '';
	document.getElementById('mail').value = '';
	document.getElementById('tel').value = '';
	document.getElementById('mgen').reset;
};

