import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD } from '../Mood';
export class Millionaire extends AbstractCustomerRank {
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
            return MOOD.BEST;
        }
        if (this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary) {
            return MOOD.GOOD_MOOD;
        }
        if (this._badMoodBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._normallyBoundary) {
            return MOOD.NORMALLY;
        }
        if (this._angerBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._badMoodBoundary) {
            return MOOD.BAD_MOOD;
        }
        return MOOD.ANGER;
    }
}
