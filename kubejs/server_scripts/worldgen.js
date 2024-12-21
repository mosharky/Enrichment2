/* ⚠️ EVERYTHING HERE REQUIRES THE LITHOSTITCHED MOD ⚠️

Avoid using biome modifiers to add vanilla placed features to biomes, 
as this may cause a feature cycle violation (the game will crash if two biomes 
have the same two features in their feature lists but in different orders). 

Placed features can be referenced in biome jsons or added via biome modifiers, but should not be used in both.

Avoid adding the same placed feature with more than one biome modifier, as this can cause feature cycle violations.


Steps (in order (i think)): 
- raw_generation
- lakes
- local_modifications
- underground_structures
- surface_structures
- strongholds
- underground_ores
- underground_decoration
- fluid_springs
- vegetal_decoration
- top_layer_modification

⚠️ EVERYTHING HERE REQUIRES LITHOSTITCHED MOD ⚠️
*/


/** @param {TagEvent.Biome} e */
function biomeTags(e) {
    e.add('enrichment:all', /.*/)

    e.removeAll('spelunkery:has_salt_noise')
    e.removeAll('iceandfire:ore_gen/silver')
}


ServerEvents.highPriorityData(e => {

    const PLACED = 'placed'
    const CONFIGURED = 'configured'

    /**
     * Processes string into an ID eligible for a feature; used to name JSON files
     * @param {String | Object | Array.<String> | Array.<Object>} input 'namespace:this_feature' or ['namespace:this_feature', 'namespace:that_feature'] turns into 'namespace_this_feature'
     * @returns {String}
     */
    function nameProcess(input) {
        let filename = ''
        if (typeof input == 'string') {
            filename = input.replace(':', '_')
            if (filename.includes('#')) filename = 'tag' + filename.slice(1)
        }
        else if (input instanceof Array) {
            if (typeof input[0] == 'string') filename = input[0].replace(':', '_')
            else if (input[0] instanceof Object) filename = input[0].type.replace(':', '_')
        }
        else filename = input.type.replace(':', '_')
        return filename
    }


    /**
     * Stops a placed feature from generating | https://github.com/Apollounknowndev/lithostitched/wiki/Worldgen-Modifier-Types#remove_features
     * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     * @param {String} step - The generation step. Defaults as 'any'
     */
    function removeFeatures(features, biomes, step) {
        if (typeof features == 'string') features = [features]
        e.addJson(`kubejs:lithostitched/worldgen_modifier/remove_feature_${nameProcess(features)}`, {
            type: 'lithostitched:remove_features',
            biomes: biomes,
            features: features,
            step: step
        })
    }


    /**
     * Adds features to biomes | https://github.com/Apollounknowndev/lithostitched/wiki/Worldgen-Modifier-Types#add_features
     * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     * @param {String} step - The generation step. Defaults as 'any'
     */
    function addFeatures(features, biomes, step) {
        if (typeof features == 'string') features = [features]
        e.addJson(`kubejs:lithostitched/worldgen_modifier/add_feature_${nameProcess(features)}`, {
            type: 'lithostitched:add_features',
            biomes: biomes,
            features: features,
            step: step
        })
    }


    /**
     * Remove entity spawns from biomes | https://github.com/Apollounknowndev/lithostitched/wiki/Worldgen-Modifier-Types#remove_biome_spawns
     * @param {String | Array.<String>} mobs - An entity ID, or entity type tag, or an array of entities
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     */
    function removeSpawns(mobs, biomes) {
        e.addJson(`kubejs:lithostitched/worldgen_modifier/remove_spawn_${nameProcess(mobs)}`, {
            type: 'lithostitched:remove_biome_spawns',
            biomes: biomes,
            mobs: mobs
        })
    }


    /**
     * Add entity spawns to biomes | https://github.com/Apollounknowndev/lithostitched/wiki/Worldgen-Modifier-Types#add_biome_spawns
     * @param {Object | Array.<Object>} spawners - A spawner or an array of spawners
     * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
     */
    function addSpawns(spawners, biomes) {
        e.addJson(`kubejs:lithostitched/worldgen_modifier/add_spawn_${nameProcess(spawners)}`, {
            type: 'lithostitched:add_biome_spawns',
            biomes: biomes,
            spawners: spawners
        })
    }

    
    removeFeatures(['galosphere:ore_silver_large', 'galosphere:ore_silver_small'], '#enrichment:all', 'underground_ores')
})
