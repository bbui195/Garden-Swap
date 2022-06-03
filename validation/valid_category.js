const categories = [
    "fruit",
    "vegetables",
    "nuts",
    "dairy",
    "meats",
    "grains"
]

const validCategory = str => {
    return categories.includes(str.toLowerCase());
}

module.exports = validCategory;