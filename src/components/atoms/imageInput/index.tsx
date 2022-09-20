import { FileBase64 } from "../../../utils";
import Iconify from "../Iconify";

export default function ImageInput(props: {
  isMulti?: boolean;
  setImages: (data: any) => void;
  images: any;
}) {
  const handleFile = (file: any) => {
    if (props.isMulti) {
      const imgs = props.images;
      imgs.push(file[0].base64);
      props.setImages(imgs);
    } else {
      props.setImages(file.base64);
    }
  };

  return (
    <>
      <FileBase64
        files={(f) => handleFile(f)}
        id="uploadImg"
        multiple={props.isMulti || false}
      />
      <div
        onClick={() => {
          const upload = document.getElementById(
            "uploadImg"
          ) as HTMLInputElement;
          upload.click();
        }}
        className="flex items-center cursor-pointer w-fit p-2"
      >
        <Iconify icon="bxs:image-add" color="blue" size="5xl" />
        <p className="font-semibold text-blue-800">Upload Foto</p>
      </div>
      {/* <div className="flex items-center flex-wrap">s
        {props.images.map((image: any, i: number) => (
          <div
            key={i}
            className="rounded border m-1 border-gray-300 hover:shadow w-48"
          >
            // eslint-disable-next-line @next/next/no-img-element 
            <img
              key={i}
              src={image.base64}
              alt={image.name}
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </div> */}
    </>
  );
}
