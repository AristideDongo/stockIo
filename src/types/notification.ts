export interface Notification {
    id: string;
    content: string;
    time: string;
    read: boolean;
    type?: 'order' | 'stock' | 'review' | 'alert';
    priority?: 'high' | 'medium' | 'low';
  }
 