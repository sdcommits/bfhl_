const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (!isNaN(item)) {
        const num = parseInt(item);
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const reversed = alphabets.slice().reverse().join('');
    const reversed_alphabets_caps = reversed.split('')
      .map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
      .join('');

    res.status(200).json({
      is_success: true,
      user_id: "sheenam_dubey_07082005",
      email: "sheenam2298.be22@chitkara.edu.in",
      roll_number: "2210992298",
      even_numbers,
      odd_numbers,
      alphabets,
      special_characters,
      sum,
      reversed_alphabets_caps
    });

  } catch (err) {
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
