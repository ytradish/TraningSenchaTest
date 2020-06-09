PageObjects = {
    Login: {
        emailField: function() {
            return ST.element('@email');
        },
        passwordField: function() {
            return ST.element('@password');
        },
        submitButton: function() {
            return ST.element('@submit');
        },
        resetButton: function() {
            return ST.element('@reset');
        },
        registrationLinkField: function() {
            return ST.element('@register');
        },
        errorText: function() {
            return ST.element('@errors');
        },
        loginLink: function() {
            return ST.element('@login');  
        }
    },
    
    Dashboard: {
        dashboard: function() {
            return ST.component('dashboard');
        },
        menuDashboard: function() {
            return ST.dataView('#menu').item('dashboard');
        },
        assetCountPanel: function() {
            return ST.component('assetcount');
        },
        assetValuePanel: function() {
            return ST.component('categoryspend');
        },
        assetCategorySpendChart: function() {
            return ST.component('categoryspend');
        },
        assetMonthlySpendChart: function() {
            return ST.component('monthlyspend');
        }
    }
};