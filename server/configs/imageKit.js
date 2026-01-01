import ImageKit from "@imagekit/nodejs";

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVTE_KEY,
});

export default imageKit;
