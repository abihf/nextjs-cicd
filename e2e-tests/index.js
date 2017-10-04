import { Selector } from "testcafe";

fixture("Homepage").page("http://localhost:3000/");

test("Stupid test", async t => {
  await t.expect(Selector(".uit-hello").innerText).eql("Hello World?");
});
