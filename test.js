fetch("http://localhost:3000/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    q1: "Aku sayang kamu",
    q2: "Masih banget",
    q3: "Semoga kita langgeng"
  })
})
.then(res => res.text())
.then(data => console.log(data));