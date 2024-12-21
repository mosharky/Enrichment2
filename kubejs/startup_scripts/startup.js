// array of all items to fully remove (recipes, tags, REI)
// accepts string or regex
global.fullRemovals = [
    /spelunkery:.*rock_salt.*/,
    'spelunkery:salt_lamp',

    // coconut
    'dramaticdoors:short_eco_coconut_door',
    'dramaticdoors:tall_eco_coconut_door',
    'missingwilds:ecologics_fallen_coconut_log',
    /ecologics:(?!music_disc).*coconut/,

    // these are already kinda handled by AlmostUnified
    /(spelunkery|iceandfire|malum):copper_nugget/,
    'iceandfire:raw_silver',
    'iceandfire:raw_silver_block',
    'iceandfire:deepslate_silver_ore',
    'galosphere:raw_silver',
    'galosphere:raw_silver_block',
    'galosphere:deepslate_silver_ore',
    /(galosphere|iceandfire):silver_(ingot|nugget|block|ore)/
]