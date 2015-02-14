   $(document).ready(function() {

        $('form').formchimp({
    //'appendElement' : "",
    'buttonText' : 'Thanks!',
    'errorMessage' : 'Please enter a valid email!',
    'responseClass' : 'mc-response text-center',
    'successMessage' : 'Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.',
    //'url': actionUrl,
    });

      $(document).on('click', 'a[href*="#"]', function() {
        var slashedHash = '#/' + this.hash.slice(1);
        if ( this.hash ) {

          if ( slashedHash === location.hash ) {
            $.smoothScroll({scrollTarget: this.hash});
          } else {
            $.bbq.pushState(slashedHash);
          }

          return false;
        }
      });

      $(window).bind('hashchange', function(event) {
        var tgt = location.hash.replace(/^#\/?/,'');
        if ( document.getElementById(tgt) ) {
          $.smoothScroll({scrollTarget: '#' + tgt});
        }
      });

      $(window).trigger('hashchange');
    });
    $(document).foundation();