/** @param {Internal.RecipesEventJS} e */
function recipes(e) {
    let removedMalumVanilla = [
        'daylight_detector',
        'quartz_block',
        'observer',
        'granite',
        'diorite',
        'comparator',  
    ].forEach((recipeID) => {
        e.remove({ id: `malum:${recipeID}` })
    })
}

/** @param {Internal.RecipesEventJS} e */
function shapedRecipes(e) {
    e.shaped(
        Item.of('minecraft:daylight_detector', 1),
        [
            'AAA',
            'BBB',
            'CCC'
        ],
        {
            A: 'minecraft:amethyst_shard',
            B: '#c:gems/quartz',
            C: '#minecraft:wooden_slabs'
        }
    ).id('minecraft:daylight_detector')

    e.shaped(
        Item.of('minecraft:observer', 1),
        [
            'AAA',
            'BCD',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:redstone',
            C: 'minecraft:copper_ingot',
            D: '#c:gems/quartz'
        }
    ).id('minecraft:observer')

    e.shaped(
        Item.of('minecraft:activator_rail', 6),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick',
            C: 'minecraft:copper_ingot'
        }
    ).id('minecraft:activator_rail')

    e.shaped(
        Item.of('minecraft:bucket', 1),
        [
            'A A',
            ' A ',
            '   '
        ],
        {
            A: 'minecraft:copper_ingot'
        }
    ).id('enrichment2:bucket_2')

    e.shaped(
        Item.of('minecraft:jukebox', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:amethyst_shard',
            C: 'minecraft:diamond'
        }
    ).id('minecraft:jukebox')

    e.shaped(
        Item.of('minecraft:note_block', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:amethyst_shard',
            C: 'minecraft:redstone'
        }
    ).id('minecraft:note_block')

    e.shaped(
        Item.of('minecraft:ender_eye', 1),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            A: 'minecraft:pitcher_pod',
            B: 'minecraft:prismarine_shard',
            C: 'minecraft:ender_pearl',
            D: 'minecraft:blaze_powder',
            E: 'minecraft:echo_shard'
        }
    ).id('minecraft:ender_eye')
}