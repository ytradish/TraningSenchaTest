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
            return ST.component('assetvalue');
        },
        assetCategorySpendChart: function() {
            return ST.component('categoryspend');
        },
        assetMonthlySpendChart: function() {
            return ST.component('monthlyspend');
        }
    },
    
    Assets: {
        menu: function() {
            return ST.dataView('#menu');
        },
        menuAsset: function() {
            return PageObjects.Assets.menu().item('asset');
        },
        grid: function() {
            return ST.grid('assetgrid');
        },
        form: function() {
            return ST.component('assetform');
        },
        backButton: function() {
            return ST.button('assetform button[text=Back]');
        },
        addButton: function() {
            return ST.button('assetgrid button[text=Add New]');
        }
    }
};