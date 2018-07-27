/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    /**
     * @param {String} url
     * @param {*} fromPages
     */
    function processReviews(url, fromPages) {
        $.ajax({
            url: url,
            cache: true,
            dataType: 'html',
            showLoader: false,
            loaderContext: $('.product.data.items')
        }).done(function (data) {
            $('#product-review-container').html(data);
            $('[data-role="product-review"] .pages a').each(function (index, element) {
                $(element).click(function (event) { //eslint-disable-line max-nested-callbacks
                    processReviews($(element).attr('href'), true);
                    event.preventDefault();
                });
            });
        }).complete(function () {
            if (fromPages == true) { //eslint-disable-line eqeqeq
                $('html, body').animate({
                    scrollTop: $('#reviews').offset().top - 50
                }, 300);
            }
        });
    }

    return function (config) {
        processReviews(config.productReviewUrl);
        $(function () {
            $('.product-info-main .reviews-actions a').click(function (event) {
                var acnchor;

                event.preventDefault();
                acnchor = $(this).attr('href').replace(/^.*?(#|$)/, '');
                $('.product.data.items [data-role="content"]').each(function (index) { //eslint-disable-line
                    if (this.id == 'reviews') { //eslint-disable-line eqeqeq
                        $('.product.data.items').tabs('activate', index);
                        $('html, body').animate({
                            scrollTop: $('#' + acnchor).offset().top - 50
                        }, 300);
                    }
                });
            });
        });
    };
});
