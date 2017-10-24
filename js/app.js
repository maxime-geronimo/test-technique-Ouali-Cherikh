jQuery(document).ready(function() {
    $('.design').velocity({
        translateY: [0, -30],
        opacity: [1, 0],
    }, {
        duration: 8000,
        easing: [10, 10]

    });
    $('.title-center').velocity({
        translateX: [0, -1200],
        opacity: [1, 0]
    }, {
        duration: 8000,
        display: 'block',
        easing: [10, 10]

    });
    $('.news').velocity({
        translateX: [0, -1200],
        opacity: [1, 0]
    }, {
        duration: 18000,
        easing: [10, 10]

    });
    $('.news').velocity({
        translateX: [0, -1200],
        opacity: [1, 0]
    }, {
        duration: 8000,
        easing: [10, 10]

    });
});
