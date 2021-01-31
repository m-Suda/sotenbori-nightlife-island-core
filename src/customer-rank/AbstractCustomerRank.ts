import { Mood } from '../Mood';
import { CustomerRankNames } from './CustomerRankConstants';

/**
 * 客ランクの抽象クラス
 * @property _name ランク名
 * @property _paymentAmount 支払い金額
 */
export abstract class AbstractCustomerRank {
    protected constructor(
        private _name: CustomerRankNames,
        private _paymentAmount: number
    ) {}

    public abstract getCompatibilityFrom(comprehensiveEvaluation: number): Mood;

    public get name(): CustomerRankNames {
        return this._name;
    }

    public get paymentAmount(): number {
        return this._paymentAmount;
    }
}
