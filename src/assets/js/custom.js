var $=jQuery;$('body').addClass('lazyload-enabled');$('#search-list li').click(function(){$('#searchform').attr('action',$(this).data('action'));$('#searchform').attr('method',$(this).data('name')=='q'?'GET':'POST');$('#searchinput').attr('name',$(this).data('name'));$('#searchinput').attr('placeholder',$(this).data('placeholder'));$('#search-list').removeClass("in")})
$('#footer-subscribe').click(function(e){e.preventDefault();$(this).parents('form').addClass('form-submitting');var email=$('#footer-email').val();$.post('<?=base_url();?>news/subscribe',{email:email},function(res){var result=JSON.parse(res);$('#footer-subscribe').parents('form').removeClass('form-submitting');$('#footer-subscribe').parents('form').next('.ld_sf_response').html(result.msg);});});