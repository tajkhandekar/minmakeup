let blushes = [];

function addItem() {
    const freq = document.getElementById('frequency');
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const volume = document.getElementById('volume');

    let blush = new Blush(name, price);
    blush.changeFrequency(freq);
    blush.changeVolume(volume);

    blushes.push(blush);

    console.log(blushes);
    console.log(name);
}


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

class Blush extends Product {
    constructor(name, price) {
        super(name, price);
        // 600 uses for 0.25 fl oz
        this.use = 0.25 / 600;
    }
}