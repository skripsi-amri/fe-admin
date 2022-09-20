export default function FileBase64(props: {
  multiple: boolean;
  id: string;
  files: (all: any) => void;
}) {
  const handleChange = (e: any) => {
    // ambil file yang diupload
    let files = e.target.files;

    let allFile: {
      name: any;
      type: any;
      base64: string | ArrayBuffer | null;
      size: string;
      file: any;
    }[] = [];

    // looping file yang diupload untuk di proses menjadi base64
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + " kB",
          base64: reader.result,
          file: file,
        };

        // tambahkan semua file ke state
        allFile.push(fileInfo);
        props.files(allFile);
      };
    }
  };

  return (
    <>
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        onChange={handleChange}
        multiple={props.multiple}
      />
    </>
  );
}
