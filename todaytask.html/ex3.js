var pass_word = $('#pass-word');
	var verify_password	= $('#verify-pass-word');
	var password_status = $('#pass-status');
	password_status.hide();
	$(".pass-word-field").keyup(function(e) 
	{
		pass_word = $(this).attr('id') == "pass-word" ? $(this) : $('#pass-word-two');
		if ($(pass_word).val() == "")
		{
			password_status.hide();
			return false;
		}
		else
		{
			password_status.show();
			if(very_strong_password.test(pass_word.val()) )
			{
				password_status.removeClass().addClass('very_strong_password').html("Very strong...");
			}	
			else if( just_strong_password.test(pass_word.val()) )
			{
				password_status.removeClass().addClass('just_strong_password').html("Strong...");
			}	
			else if( good_password.test(pass_word.val()) )
			{
				password_status.removeClass().addClass('considrate_pass').html("Good...");
			}
			else if( weak_password.test(pass_word.val()) )
			{
				password_status.removeClass().addClass('password_is_weak').html("Still Weak...");
			}
			else
			{
				password_status.removeClass().addClass('weak_password').html("Very Weak...");
			}
		}
	});