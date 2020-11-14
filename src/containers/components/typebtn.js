var compsVar = "";


var comps = (str) => {
    if (str === "Mobiles") {
        return compsVar = [
            "Apple",
            "Huawei",
            "Oppo",
            "Samsung",
            "Other Mobiles",
        ]

    } else if (str === "Cars") {
        return compsVar = [
            "Audi",
            "BMW",
            "Changan",
            "Chevrolet",
            "Classic &amp; Antiques",
            "Daewoo",
            "Daihatsu",
            "FAW",
            "Honda",
            "Hyundai",
            "Isuzu",
            "JAC",
            "KIA",
            "Land Rover",
            "Lexus",
            "Mazda",
            "Mercedes",
            "Mitsubishi",
            "Nissan",
            "Porsche",
            "Proton",
            "Prince",
            "Range Rover",
            "Renault",
            "Subaru",
            "Suzuki",
            "Toyota",
            "Volkswagen",
            "United",
            "Other Brands",
        ]

    } else if (str === "Motorcycles") {
        return compsVar = [
            "Crown",
            "Eagle",
            "Ghani",
            "Habib",
            "Harley Davidson",
            "Honda",
            "Kawasaki",
            "Metro",
            "Power",
            "Ravi",
            "Road Prince",
            "Sohrab",
            "Sports &amp; Heavy Bikes",
            "Super Power",
            "Super Star",
            "Suzuki",
            "Unique",
            "United",
            "VESPA",
            "Yamaha",
            "Other Brands",
        ]

    } else if (str === "Tablet") {
        return compsVar = [
            "Apple",
            "Danny Tabs",
            "Q Tabs",
            "Samsung",
            "Other Tablets",
        ]

    } else if (str === "Computer & Accessories") {
        return compsVar = [
            "Computers",
            "Hard Disk",
            "Internet",
            "Laptops",
            "Monitors",
            "Printers",
            "Other Accessories",
        ]

    } else if (str === "TV - Video - Audio") {
        return compsVar = [
            "TV",
            "Video - Audio",
        ]

    }

    return [];
}


export default comps;