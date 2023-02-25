const atbleHeaders = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

export default async function handler(req, res) {
  const { email, name, title, ownerDate, clientDate, orderDate } = req.body;

  try {
    // Step 1: Add booking info to Airtable
    await fetch(
      `https://api.airtable.com/v0/appwdcuTEadLSlTYH/tbleZN2ejVkPUMW7l`,
      {
        method: "POST",
        headers: atbleHeaders,
        body: JSON.stringify({
          fields: {
            email: email,
            name: name,
            consultation: title,
            date: ownerDate,
            client_date: clientDate,
            order_date: orderDate,
          },
        }),
      }
    );

    return res.status(200).json({ message: "Booking success!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: true,
    });
  }
}
