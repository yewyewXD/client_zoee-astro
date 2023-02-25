const atbleHeaders = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  "Content-Type": "application/json",
};

export default async function handler(req, res) {
  const { email, name, emailParams, title, ownerDate } = req.body;

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
            client_date: emailParams.date,
            order_date: emailParams.orderDate,
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
