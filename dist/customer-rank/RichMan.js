"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichMan = void 0;
const AbstractCustomerRank_1 = require("./AbstractCustomerRank");
const Mood_1 = require("../Mood");
class RichMan extends AbstractCustomerRank_1.AbstractCustomerRank {
    constructor() {
        super('RichMan', 100000);
        this._goodMoodBoundary = 13;
        this._normallyBoundary = 10;
        this._badMoodBoundary = 7;
        this._angerBoundary = 4;
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
        if (this._angerBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._badMoodBoundary) {
            return Mood_1.MOOD.BAD_MOOD;
        }
        return Mood_1.MOOD.ANGER;
    }
}
exports.RichMan = RichMan;
