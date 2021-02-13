"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normally = void 0;
const AbstractCustomerRank_1 = require("./AbstractCustomerRank");
const Mood_1 = require("../Mood");
class Normally extends AbstractCustomerRank_1.AbstractCustomerRank {
    constructor() {
        super('Normally', 50000);
        this._goodMoodBoundary = 10;
        this._normallyBoundary = 8;
        this._badMoodBoundary = 4;
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
        if (this._badMoodBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._normallyBoundary) {
            return Mood_1.MOOD.NORMALLY;
        }
        return Mood_1.MOOD.BAD_MOOD;
    }
}
exports.Normally = Normally;
