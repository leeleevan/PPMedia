/*=================================*/
/* 16. Team member carousel
/*=================================*/
var TeamMemberCarouselHandler = function($scope, $) {
    var $carousel = $scope.find(".eael-tm-carousel").eq(0),
        $pagination =
            $carousel.data("pagination") !== undefined
                ? $carousel.data("pagination")
                : ".swiper-pagination",
        $arrow_next =
            $carousel.data("arrow-next") !== undefined
                ? $carousel.data("arrow-next")
                : ".swiper-button-next",
        $arrow_prev =
            $carousel.data("arrow-prev") !== undefined
                ? $carousel.data("arrow-prev")
                : ".swiper-button-prev",
        $items =
            $carousel.data("items") !== undefined ? $carousel.data("items") : 3,
        $items_tablet =
            $carousel.data("items-tablet") !== undefined
                ? $carousel.data("items-tablet")
                : 3,
        $items_mobile =
            $carousel.data("items-mobile") !== undefined
                ? $carousel.data("items-mobile")
                : 3,
        $margin =
            $carousel.data("margin") !== undefined
                ? $carousel.data("margin")
                : 10,
        $margin_tablet =
            $carousel.data("margin-tablet") !== undefined
                ? $carousel.data("margin-tablet")
                : 10,
        $margin_mobile =
            $carousel.data("margin-mobile") !== undefined
                ? $carousel.data("margin-mobile")
                : 10,
        $speed =
            $carousel.data("speed") !== undefined
                ? $carousel.data("speed")
                : 400,
        $autoplay =
            $carousel.data("autoplay") !== undefined
                ? $carousel.data("autoplay")
                : 999999,
        $loop =
            $carousel.data("loop") !== undefined ? $carousel.data("loop") : 0,
        $grab_cursor =
            $carousel.data("grab-cursor") !== undefined
                ? $carousel.data("grab-cursor")
                : 0,
        $data_id =
            $carousel.data("id") !== undefined ? $carousel.data("id") : "",
        $pause_on_hover =
            $carousel.data("pause-on-hover") !== undefined
                ? $carousel.data("pause-on-hover")
                : "",
        $slider_options = {
            direction: "horizontal",
            speed: $speed,
            slidesPerView: $items,
            spaceBetween: $margin,
            grabCursor: $grab_cursor,
            loop: $loop,
            autoplay: {
                delay: $autoplay
            },
            pagination: {
                el: $pagination,
                clickable: true
            },
            navigation: {
                nextEl: $arrow_next,
                prevEl: $arrow_prev
            },
            breakpoints: {
                // when window width is <= 480px
                480: {
                    slidesPerView: $items_mobile,
                    spaceBetween: $margin_mobile
                },
                // when window width is <= 640px
                768: {
                    slidesPerView: $items_tablet,
                    spaceBetween: $margin_tablet
                }
            }
        };

    var TeamSlider = new Swiper($carousel, $slider_options);
    if (0 == $autoplay) {
        TeamSlider.autoplay.stop();
    }

    if ($pause_on_hover && $autoplay !== 0) {
        $carousel.on("mouseenter", function() {
            TeamSlider.autoplay.stop();
        });
        $carousel.on("mouseleave", function() {
            TeamSlider.autoplay.start();
        });
    }
};

jQuery(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/eael-team-member-carousel.default",
        TeamMemberCarouselHandler
    );
});
