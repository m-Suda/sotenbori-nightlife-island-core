export type CustomerRankNames =
    | 'Millionaire'
    | 'RichMan'
    | 'Normally'
    | 'Poverty';
export const CUSTOMER_RANK_NAME: { [key in CustomerRankNames]: string } = {
    Millionaire: '大富豪',
    RichMan: '富豪',
    Normally: '普通',
    Poverty: '貧乏',
};
