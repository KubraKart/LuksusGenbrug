var fs = require("fs");

const ABSOLUTE_PATH = __dirname + "/../../data";
const ITEM_FILE = "/item.json";

class database {
    constructor() {
        this.items = this.openFile(ITEM_FILE);
    }
    saveFile(fileName, contentString) {
        fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }
    openFile(fileName) {
        const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
        return JSON.parse(file);
    }
    saveItem(item){
        this.items.push(item);
        this.saveFile(ITEM_FILE, JSON.stringify(this.items));
    }
    findItem(item){
        return this.items.find((x) => item.title == x.title);
    }
    deleteItem(item){
        this.items = this.items.filter((x) => x.title != item.title);
        this.saveFile(ITEM_FILE, JSON.stringify(this.items));
    }
}

module.exports = new database();