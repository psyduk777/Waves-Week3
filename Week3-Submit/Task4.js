const contractAddress = "3NBYCzpqvrKN6u9AsFPN3DUSrkCwhowrN52";

const mySeed =
  "year caution joy obscure sausage mad tilt edit total flush grain moment matrix veteran innocent";

it("Invoke Purchase of A from Standard account", async function () {
  let txObjectSigned = invokeScript(
    {
    fee: 900000,
      senderPublicKey: "FsEx8tZ8iywtf8Qr1WtutzAxMKpR2YZAFdJMq8XBAH7K",
      dApp: contractAddress,
      call: {
        function: "purchase",
        args: [{ type: "string", value: "A" }],
      },
      payment: [{ amount: 5, assetId: null }],
    },
    mySeed
  );

  let tx = await broadcast(txObjectSigned);
  await waitForTx(tx.id);
});


it("Invoke Purchase of B from Standard account", async function () {
  let txObjectSigned = invokeScript(
    {
    fee: 900000,
      senderPublicKey: "FsEx8tZ8iywtf8Qr1WtutzAxMKpR2YZAFdJMq8XBAH7K",
      dApp: contractAddress,
      call: {
        function: "purchase",
        args: [{ type: "string", value: "B" }],
      },
      payment: [{ amount: 5, assetId: null }],
    },
    mySeed
  );

  let tx = await broadcast(txObjectSigned);
  await waitForTx(tx.id);
});

it("Invoke Purchase of A wrong price from Standard account", async function () {
  let txObjectSigned = invokeScript(
    {
    fee: 900000,
      senderPublicKey: "FsEx8tZ8iywtf8Qr1WtutzAxMKpR2YZAFdJMq8XBAH7K",
      dApp: contractAddress,
      call: {
        function: "purchase",
        args: [{ type: "string", value: "A" }],
      },
      payment: [{ amount: 2, assetId: null }],
    },
    mySeed
  );

  let tx = await broadcast(txObjectSigned);
  await waitForTx(tx.id);
  
});
