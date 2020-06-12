describe("Dashboard", function () {
    var Login = PageObjects.Login;
    var Dashboard = PageObjects.Dashboard;

    beforeAll(function () {
        PageObjects.login();
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
            .text('$205,843 total value');
    });
    
    it('screenshot should match baseline', function() {
        ST.screenshot('Dashboard');
    });

});
