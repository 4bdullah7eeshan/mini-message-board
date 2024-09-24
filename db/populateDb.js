#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   text TEXT NOT NULL,
   "user" VARCHAR(255) NOT NULL,
   added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, "user", added)
VALUES
('Life must be lived forwards, but it can only be understood backwards. Understanding comes with time.', 'Søren Kierkegaard', '2023-09-24 12:00:00'),
('He who has a why to live can bear almost any how. Meaning gives us strength to endure the hardships.', 'Friedrich Nietzsche', '2023-09-24 12:01:00'),
('Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.', 'Jean-Paul Sartre', '2023-09-24 12:02:00'),
('The most important thing is to be true to yourself and to not allow others to dictate who you are.', 'Philosopher Unknown', '2023-09-24 12:03:00'),
('Life is meaningless, but it is up to us to create meaning. We are the authors of our own existence.', 'Albert Camus', '2023-09-24 12:04:00'),
('The truth is that existence precedes essence; we are born without purpose and must create our own.', 'Simone de Beauvoir', '2023-09-24 12:05:00'),
('The world is my representation. All that exists is the product of the will to live.', 'Schopenhauer', '2023-09-24 12:06:00'),
('The unexamined life is not worth living. Self-reflection leads to a deeper understanding of oneself.', 'Socrates', '2023-09-24 12:07:00'),
('You are the creator of your own destiny; you are the author of your own life story.', 'Allama Iqbal', '2023-09-24 12:08:00'),
('The meaning of life is to give life meaning. It is our responsibility to create purpose for ourselves.', 'Viktor Frankl', '2023-09-24 12:09:00');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}
  
main();