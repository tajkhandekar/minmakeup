
/*** Foundation for any makeup product ***/

class Product {
    name; // name of the product
    price; // price in USD
    volume; // volume in fl oz.
    use; // fl oz per use
    addDate; // date added to collection or last update
    frequency; // frequency of use in days per week

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.addDate = new Date();
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    changeVolume(volume) {
        this.volume = volume;
        this.addDate = new Date();
    }

    changeFrequency(frequency) {
        this.frequency = frequency;
    }

    calculateWeeksRemaining() {
        if (this.volume && this.use && this.frequency) {
            let usesWeeks = this.volume / (this.use * this.frequency);
            let days = (new Date()).getTime() - this.addDate.getTime();
            const msInWeek = 1000 * 60 * 60 * 24 * 7;
            return usesWeeks - Math.floor(days / msInWeek);
        }
        return 0;
    }
}

class Brush extends Product {
    calculateWeeksRemaining() {
        let days = (new Date()).getTime() - this.addDate.getTime();
        const msInWeek = 1000 * 60 * 60 * 24 * 7;
        return 104 - Math.floor(days / msInWeek);
    }    
}

class Mascara extends Product {
    constructor(name, price) {
        super(name, price);
        // 4 months = 120 days for 0.3 fl oz
        this.use = 0.3 / 120;
    }
}

class Lipstick extends Product {
    constructor(name, price) {
        super(name, price);
        // 150 uses for 0.14 fl oz
        this.use = 0.14 / 150;
    }
}

class Blush extends Product {
    constructor(name, price) {
        super(name, price);
        // 600 uses for 0.25 fl oz
        this.use = 0.25 / 600;
    }
}