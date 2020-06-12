PageObjects = {
    
    login: function() {
        var apiKey = '1a020lgwpo2rsovzs2b63v6ptwo4cehb';
        if (ST.browser.is.IE) {
            apiKey = '602qk6q9ff640bhzrtkwbm4mivt77po4';
        }
        
        ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx?apiKey=' + apiKey);
        
        PageObjects.Login.emailField()
            .focus()
            .type('shogo.tokita@a-saas.com');
            // .type('yellowtail.radish@gmail.com');
            
        PageObjects.Login.passwordField()
            .focus()
            .type('Tokita69');
            
        PageObjects.Login.submitButton()
            .click();
            
        PageObjects.Dashboard.dashboard();
    },
    
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
        },
        saveButton: function() {
            return ST.button('assetform button[reference=save]');
        },
        deleteButton: function() {
            return ST.button('assetform button[reference=delete]');
        },
        messageBox: function() {
            return ST.component('messagebox');
        },
        messageBoxOkButton: function() {
            return ST.button('messagebox button[text=OK]');
        },
        messageBoxYesButton: function() {
            return ST.button('messagebox button[text=Yes]');
        },
        messageBoxNoButton: function() {
            return ST.button('messagebox button[text=No]');
        },
        messageToast: function() {
            return ST.component('sheet[baseCls=x-toast]');
        },
        nameField: function() {
            return ST.field('assetform textfield[label=Name]');
        },
        descriptionField: function() {
            return ST.field('assetform textareafield[label=Description]');
        },
        typeField: function() {
            return ST.select('assetform selectfield[label=Type]');
        },
        dateField: function() {
            return ST.field('assetform datepickerfield[label=Date]');
        },
        quantityField: function() {
            return ST.field('assetform numberfield[label=Quantity]');
        },
        costField: function() {
            return ST.field('assetform numberfield[label=Per Unit Cost]');
        }
    }
};