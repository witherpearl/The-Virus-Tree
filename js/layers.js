addLayer("b", {
    name: "Basic Ads", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff4d4d",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Ad coins", // Name of prestige currency
    upgrades: {
        1: {
            title: "Sticky notes",
            description: "Double your point gain.",
            cost: new Decimal(1),
        },
    },
    buyables: { 
        2: { 
            cost(x) { 
                return new Decimal(2).mul(x || getBuyableAmt(this.layer, this.id)) 
            },
            display() { 
                return "Pass out paper ads" 
            },
            canAfford() { 
                return player[this.layer].points.gte(this.cost()) 
            },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmt(this.layer, this.id).add(1))
            },
        }, 
    },
    baseResource: "points", // Name of resource prestige is based on
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
