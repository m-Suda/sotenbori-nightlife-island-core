import { AbstractCustomerRank } from './AbstractCustomerRank';
import { MOOD } from '../Mood';
export class Poverty extends AbstractCustomerRank {
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
            return MOOD.BEST;
        }
        if (this._normallyBoundary < comprehensiveEvaluation &&
            comprehensiveEvaluation <= this._goodMoodBoundary) {
            return MOOD.GOOD_MOOD;
        }
        return MOOD.NORMALLY;
    }
}
