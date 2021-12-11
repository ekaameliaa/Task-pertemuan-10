/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  return new Promise(function () {
    setTimeout(() => {
      console.log("Download selesai");
    }, 2000);

    setTimeout(() => {
      console.log(`Hasil Download:  ${result}`);
    }, 4000);
  });
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = (callShowDownload) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = "windows-10.exe";
      callShowDownload(result);
    }, 3000);
  });
};

const main = async () => {
  console.log(await download(showDownload));
};

main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
