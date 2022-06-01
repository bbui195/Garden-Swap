const categories = [
    "Fruit",
    "Vegetables",
    "Nuts",
    "Dairy",
    "Meats",
    "Grains"
]
const validCategory = str => {
    return categories.includes(str);
}

module.exports = validCategory;