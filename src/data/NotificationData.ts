import { Notification } from "@/types/notification";

export const NotificationsData: Notification[] = [
    {
      id: '1',
      content: 'Nouvelle commande #45678 - 299,99€',
      time: Date.now().toString(),
      read: false,
      type: 'order',
      priority: 'high'
    },
    {
      id: '2',
      content: 'Stock faible - "iPhone 14 Pro" (5 unités restantes)',
      time: Date.now().toString(),
      read: false,
      type: 'stock',
      priority: 'high'
    },
    {
      id: '3',
      content: 'Nouvelle critique - "MacBook Air M2" (4.5/5)',
      time: Date.now().toString(),
      read: false,
      type: 'review',
      priority: 'medium'
    },
    {
      id: '4',
      content: 'Retour produit demandé - Commande #45632',
      time: Date.now().toString(),
      read: false,
      type: 'alert',
      priority: 'high'
    },
    {
      id: '5',
      content: '10 commandes en attente de traitement',
      time: Date.now().toString(),
      read: true,
      type: 'order',
      priority: 'medium'
    }
  ];