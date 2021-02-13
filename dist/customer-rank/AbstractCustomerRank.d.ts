import { Mood } from '../Mood';
import { CustomerRankNames } from './CustomerRankConstants';
/**
 * 客ランクの抽象クラス
 * @property _name ランク名
 * @property _paymentAmount 支払い金額
 */
export declare abstract class AbstractCustomerRank {
    private _name;
    private _paymentAmount;
    protected constructor(_name: CustomerRankNames, _paymentAmount: number);
    abstract getCompatibilityFrom(comprehensiveEvaluation: number): Mood;
    get name(): CustomerRankNames;
    get paymentAmount(): number;
}
