// import { useState, useEffect } from 'react';

export function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <h3 className="text-sm sm:text-base">Copyright ©{currentYear}, Made with ♥️ by Fadli Purnama</h3>
  );
}
