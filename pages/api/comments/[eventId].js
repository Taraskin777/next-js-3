function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server side validation
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      req.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added comment", comments: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Max",
        comment: "test comment 1",
      },
      {
        id: "c2",
        name: "Taras",
        comment: "test comment 2",
      },
      {
        id: "c3",
        name: "Andrew",
        comment: "test comment 3",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
