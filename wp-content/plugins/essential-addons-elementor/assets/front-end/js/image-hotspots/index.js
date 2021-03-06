var ImageHotspotHandler = function($scope, $) {
    $(".eael-hot-spot-tooptip").each(function() {
        var $position_local = $(this).data("tooltip-position-local"),
            $position_global = $(this).data("tooltip-position-global"),
            $width = $(this).data("tooltip-width"),
            $size = $(this).data("tooltip-size"),
            $animation_in = $(this).data("tooltip-animation-in"),
            $animation_out = $(this).data("tooltip-animation-out"),
            $background = $(this).data("tooltip-background"),
            $text_color = $(this).data("tooltip-text-color"),
            $arrow =
                $(this).data("eael-tooltip-arrow") === "yes" ? true : false,
            $position = $position_local;

        if (
            typeof $position_local === "undefined" ||
            $position_local === "global"
        ) {
            $position = $position_global;
        }
        if (typeof $animation_out === "undefined" || !$animation_out) {
            $animation_out = $animation_in;
        }

        $(this).tipso({
            speed: 200,
            delay: 200,
            width: $width,
            background: $background,
            color: $text_color,
            size: $size,
            position: $position,
            animationIn: $animation_in,
            animationOut: $animation_out,
            showArrow: $arrow
        });
    });

    $(".eael-hot-spot-wrap").on("click", function(e) {
        e.preventDefault();
        
        $link = $(this).data("link");
        $link_target = $(this).data("link-target");
        
        if (typeof $link != 'undefined' && $link != '#') {
            if ($link_target == "_blank") {
                window.open($link);
            } else {
                window.location.href = $link;
            }
        }
    });
};
jQuery(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/eael-image-hotspots.default",
        ImageHotspotHandler
    );
});
