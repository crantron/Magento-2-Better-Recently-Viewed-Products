define([
    'Magento_Ui/js/grid/columns/column'
], function(Element){
    'use strict';

    return Element.extend({
        default: {
            label : ''
        },

        getSku: function(row) {
            return 'Part #' + row.extension_attributes.sku;
        },

        isAllowed: function(row) {
            return true;
        }
    })
});