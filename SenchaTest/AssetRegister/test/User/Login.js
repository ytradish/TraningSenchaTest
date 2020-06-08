describe("Login", function () {
    
    beforeEach(function () {
        ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx')
            .element('@reset')
            .click();
    });

    it("should fail when an unregistered email address is used", function () {
        ST.element('@submit')
            .click();   
            
        ST.element('@errors')
            .textLike('Email address is required')
            .textLike('Password is required');
    });

    it("should fail when email address and password are blank", function () {
        ST.element('@email')
            .focus()
            .type('unregistered@somedomain.com');
            
        ST.element('@password')
            .focus()
            .type('test');
            
        ST.element('@submit')
            .click();
            
        ST.element('@errors')
            .textLike('User with this email address not found.')
    });

    it("should fail when password is invalid", function () {
        ST.element('@email')
            .focus()
            .type('shogo.tokita@a-saas.com');
            
        ST.element('@password')
            .focus()
            .type('test');
            
        ST.element('@submit')
            .click();
            
        ST.element('@errors')
            .textLike('You entered an invalid password. Please try again.')
    });

    it("should login", function () {
        ST.element('@email')
            .focus()
            .type('shogo.tokita@a-saas.com');
            
        ST.element('@password')
            .focus()
            .type('Tokita69');
        
        ST.element('@submit')
            .click()
            .getUrl(function (url) {
               expect(url).toContain('Default.aspx');
            });
    });

});
