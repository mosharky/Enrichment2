/** @param {Internal.RecipesEventJS} e */
function replacements(e) {
    e.replaceInput({}, 'spelunkery:rock_salt', 'galosphere:pink_salt_shard')
    e.replaceInput({}, 'galosphere:silver_block', '#c:silver_blocks')
    e.replaceInput({}, 'friendsandfoes:crab_claw', 'ecologics:crab_claw')

    // fixing ice and fire inputs
    // e.replaceInput({}, '#c:storage_blocks/silver', '#c:silver_blocks')
    // e.replaceInput({}, '#c:ingots/silver', '#c:silver_ingots')
    // e.replaceInput({}, '#c:nuggets/silver', '#c:silver_nuggets')
    // e.replaceInput({}, 'iceandfire:silver_block', '#c:silver_blocks')
    // e.replaceInput({}, 'iceandfire:silver_ingot', '#c:silver_ingots')
    // e.replaceInput({}, 'iceandfire:silver_nugget', '#c:silver_nuggets')
}