$(document).ready(function(){
	$('#ckmsg').css('display', 'none');
	$('#repw').keyup(function(){
		var pw = $('#password').val();
		var repw = $('#repw').val();
		
		if(pw == repw){
			$('#repw').removeAttr('name');
			$('#ckmsg').html('* 비밀번호가 일치합니다 *').css('color', 'blue');
			$('#ckmsg').css('display', 'block');
		} else {
			$('#ckmsg').html('# 비밀번호가 일치하지 않습니다. #').css('color', 'red');
			$('#ckmsg').css('display', 'block');
		}
	});
});

$('#idckbtn').click(function() {
	var sid = $('#id').val();
	var idPat = /^[\w]{4,10}$/;
	var idResult = idPat.test(sid);
	
	if(idResult) {
		$('#idck').html('* 사용가능한 아이디입니다 *').css('color', 'blue');
		$('#idck').css('display', 'block');
	} else {
		$('#idck').html('# 사용 불가능한 아이디입니다. #').css('color', 'red');
		$('#idck').css('display', 'block');
	}
});

$('#mgen').click(function(){
	$('.avatar').css('display', 'block');
	$('.male').css('display', 'inline-block');
	$('.female').css('display', 'none');
});

$('#fgen').click(function(){
	$('.avatar').css('display', 'block');
	$('.male').css('display', 'none');
	$('.female').css('display', 'inline-block');
});

$('#hbtn').click(function() {
	location.href = '/black/';
});

// join
$('#jbtn').click(function(){
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('password').value;
	var srepw = document.getElementById('repw').value;
	var smail = document.getElementById('mail').value;
	var stel = document.getElementById('tel').value;

	var idPat = /^[a-zA-Z0-9]{4,10}$/;
	var pwPat = /^[a-zA-Z0-9]{4,10}$/;
	var mailPat = /^.{4,10}$/;
	var telPat = /^[0-9]{3}\-[0-9]{4}\-[0-9]{4}$/;

	var idResult = idPat.test(sid);
	var pwResult = pwPat.test(spw);
	var mailResult = mailPat.test(smail);
	var telResult = telPat.test(stel);
	
	if(idResult && pwResult && spw == srepw && mailResult && telResult) {
		$('#fid').val(sid);
		$('#fpw').val(spw);
		
		document.getElementById('frm').submit();
	} else if(!telResult) {
		$('#tel').val('');
		$('#tel').focus();
	} else if(!mailResult) {
		$('#mail').val('');
		$('#mail').focus();
	} else if(!pwResult) {
		$('#password').val('');
		$('#repw').val('');
		$('#password').focus();
	} else if(spw != srepw) {
		$('#password').val('');
		$('#repw').val('');
		$('#password').focus();
	} else if(!idResult) {
		$('#id').val('');
		$('#id').focus();
	} else {
		$('#id').val('');
		$('#password').val('');
		$('#repw').val('');
		$('#mail').val('');
		$('#tel').val('');
		$('#id').focus();
	}
});

// reset
$('#rbtn').click(function(){
	document.form1.reset();
	$('.avatar').css('display', 'none');
});

