describe("Assets", function () {
    var Assets = PageObjects.Assets;
    var Dashboard = PageObjects.Dashboard;
    //test
    var newAsset = {
        name: 'Epson PowerLite Home Cinema 1080p Projector',
        description: '2D and 3D 1080p projector with 3-chip optical engine',
        type: 'Computers',
        quantity: 2,
        cost: 1999
    };

    beforeAll(function () {
        PageObjects.login();
    });

    beforeEach(function () {
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

    it("should return to the grid from a details form when the \"back\" button is clicked", function () {
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

    it("should visible Asset Details form when the \"Add New\" button is clicked", function () {
        Assets.addButton()
            .click();
        
        Assets.form()
            .visible();
    });

    it("should show an error message when an asset details form that is missing a value is saved", function () {
        // TODO: Click the add button
        Assets.addButton()
            .click();
        
        // TODO: Wait for the form to be visible
        Assets.form()
            .visible()
            .wait(3000);
            
        // TODO: Click the save button
        Assets.saveButton()
            .click();
        
        Assets.messageBox()
            .visible()
            .textLike('Validation errors')
            .textLike('Name Must be present')
            .textLike('Description Must be present')
            .textLike('Type Must be present')
            .textLike('Quantity Must be at least 1')
            .textLike('Per Unit Cost Must be at least 0.01');
            
        Assets.messageBoxOkButton()
            .click();
            
        Assets.messageBox()
            .hidden();
    });

    it("should initialize new asset fields to all empty values, except date, which is the current date", function () {
        Assets.addButton()
            .click();
            
        Assets.form()
            .visible();
        
        Assets.nameField()
            .valueEmpty();
        
        // TODO: Verify that the description field is empty
        Assets.descriptionField()
            .valueEmpty();
        
        // TODO: Verify that the type field is empty
        Assets.typeField()
            .valueEmpty();
        
        Assets.quantityField()
            .value(0);
        
        // TODO: Verify that the cost field is 0
        Assets.costField()
            .value(0);
        
        var dateString = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        
        Assets.dateField()
            .expect('formattedValue').toEqual(dateString);
        
        Assets.backButton();
    });

    it("should allow every field on the asset details form to be edited", function () {
        Assets.addButton()
            .click();
        Assets.form()
            .visible();
        
        // TODO: Set the name field to newAsset.name
        Assets.nameField()
            .setValue(newAsset.name);
        
        // TODO: Set the description field to newAsset.description
        Assets.descriptionField()
            .setValue(newAsset.description);
        // TODO: Set the type field to newAsset.type
        Assets.typeField()
            .setValue(newAsset.type);
        // TODO: Set the quantity field to newAsset.quantity
        Assets.quantityField()
            .setValue(newAsset.quantity);
        // TODO: Set the cost field to newAsset.cost
        Assets.costField()
            .setValue(newAsset.cost);
            
        Assets.saveButton()
            .click();
            
        var formattedCost = '$' + newAsset.cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '1,');
        Assets.grid()
            .visible()
            .rowWith('name', newAsset.name)
            .cellWith('dataIndex', 'assetTypeName')
            .text(newAsset.type)
            .row()
            .cellWith('dataIndex', 'quantity')
            .text(newAsset.quantity.toString())
            .row()
            .cellWith('dataIndex', 'cost')
            .text(formattedCost);
        ST.log(formattedCost);
    });

    it("should let the user know when data has been saved,", function () {
        Assets.grid()
            .rowWith('name', 'Statesman 10-piece conference table and chairs')
            .click();
        
        // TODO: Wait for the form to be visible
        Assets.form()
            .visible();
            
        // TODO: Set the quantify field to 9 (or any new value)
        Assets.quantityField()
            .setValue(9);
        
        // TODO: Click the save button
        Assets.saveButton()
            .click();
            
        // TODO: Wait for the message toast to be visible, then see if the text is like 'Record saved'
        Assets.messageToast()
            .visible()
            .textLike('Record saved');
    });

    it("should show a delete confirmation", function () {
        Assets.grid()
            .rowWith('name', 'Statesman 10-piece conference table and chairs')
            .click();
        
        // TODO: Wait for the form to be visible
        Assets.form()
            .visible()
            .wait(3000);
            
        // TODO: Click the delete button
        Assets.deleteButton()
            .click();
        
        // TODO: Wait for the message box to be visible, then test 
        //     .contentLike('Confirm deletion')
        //     .contentLike('Are you sure you want to permanently delete this asset?');
        Assets.messageBox()
            .visible()
            .wait(3000)
            .contentLike('Confirm deletion')
            .contentLike('Are you sure you want to permanently delete this asset?');
            
        Assets.messageBoxYesButton()
            .visible()
            .click();
            
        Assets.grid()
            .visible()
            .rowWith('name', 'Statesman 10-piece conference table and chairs')
            .timedout();
    });
});
