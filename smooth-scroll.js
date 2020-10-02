$(document).ready(function(){
    // smooth scroll for all links
    $('a').on('click', function(event) {

        // Check if this.hash has a value before altering anchor behavior
        if (this.hash !== '') {
        // Stop default click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Jquery Animate method with xxx milliseconds to scroll section
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){

                // Add hash (#) to URL to show id when done scrolling
                window.location.hash = hash;
            });
        } // End if
    });
});