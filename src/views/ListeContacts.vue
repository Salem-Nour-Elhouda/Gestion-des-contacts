<template>
  <div class="contacts-container">
    <!-- En-tête de l'application -->
    <header class="header">
      <h2>Contacts • Vue.js</h2>
    </header>

    <div class="content">
      <div class="top-bar">
        <h3>Liste des contacts</h3>
        <!-- Bouton pour ajouter un nouveau contact (vers la page de détail sans ID) -->
        <button class="btn-ajouter" @click="allerVersAjout">+ Ajouter</button>
      </div>

      <!-- Liste des contacts -->
      <div class="contacts-list">
        <div v-for="contact in contacts" :key="contact.id" class="contact-card">
          
          <!-- Miniature de la photo ou initiale du nom -->
          <div class="contact-avatar">
            <span v-if="!contact.photo">{{ contact.prenom.charAt(0) }}{{ contact.nom.charAt(0) }}</span>
            <img v-else :src="contact.photo" alt="Photo" />
          </div>

          <!-- Informations du contact (Nom, Prénom, Téléphone) -->
          <div class="contact-infos">
            <h4>{{ contact.prenom }} {{ contact.nom }}</h4>
            <p>{{ contact.telephone }}</p>
          </div>

          <!-- Bouton Modifier pour ouvrir la fiche du contact -->
          <button class="btn-modifier" @click="allerVersModification(contact.id)">
            Modifier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { contacts } from '../components/Contacts.js'
import { useRouter } from 'vue-router'

// Récupérer la liste des contacts depuis le composable

const router = useRouter()

// Fonction pour aller vers la page d'ajout (pas d'ID)
function allerVersAjout() {
  router.push('/contact')
}

// Fonction pour aller vers la page de modification avec l'ID du contact
function allerVersModification(id) {
  router.push(`/contact/${id}`)
}
</script>




<style scoped>
.contacts-container {
  max-width: 700px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.header {
  background-color: #3f51b5;
  color: white;
  padding: 15px 20px;
}

.content {
  padding: 20px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn-ajouter {
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px 15px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.contact-avatar {
  width: 45px;
  height: 45px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  margin-right: 15px;
  overflow: hidden;
}

.contact-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-infos {
  flex-grow: 1;
}

.contact-infos h4 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.contact-infos p {
  margin: 4px 0 0 0;
  color: #666;
  font-size: 14px;
}

.btn-modifier {
  background-color: #e8eaf6;
  color: #3f51b5;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-modifier:hover {
  background-color: #c5cae9;
}
</style>