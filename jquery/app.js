$(document).ready(function() {
    var colors = [ '#33c1ff', '#28a745']; // Colors for each string
    var currentIndex = 0;

    var typed = new Typed('#element', {
      strings: [' Web Analytics Specialist ',' ROI Catalyst ', 'Social Media Marketing', 'Conversion Rate Optimization', 'Search Engine Marketing'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      preStringTyped: function(arrayPos) {
        // Change color for each string
        currentIndex = arrayPos % colors.length; // Ensure the index is within bounds
        $('#element').css('color', colors[currentIndex]);
      }
    });
});

$(document).ready(function() {
    // Dynamically adjust image size for smaller devices
    function adjustImageSize() {
      const windowWidth = $(window).width();
      if (windowWidth < 768) {
        $('.image-content img').css('width', '330px');
        $('.image-content1 img').css('width', '350px');
      } else {
        $('.image-content img').css('width', '390px');
        $('.image-content1 img').css('width', '390px');
      }
    }

    // Call on page load and on window resize
    adjustImageSize();
    $(window).resize(function() {
      adjustImageSize();
    });
});

$(document).ready(function () {
    function animateProgress(selector, targetValue, speed) {
        let progressBar = $(selector);
        let progress = 0;

        let interval = setInterval(function () {
            if (progress >= targetValue) {
                clearInterval(interval);
                progressBar.removeClass('progress-bar-striped progress-bar-animated');
            } else {
                progress += 1; // Increment by 1%
                progressBar.css('width', progress + '%').attr('aria-valuenow', progress).text(progress + '%');
            }
        }, speed); // Control speed of progress
    }

    // Trigger animation for each progress bar
    animateProgress('.progress-bar-seo', 99, 50); // SEO - 90%
    animateProgress('.progress-bar-smm', 96, 35); // SMM - 85%
    animateProgress('.progress-bar-sem', 97, 60); // SEM - 80%
    animateProgress('.progress-bar-wa', 98, 45); // Web Analytics - 95%
});

$(document).ready(function () {
    $('.progress-circle').each(function () {
        const percentage = $(this).data('percentage');
        $(this).find('.circle-progress').css('--percentage', percentage);
        
        // Animate the percentage number
        let current = 0;
        const $percentageText = $(this).find('.percentage');
        const interval = setInterval(() => {
            if (current >= percentage) {
                clearInterval(interval);
            } else {
                current++;
                $percentageText.text(current + '+');
            }
        }, 2000 / percentage); // Speed depends on percentage value
    });
});

$(document).ready(function () {
    function adjustProgressCircles() {
        if ($(window).width() < 768) {
            $(".progress-circle").css({
                width: "120px",
                height: "120px",
            });
            $(".progress-circle .percentage").css("font-size", "20px");
            $(".progress-circle .label").css("font-size", "14px");
        } else {
            $(".progress-circle").css({
                width: "170px",
                height: "170px",
            });
            $(".progress-circle .percentage").css("font-size", "30px");
            $(".progress-circle .label").css("font-size", "16px");
        }
    }

    // Adjust circles on page load and window resize
    adjustProgressCircles();
    $(window).resize(adjustProgressCircles);
});


$(document).ready(function () {
    const $gallery = $('#left-gallery');

    // Click on small image to display in the main section with transition
    // Scroll functionality for arrows with smooth transition
    $('#arrow-up').on('click', function () {
        $gallery.animate({ scrollTop: $gallery.scrollTop() - 580 }, );
    });

    $('#arrow-down').on('click', function () {
        $gallery.animate({ scrollTop: $gallery.scrollTop() + 580 }, );
    });
});

$(document).ready(function () {
    const $end = $('#end-gallery');

    // Click on small image to display in the main section with transition
    // Scroll functionality for arrows with smooth transition
    $('#arrow-up-right').on('click', function () {
        $end.animate({ scrollTop: $end.scrollTop() - 580 }, );
    });

    $('#arrow-down-right').on('click', function () {
        $end.animate({ scrollTop: $end.scrollTop() + 580 }, );
    });
});


$(document).ready(function () {
    const $mainImage = $('#main-image');
  
    // Functionality for left gallery
    $('#left-gallery img').on('click', function () {
      const fullImage = $(this).data('full');
      $mainImage.attr('src', fullImage);
    });
  
    // Functionality for right gallery
    $('#end-gallery img').on('click', function () {
      const fullImage = $(this).data('full');
      $mainImage.attr('src', fullImage);
    });
});



$(document).ready(function () {
    const $gallery = $('#left-gallery');
    const $mainImage = $('#main-image');

    // Click on small image to display in the main section with transition
    $gallery.find('img').on('click', function () {
        const fullImage = $(this).data('full');
        $mainImage.css({ opacity: 1, transform: 'scale(0.99)' });
        setTimeout(() => {
            $mainImage.attr('src', fullImage).css({ opacity: 2, transform: 'scale(1)' });
        }, 100);
    });

    // Scroll functionality for arrows with smooth transition
    $('#arrow-up').on('click', function () {
        $gallery.animate({ scrollTop: $gallery.scrollTop() - 580 }, );
    });

    $('#arrow-down').on('click', function () {
        $gallery.animate({ scrollTop: $gallery.scrollTop() + 580 }, );
    });
});







$(document).ready(function () {
    const testimonials = $(".testimonial");
    let currentIndex = 0;

    function updateTestimonials() {
      testimonials.removeClass("active");
      testimonials.slice(currentIndex, currentIndex + 2).addClass("active");
      $("#prev").prop("disabled", currentIndex === 0);
      $("#next").prop("disabled", currentIndex + 2 >= testimonials.length);
    }

    $("#prev").click(function () {
      if (currentIndex > 0) {
        currentIndex -= 2;
        updateTestimonials();
      }
    });

    $("#next").click(function () {
      if (currentIndex + 2 < testimonials.length) {
        currentIndex += 2;
        updateTestimonials();
      }
    });

    updateTestimonials();
});



// $(document).ready(function () {
//     $(".nav-link").click(function () {
//         // Remove active class from all nav links
//         $(".nav-link").removeClass("active");
//         // Add active class to clicked link
//         $(this).addClass("active");

//         // Hide all card groups
//         $("div[id$='-cards']").addClass("d-none");
//         // Show the related card group
//         const target = $(this).attr("id") + "-cards";
//         $("#" + target).removeClass("d-none");
//     });
// });


// $(document).ready(function () {
//     // Smooth scroll for nav links
//     $('nav ul li a').click(function (e) {
//         e.preventDefault(); // Prevent default anchor click behavior
//         const target = $(this).attr('href'); // Get the target section ID
//         const targetPosition = $(target).offset().top; // Get the position of the target section

//         $('html, body').animate({
//             scrollTop: targetPosition - 50 // Scroll with offset (50px for nav height)
//         }, 800); // Duration in milliseconds
//     });
// });
