$(document).ready(function () {
    const $backToTop = $('#back-to-top');

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $backToTop.fadeIn(); // Show the button
      } else {
        $backToTop.fadeOut(); // Hide the button
      }
    });

    $backToTop.on('click', function () {
        window.scrollTo({ top: 0 });
      });


    // Open modal
    $('.modal-trigger').on('click', function (e) {
        e.preventDefault();
        const modalId = $(this).data('target');
        const $modal = $(`#${modalId}`);
        
        $modal.addClass('show'); 
    });
    
    // Close modal on "X" click
    $('.close-btn').on('click', function (e) {
        e.preventDefault();
        const $modal = $('.modal');
        
        $modal.removeClass('show');
    });
    
    // Close modal on overlay click
    $('.modal').on('click', function (e) {
        if ($(e.target).is('.modal')) {
            const $modal = $(this);
            $modal.removeClass('show'); 
        }
    });

    $('.accordion-header').on('click', function () {
        const $content = $(this).next('.accordion-content');

        // Remove the 'open' class from all content
        $('.accordion-content').removeClass('show');

        // Toggle the 'open' class for the clicked content
        $content.toggleClass('show'); 
    });
});