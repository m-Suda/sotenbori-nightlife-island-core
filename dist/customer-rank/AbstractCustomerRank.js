"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCustomerRank = void 0;
/**
 * 客ランクの抽象クラス
 * @property _name ランク名
 * @property _paymentAmount 支払い金額
 */
class AbstractCustomerRank {
    constructor(_name, _paymentAmount) {
        this._name = _name;
        this._paymentAmount = _paymentAmount;
    }
    get name() {
        return this._name;
    }
    get paymentAmount() {
        return this._paymentAmount;
    }
}
exports.AbstractCustomerRank = AbstractCustomerRank;
