import { Selector } from 'testcafe';

fixture `Check if the button text changes`
    .page `http://localhost:3000/`;

test('My test', async t => {
    await t
        .expect(Selector('.uit-hello').innerText).eql('Hello World!');
});
