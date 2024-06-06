import { QRCode } from "react-qrcode-logo";
import { serverUrl } from "@/helpers/Constants";
import { HuePicker, TwitterPicker } from "react-color";
import React, { useRef, useState } from "react";
import FileUpload from "./fileUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
const QrDialog = ({ urlResponse }) => {
  const [qrProps, setQrProps] = useState({
    color: "#158BCC",
    qrStyle: "fluid",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef();

  const handleDownload = () => {
    ref.current?.download();
  };

  const handleCopy = async () => {};

  return (
    <div className="bg-transparent flex flex-col items-center justify-center gap-7 p-20 md:p-10 py-15">
      <div className="flex  justify-center items-center w-[25vw]">
        <QRCode
          ref={ref}
          size={200}
          eyeRadius={10}
          value={`${serverUrl}/${urlResponse ? urlResponse.shortUrl : "#"}`}
          fgColor="#158BCC"
          qrStyle="fluid"
          logoImage={selectedImage && URL.createObjectURL(selectedImage)}
        />
      </div>

      <div className="flex gap-5  justify-center items-center w-[25vw]">
        <Button className="dark" onClick={handleDownload}>
          Download
        </Button>
        <Button className="dark px-8" onClick={handleCopy}>
          Copy
        </Button>
      </div>

      {/* 
      <TwitterPicker
        width={250}
        color={qrProps.color}
        onChange={(color) =>
          setQrProps((prevState) => ({ ...prevState, color: color.hex }))
        }
      />
      <FileUpload setSelectedImage={setSelectedImage} />

      <Select
        onValueChange={(value) =>
          setQrProps((prevState) => ({ ...prevState, qrStyle: value }))
        }
        value={qrProps.qrStyle}
      >
        <SelectTrigger className="w-[180px] mx-auto text-white">
          <SelectValue placeholder="Style" />
        </SelectTrigger>
        <SelectContent className="dark">
          <SelectItem value="squares">Squares</SelectItem>
          <SelectItem value="dots">Dots</SelectItem>
          <SelectItem value="fluid">Fluid</SelectItem>
        </SelectContent>
      </Select> */}
    </div>
  );
};

export default QrDialog;
