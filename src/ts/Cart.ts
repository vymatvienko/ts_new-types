import Buyable from "./Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalPrice(): number {
        let cost = 0;
  
        for(let i of this._items) {
          cost += i.price;
        }
  
        return cost;
    }

    discountPrice(discount: number): number {
        const cost = this.totalPrice();
        const discountCost = cost * (1 - discount / 100);
        return discountCost;
    }

    removeItem(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
          this._items.splice(index, 1);
        }
    }
}