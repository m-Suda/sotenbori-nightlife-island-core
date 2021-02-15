export class Customer {
    constructor(_rank, _preference, _purpose, _course, _mood = null) {
        this._rank = _rank;
        this._preference = _preference;
        this._purpose = _purpose;
        this._course = _course;
        this._mood = _mood;
        /**
         * 支払い金額
         * @private {number}
         */
        this._paymentAmount = 0;
    }
    /**
     * 支払い金額を取得する
     */
    get paymentAmount() {
        return this._paymentAmount;
    }
    /**
     * 金額を支払う
     */
    pay() {
        this._paymentAmount += this._rank.paymentAmount;
    }
    /**
     * キャストとの相性を取得する
     * @param cast
     */
    getCompatibilityWith(cast) {
        const { _preference: preference, _purpose: purpose } = this;
        const comprehensiveEvaluation = cast.preference[preference] + cast.behavior[purpose];
        return this._rank.getCompatibilityFrom(comprehensiveEvaluation);
    }
    /**
     * 機嫌を変更する
     * @param m
     */
    set changeMood(m) {
        this._mood = m;
    }
}
