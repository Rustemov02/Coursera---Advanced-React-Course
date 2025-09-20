import { useState } from "react";

const ContAndUnCont = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(score) < 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log("Form Submitted !");
    setScore("10");
    setComment("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="border w-1/2 flex flex-col items-start gap-4">
          <h2>Feedback Form</h2>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Score : {score}</label>
            <input
              id="score"
              type="range"
              min="0"
              max="10"
              name="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label>Comment :</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="outline-1 rounded-xl"
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
};

export default ContAndUnCont;
