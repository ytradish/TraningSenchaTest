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
        
    }
};