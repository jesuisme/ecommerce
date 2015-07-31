define([
        'models/product_model'
    ],
    function (ProductModel) {
        'use strict';

        return ProductModel.extend({
            getSeatType: function () {
                switch (this.get('certificate_type')) {
                    case 'verified':
                        return gettext('Verified');
                    case 'credit':
                        return gettext('Credit');
                    case 'professional':
                    case 'no-id-professional':
                        return gettext('Professional');
                    default:
                        return gettext('Honor');
                }
            },

            getCertificateDisplayName: function () {
                switch (this.get('certificate_type')) {
                    case 'verified':
                    case 'credit':
                        return gettext('Verified Certificate');

                    case 'professional':
                    case 'no-id-professional':
                        return gettext('Professional Certificate');

                    default:
                        return gettext('Honor Certificate');
                }
            }
        });
    }
);