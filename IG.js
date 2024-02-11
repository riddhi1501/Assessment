// IG.js

$(document).ready(function () {
    // Calculate image heights dynamically based on aspect ratio
    $('.gallery-item img').each(function () {
        var aspectRatio = $(this).width() / $(this).height();
        $(this).css('height', $('.gallery-item').width() / aspectRatio);
    });
});
