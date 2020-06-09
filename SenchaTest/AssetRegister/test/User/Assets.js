describe("Assets", function () {
    var Login = PageObjects.Login;
    var Assets = PageObjects.Assets;

    beforeAll(function () {
        PageObjects.login();
    });
    
    beforeEach(function() {
        
        Assets.menuAsset()
            .click();
            
        Assets.grid()
            .visible();
    });

    it("should show asset data", function () {
            
        Assets.grid()
            .rowWith('name', 'Apple iPhone 7');
            
        Assets.grid()
            .rowWith('name', 'Statesman 10-piece conference table and chairs');
    });
    
    it("should show the details form when a row is clicked", function () {
        Assets.grid()
            .rowWith('name', 'Apple iPhone 7')
            .click();
            
        Assets.form()
            .visible();
    });
    
    it('should return to the grid from a details form when the "back" button is clicked' , function() {
        
        Assets.grid()
            .rowWith('name', 'Apple iPhone 7')
            .click();
            
        Assets.form()
            .visible();
            
        Assets.backButton()
            .click();
            
        Assets.grid()
            .visible();
            
    });
    
    it ('should visible Asset Details form when the "Add New" button is clicked', function() {
        
        Assets.addButton()
            .click();
        
        Assets.form()
            .visible();
    });
});
