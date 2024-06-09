import { useEffect, useState } from "react";
const images = [
  "../public/img/sepeda-balap-5.jpg",
  "../public/img/sepeda-balap-6.jpg",
  "../public/img/sepeda-balap-7.jpg",
];

export default function useTransitionHero() {
  // kita harus dapat mentahan gambar terlebih dahulu
  let currentValue = 0;
  let isImage = images[currentValue];
  setInterval(() => {
    currentValue += 1;
  }, 2000);
  //   const [isImage, setIsImage] = useState(images[currentValue]);

  // setiap dua detik, maka state akan mengalami perubahan, begitu page berhasil di load

  // kembalikan hasil gambar yang akan kita pilih
  return currentValue;
}
