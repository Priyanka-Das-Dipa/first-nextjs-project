import Image from "next/image";

export const metadata = {
  title: "Image Page",
  description: "This is image page.",
};
const ImagePage = () => {
  return (
    <div>
      <h2>Image Component</h2>
      <Image
        src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        width={500}
        height={750}
        alt="Next Image"
      ></Image>
    </div>
  );
};

export default ImagePage;
