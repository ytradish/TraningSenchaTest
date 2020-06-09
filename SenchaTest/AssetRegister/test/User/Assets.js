describe("Assets", function () {
    
    var Login = PageObjects.Login;
    var Dashboard = PageObjects.Dashboard;
    var Assets = PageObjects.Assets;

    beforeAll(function () {
        ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx?apiKey=1a020lgwpo2rsovzs2b63v6ptwo4cehb');
        //ST.navigate('https://se.sencha.com/AssetRegister/Login.aspx?');
        
        Login.emailField()
            .focus()
            .type('shogo.tokita@a-saas.com');
            
        Login.passwordField()
            .focus()
            .type('Tokita69');
            
        Login.submitButton()
            .click();
            
        Dashboard.dashboard();
    });
    
    
    
    it("should show asset data", function () {
        Assets.menuAsset()
            .click();
            
        Assets.grid()
            .visible();
            
        Assets.grid()
            .rowWith('name', 'Apple iPhone 7');
            
        Assets.grid()
            .rowWith('name', 'Statesman 10-piece conference table and chairs');
    });
});
