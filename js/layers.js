addLayer("i", {
    name: "Infection", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff4d4d",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Ad coins", // Name of prestige currency
    bars: {
        bigBar: {
            direction: RIGHT,
            width: 200,
            height: 50,
            progress() { return ((new Decimal()/7,925,219,603)/100) },
            display() { return ((new Decimal()/7,925,219,603)/100) },
        },
    },
    upgrades: {
        11: {
            title: "",
            description: "Double your point gain.",
            cost: new Decimal(1),
        },
    },

    baseResource: "dollars", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for Ad coins", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
