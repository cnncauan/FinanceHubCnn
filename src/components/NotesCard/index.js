import { useState, useEffect, useRef } from 'react';
import styles from './NotesCard.module.css';

function NotesCard() {
  const [isSaved, setIsSaved] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const fileInputRef = useRef(null);
  const typingTimer = useRef(null);

  const doneTypingInterval = 10;
  const finalDoneTypingInterval = 2000;

  const formatDate = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}`;
  };

  const handleKeyUp = () => {
    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      setIsSaved(true);
      setLastUpdate(`Last updated by you on ${formatDate(new Date())}`);
    }, finalDoneTypingInterval);
  };

  const handleKeyDown = () => {
    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      setIsSaved(false);
    }, doneTypingInterval);
  };

  const previewFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        contentRef.current.appendChild(img);
        setIsSaved(true);
        setLastUpdate(`Last updated by you on ${formatDate(new Date())}`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagePaste = (event) => {
    const items = event.clipboardData.items;
    for (const index in items) {
      const item = items[index];
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement('img');
          img.src = e.target.result;
          contentRef.current.appendChild(img);
          setIsSaved(true);
          setLastUpdate(`Last updated by you on ${formatDate(new Date())}`);
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('paste', handleImagePaste);
    }
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('paste', handleImagePaste);
      }
    };
  }, []);

  return (
    <section>
      <div className={styles.notes}>
        <div className={styles.saverWrap} contentEditable={false}>
          <div className={`${styles.notesDot} ${isSaved ? styles.saved : ''}`} contentEditable={false}></div>
          <div className={`${styles.rest} ${isSaved ? styles.active : ''}`} contentEditable={false}></div>
        </div>
        <div
          className={styles.title}
          contentEditable={true}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          ref={titleRef}
        >
          Anotações
        </div>
        <div
          className={styles.content}
          contentEditable={true}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          ref={contentRef}
        >
          Inicie sua anotação...
        </div>
        <div className={styles.line}></div>
        <div className={styles.comment}>{lastUpdate}</div>
        <input type="file" onChange={previewFile} ref={fileInputRef} style={{ display: 'none' }} />
        <div className={styles.getImg} onClick={() => fileInputRef.current.click()}>
          <i className="material-icons">Inserir imagem</i>
        </div>
      </div>
    </section>
  );
}

export default NotesCard;