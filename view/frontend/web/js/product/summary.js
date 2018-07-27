define([
    'Magento_Ui/js/grid/columns/column',
    'Magento_Catalog/js/product/list/column-status-validator'
], function(Element, columnStatusValidator){
    'use strict';

    return Element.extend({
        defaults: {
            label: ''
        },

        getReviewHtml: function(row) {
            return row.extension_attributes.review_html;
        },

        isAllowed: function(row) {
            var reviewHtml = row.extension_attributes.review_html;
            return (!(reviewHtml == null || reviewHtml.trim().length === 0));
        }
    })
});