/* Display number of brushes - list of brushes
 * sort in chronological order? */

class Collection {
    products;

    constructor() {
        this.products = [];
    }

    /* APPEND PRODUCT */
    addProduct(product) {
        this.products.push(product);
    }

    /* REMOVE PRODUCT */
    removeBrush(name) {
        const indexToRemove = this.products.findIndex(product => product.name === name);
        if (indexToRemove !== -1) {
            this.products.splice(indexToRemove, 1);
        }          
    }

    /* CHANGE PRICE */
    changePrice(name, newPrice) {
        const product = this.products.find(product => product.name === name);
        if (product) {
            product.changePrice(newPrice);
        }
    }

    /* CHANGE VOLUME - STORE ADD DATE */
    changeVolume(name, newVolumeer) {
        const product = this.products.find(product => product.name === name);
        if (product) {
            product.changeVolume(newVolume);
            product.addDate = new Date();
        }
    }

    /* CHANGE FREQUENCY */
    changeFrequency(name, frequency) {
        const product = this.products.find(product => product.name === name);
        if (product) {
            product.changeFrequency(frequency);
        }
    }

    /* CALCULATE DAYS REMAINING */
    calculateDaysRemaining(name) {
        const product = this.products.find(product => product.name === name);
        if (product) {
            return product.calculateWeeksRemaining();
        }
        return 0;
    }
}

/*** METHODS ***/

/* APPEND PRODUCT */

/* REMOVE PRODUCT */

/* CHANGE PRICE */

/* ADD VOLUME - STORE ADD DATE */

/* CHANGE VOLUME */

/* ADD FREQUENCY */

/* CHANGE FREQUENCY */

/* CALCULATE DAYS REMAINING */