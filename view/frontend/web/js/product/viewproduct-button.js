/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'Magento_Ui/js/grid/columns/column',
    'Magento_Catalog/js/product/uenc-processor',
    'Magento_Catalog/js/product/list/column-status-validator'
], function (Element, uencProcessor, columnStatusValidator) {
    'use strict';

    return Element.extend({
        defaults: {
            label: ''
        },

        getHref: function(row) {
            return row.url;
        },



        getLabel: function(row) {
            var isSimple = (row.type === 'simple');

            if(isSimple) {
                return this.label;
            }
            else {
                return 'View Option';
            }
        },

        getHtmlStyle: function(row) {
            var isSimple = (row.type === 'simple');

            if(isSimple) {
                return '';
            }
            else {
                return 'flex: 0 0 100%; max-width: 100%;';
            }
        },

        isAllowed: function(row) {
            return (row.url !== null);
        }
    });
});
