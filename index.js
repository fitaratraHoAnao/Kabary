const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000

// Servir les fichiers statiques depuis le répertoire 'public'
app.use(express.static(path.join(__dirname, "public")))

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
})

