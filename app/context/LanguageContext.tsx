import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../locales/en';  // import ภาษาอังกฤษ
import { th } from '../locales/th';  // import ภาษาไทย

// กำหนดประเภทของภาษาที่รองรับ
type Language = 'en' | 'th';

// สร้าง context ที่จะเก็บข้อมูลภาษา
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof en | typeof th; // ใช้ประเภทของข้อความ
}>({
  language: 'en', // ค่า default เป็นภาษาอังกฤษ
  setLanguage: () => {},
  translations: en, // ใช้ภาษาอังกฤษเป็น default
});

// สร้าง Provider และกำหนดประเภทให้กับ children
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // โหลดข้อความตามภาษาที่เลือก
  const translations = language === 'en' ? en : th;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// สร้าง hook สำหรับใช้งาน context นี้ใน component อื่น
export const useLanguage = () => useContext(LanguageContext);
