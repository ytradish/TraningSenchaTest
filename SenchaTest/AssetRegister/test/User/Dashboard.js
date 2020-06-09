describe("Dashboard", function () {
    var Login = PageObjects.Login;
    var Dashboard = PageObjects.Dashboard;

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

    it("should contain an asset count component", function () {
        Dashboard.assetCountPanel();
    });

    it("should contain an asset value component", function () {
        Dashboard.assetValuePanel();
    });

    it("should contain an categories expenditures component", function () {
        Dashboard.assetCategorySpendChart();
    });

    it("should contain an monthly expenditures chart component", function () {
        Dashboard.assetMonthlySpendChart();
    });

    it("should show the number of assets", function () {
        Dashboard.assetCountPanel()
            .text('301 assets');
    });

    it("should show the total value of assets", function () {
        Dashboard.assetValuePanel()
            .textEmpty();
    });
});
