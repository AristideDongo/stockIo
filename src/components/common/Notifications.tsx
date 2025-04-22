'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Bell, } from 'lucide-react';
import { Notification } from '@/types/notification';
import { Button } from '../ui/button';
import { NotificationsData } from '@/data/NotificationData';


export const NotificationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(NotificationsData);
  
 const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else  {
      document.body.style.overflow = ''
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [isOpen]);
  

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <div className="relative" ref={notificationRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black bg-gray-300 py-6 px-7 hover:bg-gray-400 rounded-lg relative"
      >
        <Bell size={25} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[350px] bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-4 sticky top-0 bg-white z-50 border-b border-gray-200">
            <h3 className="font-semibold text-black text-lg">Notifications</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bell className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{notification.content}</p>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};