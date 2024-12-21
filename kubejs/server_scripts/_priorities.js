// priority: -1
ServerEvents.tags('item', e => itemTags(e))
ServerEvents.tags('block', e => blockTags(e))
ServerEvents.tags('worldgen/biome', e => biomeTags(e))


let unifiedItems = []
ServerEvents.recipes(e => {
    replacements(e)

    removals(e)

    recipes(e)
    shapedRecipes(e)
    createRecipes(e)

    // log what items are hidden/unified by AlmostUnified
    // const AUHideHelper = Java.loadClass('com.almostreliable.unified.compat.HideHelper')
    // console.log('Items unified by AlmostUnified:')
    // AUHideHelper.getStacksToHide().forEach(item => console.log(Item.of(item).toItemString()))
})

// idk if this is necessary to be here rather than in line 2
ServerEvents.tags('item', e => fullRemovalTags(e))