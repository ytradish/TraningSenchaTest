describe("Sample", function () {
    
    beforeEach(function(){
        ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx')
            .element('@reset')
            .click();
    });

    it('should fail when email address and password are blank', function() {

        ST.element('@submit')
            .click();   

        ST.element('@errors')
            .textLike('Email address is required')
            .textLike('Password is required');

     });

    it('should fail when an unregistered email address is used', function() {

        ST.element('@email')
            .focus()
            .type('unregistered@somedomain.com');

        ST.element('@password')
            .focus()
            .type('test');

        ST.element('@submit')
            .click();

        ST.element('@errors')
            .textLike('this email address not found');

     });

    it('should fail when an incorrect password is used', function() {

        ST.element('@email')
            .focus()
            .type('YOUREMAIL@YOURDOMAIN.COM');

        ST.element('@password')
            .focus()
            .type('test');

        ST.element('@submit')
            .click();

        ST.element('@errors')
            .textLike('You entered an invalid password');

     });

    it('should successfully redirect when valid credentials are used', function() {

        ST.element('@email')
            .focus()
            .type('YOUREMAIL@YOURDOMAIN.COM');

        ST.element('@password')
            .focus()
            .type('YOURPASSWORD');

        ST.element('@submit')
            .click()
            .getUrl(function(url) {
                expect(url).toContain('Default.aspx'); 
            });

     });

    it('should navigate to the registration page when the Register link is clicked', function() {

        ST.element('@register')
            .click()
            .getUrl(function(url) {
                expect(url).toContain('Register.aspx'); 
            });

     });

    it('should navigate to the login page from the registration page', function() {

        ST.navigate('https://se.sencha.com/AssetRegister/Register.aspx')
            .element('@login')
            .click()
            .getUrl(function(url) {
                expect(url).toContain('Login.aspx'); 
            });

    });


});


