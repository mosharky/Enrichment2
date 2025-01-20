/** @param {Internal.RecipesEventJS} e */
function replacements(e) {
    e.replaceInput({}, 'spelunkery:rock_salt', 'galosphere:pink_salt_shard')
    e.replaceInput({}, 'galosphere:silver_block', '#c:silver_blocks')
    e.replaceInput({}, 'friendsandfoes:crab_claw', 'ecologics:crab_claw')
    e.replaceInput({}, 'minecraft:quartz', '#c:gems/quartz')
    
    let ironToCopperRecipeItems = [
        'minecraft:piston',
        'minecraft:compass',
        'minecraft:powered_rail'
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
    })

    let glassToAmethystRecipeItems = [
        'minecraft:beacon',
        'minecraft:end_crystal'
    ].forEach((item) => {
        e.replaceInput({ output: item }, 'minecraft:glass', 'minecraft:amethyst_shard')
    })
    
    e.replaceInput({ output: "diamond_apples:diamond_apple" }, 'minecraft:apple', 'witherite:witherite_apple')
    e.replaceInput({ output: "diamond_apples:enchanted_diamond_apple" }, 'minecraft:diamond', 'minecraft:diamond_block')

    // fixing ice and fire inputs
    // e.replaceInput({}, '#c:storage_blocks/silver', '#c:silver_blocks')
    // e.replaceInput({}, '#c:ingots/silver', '#c:silver_ingots')
    // e.replaceInput({}, '#c:nuggets/silver', '#c:silver_nuggets')
    // e.replaceInput({}, 'iceandfire:silver_block', '#c:silver_blocks')
    // e.replaceInput({}, 'iceandfire:silver_ingot', '#c:silver_ingots')
    // e.replaceInput({}, 'iceandfire:silver_nugget', '#c:silver_nuggets')
}