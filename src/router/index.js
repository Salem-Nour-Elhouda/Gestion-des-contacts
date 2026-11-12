import { createRouter, createWebHistory } from 'vue-router'

// Importer tes deux vues principales
import ListeContacts from '../views/ListeContacts.vue'
import DetailContact from '../views/DetailContact.vue'

// Définir les routes de l'application
const routes = [
  {
    path: '/',                  // La page d'accueil (la liste des contacts)
    name: 'ListeContacts',
    component: ListeContacts
  },
  {
    path: '/contact/:id?',      // La page de détail/modification
    name: 'DetailContact',
    component: DetailContact,
    props: true
  }
]

// Créer le routeur
const router = createRouter(
{
  history: createWebHistory(),
  routes
})

export default router