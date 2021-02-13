"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poverty = void 0;
const AbstractCustomerRank_1 = require("./AbstractCustomerRank");
const Mood_1 = require("../Mood");
class Poverty extends AbstractCustomerRank_1.AbstractCustomerRank {
    constructor() {
        super('Poverty', 20000);
        this._goodMoodBoundary = 7;
        this._normallyBoundary = 4;
    }
    /**
     * 客との相性を判定し、機嫌を取得する
     * @param comprehensiveEvaluation
     */
    getCompatibilityFrom(comprehensiveEvaluation) {
        if (this._goodMoodBoundary < comprehensiveEvaluation) {
            return Mood_1.MOOD.BEST;
        }
        if (this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary) {
            return Mood_1.MOOD.GOOD_MOOD;
        }
        return Mood_1.MOOD.NORMALLY;
    }
}
exports.Poverty = Poverty;
