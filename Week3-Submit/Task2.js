const seed1 =
  "pelican ill neck expand tongue ten gospel harvest art purity wrist key cancel swim hurt";
const seed2 =
  "ahead spray swear salon brass hidden floor school helmet buddy amateur quote top alcohol defy";

it("Test transfer using 2 seeds", async function () {
  const ttx = transfer(
    {
      amount: 1,
      fee: 500000,
      recipient: "3N1iNL3QunpnT28EcYVet85K9ykPLd2NxT4",
      senderPublicKey: "42abji4xATstUGMaQv9pwRhkxVgTEArewAo5WNLpvDN7",
    },
    seed1
  );
  const ttx2 = transfer(ttx, seed2);

  await broadcast(ttx2);
  await waitForTx(ttx2.id);
});

it("Test transfer using 2 wrong seeds", async function () {
  const ttx = transfer(
    {
      amount: 1,
      fee: 500000,
      recipient: "3N1iNL3QunpnT28EcYVet85K9ykPLd2NxT4",
      senderPublicKey: "42abji4xATstUGMaQv9pwRhkxVgTEArewAo5WNLpvDN7",
    },
    "wrong seed"
  );
  const ttx2 = transfer(ttx, "wrong seed");

  await broadcast(ttx2);
  await waitForTx(ttx2.id);
});
