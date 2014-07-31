var Item = require('../models/items.js');

exports.addItem = function(itemData) {
    console.log('going to save item!!!!');
    var item = new Item({
        title: itemData.itemTitle,
        description: itemData.itemDescription,
        tags: itemData.itemTags,
        minParticipants: parseInt(itemData.minParticipants),
        reputation: parseInt(itemData.reputation),
        individualCost: parseInt(itemData.individualCost)
    });

    item.save(function(err) {
        if (err) {
            return err;
        }
        else {
            return 'success';
        }
    });
}