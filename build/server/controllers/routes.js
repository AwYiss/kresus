'use strict';

var _banks = require('./banks');

var banks = _interopRequireWildcard(_banks);

var _accesses = require('./accesses');

var accesses = _interopRequireWildcard(_accesses);

var _accounts = require('./accounts');

var accounts = _interopRequireWildcard(_accounts);

var _operations = require('./operations');

var operations = _interopRequireWildcard(_operations);

var _alerts = require('./alerts');

var alerts = _interopRequireWildcard(_alerts);

var _categories = require('./categories');

var categories = _interopRequireWildcard(_categories);

var _settings = require('./settings');

var settings = _interopRequireWildcard(_settings);

var _all = require('./all');

var all = _interopRequireWildcard(_all);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {

    // Initialization
    'all/': {
        get: all.all,
        post: all.import
    },
    'all/export': {
        get: all.export
    },

    // Accesses
    'accesses': {
        post: accesses.create
    },
    'accessId': {
        param: accesses.preloadAccess
    },
    'accesses/:accessId': {
        put: accesses.update,
        delete: accesses.destroy
    },
    'accesses/:accessId/fetch/operations': {
        get: accesses.fetchOperations
    },
    'accesses/:accessId/fetch/accounts': {
        get: accesses.fetchAccounts
    },

    // Accounts
    'accountId': {
        param: accounts.preloadAccount
    },
    'accounts/:accountId': {
        delete: accounts.destroy
    },
    'accounts/:accountId/operations': {
        get: accounts.getOperations
    },

    // Banks
    'bankId': {
        param: banks.preloadBank
    },
    'banks/:bankId': {
        delete: banks.destroy
    },
    'banks/:bankId/accounts': {
        get: banks.getAccounts
    },

    // Categories
    'categories': {
        post: categories.create
    },
    'categoryId': {
        param: categories.preloadCategory
    },
    'categories/:categoryId': {
        put: categories.update,
        delete: categories.delete
    },

    // Operations
    'operations': {
        post: operations.create
    },
    'operationID': {
        param: operations.preloadOperation
    },
    'otherOperationID': {
        param: operations.preloadOtherOperation
    },
    'operations/:operationID': {
        put: operations.update
    },
    'operations/:operationID/mergeWith/:otherOperationID': {
        put: operations.merge
    },
    'operations/:operationID/:file': {
        get: operations.file
    },

    // Settings
    'settings': {
        post: settings.save
    },
    'settings/weboob': {
        put: settings.updateWeboob
    },

    'alertId': {
        param: alerts.loadAlert
    },
    'alerts': {
        post: alerts.create
    },
    'alerts/:alertId': {
        put: alerts.update,
        delete: alerts.destroy
    }
};