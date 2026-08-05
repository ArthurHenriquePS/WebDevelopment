import Image from "next/image";
import styles from "./page.module.css";
import Hello from "./components/Hello";

export default function Home() {
  return (
    <div>
      <Hello name="Arthur" /> {/* Self-Close */} 
      <Hello name="Anna" />
      <Hello name="João" />
      <Hello name="Maria" />
    </div>
  );
}
