// src/components/Announcement.js
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase"; // Ensure your Firebase config is secure
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitizing HTML
import "./acss.css";

export const Announcement = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "announcements"), (snapshot) => {
      const newMessages = [];
      snapshot.forEach((doc) => {
        // Extract the message safely
        const messageData = doc.data();
        const sanitizedMessage = DOMPurify.sanitize(messageData.message); // Sanitize the message
        newMessages.push({ id: doc.id, message: sanitizedMessage }); // Store the sanitized message
      });
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  if (messages.length === 0) return null;

  return (
    <div className="announcement-banner">
      <div className="marquee">
        {messages.map(({ id, message }) => (
          <div key={id} className="marquee-message">
            {/* Render the sanitized message */}
            <span dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
