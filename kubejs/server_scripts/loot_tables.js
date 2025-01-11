LootJS.modifiers(e => {

    e.addLootTableModifier(/.*/)
        .replaceLoot(/(iceandfire|galosphere):silver_ingot/, AU.getPreferredItemForTag('c:silver_ingots'), true)
        .replaceLoot(/(iceandfire|galosphere):silver_nugget/, AU.getPreferredItemForTag('c:silver_nuggets'), true)
        .replaceLoot(/(iceandfire|spelunkery|malum):copper_nugget/, AU.getPreferredItemForTag('c:copper_nuggets'), true)

        
    e.addEntityLootModifier('friendsandfoes:crab')
        .replaceLoot('friendsandfoes:crab_claw', 'ecologics:crab_claw', true)

    e.addEntityLootModifier('twilightforest:helmet_crab')
        .addLoot('ecologics:crab_claw')

    
    // remove stuff from fullRemovals
    global.fullRemovals.forEach(removal => e.addLootTableModifier(/.*/).removeLoot(removal))
})