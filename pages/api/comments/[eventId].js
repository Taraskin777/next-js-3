import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://taraskin:bRt4Zlx1ydkkdqVK@cluster0.qlklvkd.mongodb.net/events?retryWrites=true&w=majority"
  );

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
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

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
  client.close();
}

export default handler;
