describe("Login", function () {
    var Login = PageObjects.Login;

    beforeEach(function () {
        ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx');
        Login.resetButton()
            .click();
    });

    it("should fail when an unregistered email address is used", function () {
        Login.submitButton()
            .click();   
            
        Login.errorText()
            .textLike('Email address is required')
            .textLike('Password is required');
    });

    it("should fail when email address and password are blank", function () {
        Login.emailField()
            .focus()
            .type('unregistered@somedomain.com');
            
        Login.passwordField()
            .focus()
            .type('test');
            
        Login.submitButton()
            .click();
            
        Login.errorText()
            .textLike('User with this email address not found.')
    });

    it("should fail when password is invalid", function () {
        Login.emailField()
            .focus()
            .type('shogo.tokita@a-saas.com');
            
        Login.passwordField()
            .focus()
            .type('test');
            
        Login.submitButton()
            .click();
            
        Login.errorText()
            .textLike('You entered an invalid password. Please try again.')
    });

    it("should login", function () {
        Login.emailField()
            .focus()
            .type('shogo.tokita@a-saas.com');
            
        Login.passwordField()
            .focus()
            .type('Tokita69');
        
        Login.submitButton()
            .click()
            .getUrl(function (url) {
               expect(url).toContain('Default.aspx');
            });
    });

    it("should link registration page", function () {
        Login.registrationLinkField()
            .click()
            .getUrl(function (url) {
               expect(url).toContain('Register.aspx');
            });
    });

    it("should navigate to the login page from the registration page", function () {
        ST.navigate('https://se.sencha.com/AssetRegister/Register.aspx');
        Login.loginLink()
            .click()
            .getUrl(function(url) {
                expect(url).toContain('Login.aspx');
            });
    });

    it("screenshot should match baseline", function () {
        ST.screenshot('Login');
    });
});
