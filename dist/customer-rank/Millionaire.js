"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Millionaire = void 0;
const AbstractCustomerRank_1 = require("./AbstractCustomerRank");
const Mood_1 = require("../Mood");
class Millionaire extends AbstractCustomerRank_1.AbstractCustomerRank {
    constructor() {
        super('Millionaire', 200000);
        this._goodMoodBoundary = 15;
        this._normallyBoundary = 13;
        this._badMoodBoundary = 10;
        this._angerBoundary = 6;
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
exports.Millionaire = Millionaire;
