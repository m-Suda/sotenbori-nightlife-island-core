import { Customer } from './Customer';
import { Millionaire } from './customer-rank/Millionaire';

describe('CustomerClass', () => {
    describe('pay()', () => {
        test('客ランクに応じた金額が増えること', () => {
            const customer = new Customer(
                new Millionaire(),
                'Beauty',
                'Love',
                30
            );
            expect(customer.paymentAmount).toBe(0);

            customer.pay();
            expect(customer.paymentAmount).toBe(200000);

            customer.pay();
            expect(customer.paymentAmount).toBe(400000);
        });
    });
});
