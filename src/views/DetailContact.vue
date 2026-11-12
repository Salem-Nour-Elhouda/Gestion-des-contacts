<template>
  <div class="app-wrapper">
    <header class="app-header">
      <h1>Contacts • Vue.js</h1>
    </header>

    <div class="contact-card-container">
      <h2>{{ route.params.id ? "Fiche contact — Modification" : "Nouveau Contact" }}</h2>

   
      <div class="avatar-section" v-if="route.params.id">
        <div class="avatar-circle">
          <span>{{ getInitiales() }}</span>
        </div>
      </div>

      <!-- Formulaire en 2 colonnes -->
      <div class="form-grid">
        <div class="form-group">
          <label>Nom</label>
          <input type="text" v-model="form.nom" placeholder="Nom" />
        </div>

        <div class="form-group">
          <label>Prénom</label>
          <input type="text" v-model="form.prenom" placeholder="Prénom" />
        </div>

        <div class="form-group">
          <label>Téléphone</label>
          <input type="text" v-model="form.telephone" placeholder="Téléphone" />
        </div>

        <div class="form-group">
          <label>E-mail</label>
          <input type="email" v-model="form.email" placeholder="E-mail" />
        </div>
      </div>

      <!-- Boutons -->
      <div class="actions-grid">
        <button class="btn btn-green" @click="appeler">Appeler</button>
        <button class="btn btn-blue" @click="envoyerEmail">E-mail</button>
        <button class="btn btn-purple" @click="galerie">Galerie</button>
        <button class="btn btn-purple" @click="camera">Caméra</button>
      </div>

      <!-- bouton enregistrer  -->
      <div class="footer-actions">
        <button class="btn btn-green btn-save" @click="sauvegarder">Enregistrer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getContactById, addContact, updateContact } from '../components/Contacts.js'

var route = useRoute()
var nav = useRouter()

var form = ref({
  id: null,
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  photo: ''
})

onMounted(function() {
  var id = route.params.id
  if (id) {
    var c = getContactById(Number(id))
    if (c) {
      form.value = { ...c }
    }
  }
})

function getInitiales() {
  var n = form.value.nom ? form.value.nom.charAt(0) : ''
  var p = form.value.prenom ? form.value.prenom.charAt(0) : ''
  return (n + p).toUpperCase()
}

function appeler() {
  if (form.value.telephone) {
    window.location.href = 'tel:' + form.value.telephone
  } else {
    alert('Aucun numéro de téléphone disponible !')
  }
}

function envoyerEmail() {
  if (form.value.email) {
    window.location.href = 'mailto:' + form.value.email
  } else {
    alert('Aucun e-mail disponible !')
  }
}

function galerie() {
  alert('Fonction Galerie (simulée)')
}

function camera() {
  alert('Fonction Caméra (simulée)')
}

function sauvegarder() {
  if (!form.value.nom || !form.value.telephone) {
    return alert('Veuillez remplir les champs Nom et Téléphone !')
  }

  if (route.params.id) {
    updateContact(form.value)
  } else {
    addContact(form.value)
  }
  
  nav.push('/')
}
</script>

<style scoped>
.app-wrapper {
  background-color: #f4f5f7;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  padding-bottom: 40px;
}

.app-header {
  background-color: #3f51b5;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.app-header h1 {
  margin: 0;
  font-size: 20px;
}

.contact-card-container {
  max-width: 650px;
  margin: 30px auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.contact-card-container h2 {
  margin-top: 0;
  margin-bottom: 25px;
  color: #222;
  font-size: 20px;
}

.avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.avatar-circle {
  width: 90px;
  height: 90px;
  background-color: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1565c0;
  font-size: 26px;
  font-weight: bold;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.form-group input:focus {
  border-color: #3f51b5;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
}

.btn-green { background-color: #2e7d32; }
.btn-green:hover { background-color: #256428; }

.btn-blue { background-color: #1976d2; }
.btn-blue:hover { background-color: #1565c0; }

.btn-purple { background-color: #673ab7; }
.btn-purple:hover { background-color: #5e35b1; }

.btn-save {
  min-width: 130px;
}
</style>