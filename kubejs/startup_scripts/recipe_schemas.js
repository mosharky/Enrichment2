// https://discord.com/channels/303440391124942858/1166008086092324956/1166238050746110053

const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema')
const $ItemComponents = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.ItemComponents')
const $TimeComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.TimeComponent')
// const $FluidComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.FluidComponent')


StartupEvents.recipeSchemaRegistry(e => {
    e.register('create:crushing', new $RecipeSchema(
        $ItemComponents.OUTPUT.asArray().key('results'),
        $ItemComponents.INPUT.asArray().key('ingredients'),
        $TimeComponent.TICKS.key('processingTime').optional(100).alwaysWrite()
    ))
})