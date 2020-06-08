describe("Register", function () {
    
    beforeEach(function () {
        ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx')
            .element('@reset')
            .click();
    });
    
    it("should link registration page", function () {
        ST.element('@register')
            .click()
            .getUrl(function (url) {
               expect(url).toContain('Register.aspx');
            });
    });

    it("should navigate to the login page from the registration page", function () {
        ST.navigate('https://se.sencha.com/AssetRegister/Register.aspx')
            .element('@login')
            .click()
            .getUrl(function(url) {
                expect(url).toContain('Login.aspx');
            });
    });
});
