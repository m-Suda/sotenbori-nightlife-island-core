export class Cast {
    constructor(name, rank, hp, preference, behavior) {
        this.name = name;
        this.rank = rank;
        this.hp = hp;
        this.preference = preference;
        this.behavior = behavior;
    }
    /**
     * 客に対応する
     * @param decreasePoint
     */
    serve(decreasePoint) {
        if (this.hp - decreasePoint < 0) {
            this.hp = 0;
            return;
        }
        this.hp -= decreasePoint;
    }
    /**
     * 体力を回復する
     * @param recoveryPoint
     */
    recovery(recoveryPoint) {
        this.hp += recoveryPoint;
    }
}
