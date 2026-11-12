import { ref } from 'vue'

// 1. On exporte le tableau directement
export const contacts = ref([
  {
    id: 1,
    nom: 'Ben Ali',
    prenom: 'Ahmed',
    telephone: '22 345 678',
    email: 'ahmed.benali@example.com',
    photo: '/images/contact_A.png' 

  },
  {
    id: 2,
    nom: 'Trabelsi',
    prenom: 'Sarra',
    telephone: '98 765 432',
    email: 'sarra.trabelsi@example.com',
    photo:  '/images/contact_S.png' 
  },
  {
    id: 3,
    nom: 'Gharbi',
    prenom: 'Mohamed',
    telephone: '55 234 567',
    email: 'mohamed.gharbi@example.com',
    photo:  '/images/contact_M.png' 
  },
  {
    id: 4,
    nom: 'Jaziri',
    prenom: 'Ines',
    telephone: '29 456 123',
    email: 'ines.jaziri@example.com',
    photo:  '/images/contact_I.png' 
  },
  {
    id: 5,
    nom: 'Khelifi',
    prenom: 'Youssef',
    telephone: '21 111 222',
    email: 'youssef.khelifi@example.com',
    photo:  '/images/contact_Y.png' 
  }
])

// 2. On exporte chaque fonction directement aussi
export function getContactById(id) {
  return contacts.value.find(c => c.id == id)
}

export function addContact(nouveauContact) {
  nouveauContact.id = Date.now()
  contacts.value.push(nouveauContact)
}

export function updateContact(contactModifie) 
{
  const index = contacts.value.findIndex(c => c.id == contactModifie.id)
  if (index != -1) {
    contacts.value[index] = contactModifie 
  }
}