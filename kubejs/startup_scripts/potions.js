MoreJSEvents.registerPotionBrewing(e => {
    e.removeByPotion(null, 'friendsandfoes:crab_claw', null)
    e.addPotionBrewing('ecologics:crab_claw', 'minecraft:awkward', 'friendsandfoes:reaching')
})