AdvJSEvents.advancement(e => {
    // remove all advancements from these mods (temporarily?)
    e.remove({ mod: 'charm' })
    e.remove({ mod: 'betterend' })
    e.remove({ mod: 'betternether' })
    e.remove({ mod: 'lootr' })
})