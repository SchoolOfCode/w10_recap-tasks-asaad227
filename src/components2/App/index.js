import React from 'react';
import styles from "./styles.module.css"
import FirstBlog from '../Articles';
import BlogZero from '../Articles-0';

export default function App2() {
  return <div className={styles.app}>
 <div>
 <BlogZero />
 </div>
 <div>
 <FirstBlog />
 </div>
 <div>
 <footer className={styles.footer}>
   This is one of the complex project so far for me.
 </footer>
 </div>
 </div>;
}
