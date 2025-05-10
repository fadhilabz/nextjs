import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [ukuran, setUkuran]=useState(600)
  return (
    <div>
      <h1 >Johan</h1>
      <img src="/johan.png" alt="" width={ukuran} />
      <br />
      {ukuran}
      <br />
      <button onClick={()=>{
        setUkuran(ukuran+10)
      }} >Tambah</button>
      <button onClick={()=>{
        setUkuran(ukuran-10)
      }} >KUrang</button>
      <Link href="biodata">ccc</Link>
      <Link href="biodata">ccc</Link>
    </div>
  );
}
