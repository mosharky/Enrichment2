REIEvents.hide('item', e => {
    // e.hide(global.fullRemovals)
    // e.hide(global.unifiedItems)
    e.hide([
        /lootr:.*/
    ])
})

REIEvents.removeCategories(e => {
    e.remove([
        'betterend:alloying',
        'betterend:alloying_fuel',
        'twilightforest:uncrafting'
    ])
})


ItemEvents.tooltip(e => {
    e.add(global.fullRemovals, Text.red('DISABLED. Report to a developer if this item is encountered.').bold())
})