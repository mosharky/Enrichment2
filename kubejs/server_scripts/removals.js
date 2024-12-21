/** @param {Internal.RecipesEventJS} e */
function removals(e) {
    // e.remove({ type: 'bclib:alloying' })

    // Removes by recipe ID
    const idRemovals = [
        'betternether:rail',
        'betternether:detector_rail',
        'betternether:activator_rail',
        'betternether:piston',
        'betternether:shield',
        /bclib:.*/,
        'farmersdelight:bread_from_smelting',
        'farmersdelight:bread_from_smoking',
        'ad_astra:iron_rod',
    ]

    idRemovals.forEach(removal => {
        e.remove({ id: removal })
    })

    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })
}
