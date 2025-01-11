/** @param {TagEvent.Item} e */
function itemTags(e) {
    e.remove('c:iron_ingots', ['betterend:thallasium_ingot', 'betternether:cincinnasite_ingot'])
}


/** @param {TagEvent.Item} e */
function fullRemovalTags(e) {
    // process regex because removeAllTagsFrom() doesn't accept regex
    let newArr = []
    global.fullRemovals.forEach(removal => {
        if (removal instanceof RegExp) newArr = newArr.concat(Ingredient.of(removal).itemIds)
        else newArr.push(removal)
    })

    newArr.forEach(removal => {
        e.removeAllTagsFrom(removal)
    })
}


/** @param {TagEvent.Block} e */
function blockTags(e) {
    e.add('spelunkery:salt_blocks', /galosphere:.*pink_salt.*/)
}
