"use client";

// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";
import { useState } from "react";
import type { NextPage } from "next";

// import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();
  const [inputText, setInputText] = useState("");

  //   const youtubeVideos = [
  //     {
  //       url: "https://www.youtube.com/watch?v=30pa790tIIA&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=2",
  //       title: "WTF is ETH.BUILD?",
  //     },
  //     {
  //       url: "https://www.youtube.com/watch?v=QJ010l-pBpE&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=3",
  //       title: "Hash Function - ETH.BUILD",
  //     },
  //     {
  //       url: "https://www.youtube.com/watch?v=9LtBDy67Tho&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=4",
  //       title: "Key Pair - ETH.BUILD",
  //     },
  //     {
  //       url: "https://www.youtube.com/watch?v=mhwSGYRmkEU&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=4&pp=iAQB",
  //       title: "Sending and Receiving Value",
  //     },
  //     {
  //       url: "https://www.youtube.com/watch?v=-6aYBdnJ-nM&list=PLJz1HruEnenCXH7KW7wBCEBnBLOVkiqIi&index=12",
  //       title: "Smart Contracts - ETH.BUILD",
  //     },
  //   ];

  //   // Whitepaper as raw markdown string
  //   const whitePaperMarkdown = `## ETH GuangZhou 对于大湾区的 Buidlers 的意义

  // 在地缘学上，广州有非常重要的地位，是**「粤港澳大湾区」**的核心城市之一，即连接香港，又联通深圳。

  // 同时，有多所高校坐落在广州，例如中山大学、华南理工大学、华南农业大学、广州大学等等等等。

  // 广州、深圳、香港高校都有大量 Web3 爱好者，也有区块链协会，但是 **目前较为零散，尚未被有效的组织在一起**。

  // 因此，建立 ETH GuangZhou，将组织的核心设定为**「用户导向的有效生产」**，对于广州本地的甚至整个大湾区的 ETH Buidlers 的学习与交流，都意义重大。

  // ## ETH GuangZhou 对于 ETH 的意义

  // 虽然现在在中国不同的区域已经存在多个 \`ETH *\`，例如 ETH-BeiJing、ETH-HangZhou……但是，目前尚未有专注在**「用户导向的有效生产」**这个内核的 ETH 分区。

  // **什么是专注在「用户导向的有效生产」**？

  // 聚焦在 Infra 和 Geek Idea 的 Hackathon 和活动已经够多了，这些固然很好，但我们想看到的是 —— **Web3 技术是如何触达最终的 C 端用户的**。

  // 因此，让我们 Hodl ETH-GuangZhou，Hodl 基于「用户导向的有效生产」的 Workshops、Hodl 基于「用户导向的有效产品」的 Hackathon，挖掘 ETH 的全新可能 🌹🌹🌹。`;

  //   // Simple function to convert markdown to HTML
  //   const convertMarkdownToHtml = (markdown: string) => {
  //     return (
  //       markdown
  //         // Convert headers
  //         .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
  //         .replace(/^## (.*$)/gm, '<center><h2 class="text-2xl font-bold mt-6 mb-4">$1</h2></center>')
  //         // Convert bold text
  //         .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  //         // Convert code
  //         .replace(/`(.*?)`/g, '<code class="bg-gray-700 px-1 rounded">$1</code>')
  //         // Convert paragraphs
  //         .split("\n\n")
  //         .map(paragraph => {
  //           if (paragraph.startsWith("<h1") || paragraph.startsWith("<h2")) {
  //             return paragraph;
  //           }
  //           return `<p class="my-3">${paragraph}</p>`;
  //         })
  //         .join("")
  //     );
  //   };

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            {/* TODO: add the LOGO here. */}
            {/* TODO: randome emoji here. */}
            <span className="text-2xl">
              <span className="text-4xl font-bold">&lt;% DimSum Idol %&gt;</span>
            </span>
          </h1>
          {/* <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div> */}
          <p className="text-center text-lg leading-relaxed">
            构建「粤语数字人」，多个语音大模型、文本大模型等 AI 基建组合运用，
            <br></br>
            多个真实粤语 KOL 授权，
            <br></br>
            落地、落地、还是落地。
            <br></br>
            👇 Example 👇
            <br></br>
            <video className="w-full max-w-md mx-auto mt-4 rounded-lg shadow-lg" controls preload="metadata">
              <source src="https://dimsum-utils.oss-cn-guangzhou.aliyuncs.com/dimsum_szr.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
          <div className="flex justify-center mt-8">
            {/* Use DaisyUI modal-toggle pattern for the contact modal */}
            <label
              htmlFor="contact-modal"
              className="btn btn-ghost bg-white text-black hover:bg-gray-100 btn-lg cursor-pointer"
            >
              Contact Us
            </label>
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <label htmlFor="contact-modal" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <label htmlFor="contact-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
                  ✕
                </label>
                <h3 className="text-xl font-bold mb-4 text-center">Contact Info</h3>
                <a
                  href="https://aidimsum.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold mb-4 text-center block hover:underline"
                >
                  👉 AI Dim Sum Lab 👈
                </a>
                <div className="space-y-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="mb-1">微信 Wechat</span>
                    <img
                      src="https://arweave.net/GAawdzc5Fn8BKaqqfJQDCeeYuhAe2ZMBMeG14sN_bq4"
                      alt="WeChat QR"
                      className="h-36 w-36 rounded-lg border"
                    />
                  </div>
                </div>
              </label>
            </label>
          </div>
        </div>
        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <h2 className="text-4xl font-bold mb-6 text-center">Generator 生产器</h2>
          <p className="text-center text-lg leading-relaxed">逐步生成你的数字人视频！</p>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 0: Text Generator */}
            <div className="bg-base-100 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Step 0: Text Generator 🔊</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Input Text (Chinese):</label>
                  <textarea
                    className="textarea textarea-bordered w-full h-24 rounded-none"
                    placeholder="输入普通话文本..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary">Generate Cantonese Text</button>
              </div>
            </div>
            <p className="text-center text-lg">👇👇👇</p>

            {/* Step 1: Sound Generator */}
            <div className="bg-base-100 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Step 1: Sound Generator 🔊</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Input Text (Cantonese):</label>
                  <textarea
                    className="textarea textarea-bordered w-full h-24 rounded-none"
                    placeholder="输入粤语文本..."
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Or Upload Audio:</label>
                  <input type="file" accept="audio/*" className="file-input file-input-bordered file-input-sm" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Select Avatar/Character:</label>
                  <select className="select select-bordered w-64">
                    <option>Choose an avatar...</option>
                    <option>男声 —— 媒体人</option>
                    <option>女声 —— 粤式小彤</option>
                    <option>讲古男声—— 張悦楷</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://huggingface.co/spaces/Dylan916/zoengjyutgaai_tts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">Generate Sound 🎵</button>
                </a>
              </div>
            </div>

            <p className="text-center text-lg">👇👇👇</p>

            {/* Step 2: Video Generator */}
            <div className="bg-base-100 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Step 2: Video Generator 🎥</h3>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                <div className="w-64">
                  <label className="block text-sm font-medium mb-2">Select Avatar/Character:</label>
                  <select className="select select-bordered w-64">
                    <option>Choose an avatar...</option>
                    <option>男仔 —— 媒体人</option>
                    <option>女仔 —— 粤式小彤</option>
                    <option>动物 —— 猫🐱</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Upload Audio:</label>
                  <input type="file" accept="audio/*" className="file-input file-input-bordered file-input-sm" />
                </div>
                                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium">Upload Subtitle:</label>
                  <input type="file" accept="*" className="file-input file-input-bordered file-input-sm" />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                  <button className="btn btn-secondary">Generate Final Video 🎬</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="px-5 my-16">
          <h2 className="text-center mb-8">
            <span className="block text-4xl font-bold">Whitepaper</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-xl">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(whitePaperMarkdown) }}
            />
          </div>
        </div> */}

        {/* <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Worksh0ps</span>
          </h2>
          <br></br>
          <VideoSlideshow videos={youtubeVideos} />
        </div> */}

        {/* <div className="px-5">
          <br></br>
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Relāted Pr0jects</span>
          </h2>
          <br></br>
          <p>0x0000000000000000000000000000000000000000</p>
        </div> */}

        {/* <div className="px-5">
          <br></br>
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Enterta1nm3nt</span>
          </h2>
          <br></br>
          <p>0x0000000000000000000000000000000000000000</p>
        </div> */}

        {/* <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <h2 className="text-center">
            <span className="block text-4xl font-bold">Sponsors</span>
          </h2>
          <div className="flex justify-center items-center gap-8 my-8">
            <a href="https://noncegeek.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/P1WVXIQB8Q6jlAAI5yejI40ujdn5_bzJoA-M5hpyCb8"
                alt="NonceGeekDAO"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            
          </div>

          <h2 className="text-center">
            <span className="block text-4xl font-bold">Partners</span>
          </h2>
          <div className="flex justify-center items-center gap-8 my-8">
            <a href="https://noncegeek.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/P1WVXIQB8Q6jlAAI5yejI40ujdn5_bzJoA-M5hpyCb8"
                alt="NonceGeekDAO"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            <a href="https://x.com/thuba_dao" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/RYn5bp_mLHQSe4ErEsxt8z2JEThrUR4PtaQHEvEORNA"
                alt="ThubaDAO"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            <a href="https://x.com/opencas_ucas" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/hyK2rcOwD5UV7ECdbucbiZ3VJQqHOC4DUxG5qkGKtT4"
                alt="OpenCAS"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            <a href="https://x.com/0xpantarhei" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/UsQncdEWCmOnDAA_1IANkW1wHFboJMXHjL5A35axGkM"
                alt="0xPantarhei"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            <a href="https://hkba.club/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/zukl_MwwJPCbYWI77qBiyof62BUfGSD05JS71pooUWE"
                alt="HKBA"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
            <a href="https://x.com/scutba2025" target="_blank" rel="noopener noreferrer">
              <img
                src="https://arweave.net/53tMQCVjtXHarYlb_AhUK1VBJdJGDLSGElHMS9V20tY"
                alt="SCUTBA"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

// const VideoSlideshow = ({ videos }: { videos: { url: string; title: string }[] }) => {
//   const [current, setCurrent] = useState(0);
//   const videosPerPage = 3;
//   const totalPages = Math.ceil(videos.length / videosPerPage);
//   const currentPage = Math.floor(current / videosPerPage);

//   const prev = () => {
//     setCurrent(() => {
//       const newPage = (currentPage - 1 + totalPages) % totalPages;
//       return newPage * videosPerPage;
//     });
//   };
//   const next = () => {
//     setCurrent(() => {
//       const newPage = (currentPage + 1) % totalPages;
//       return newPage * videosPerPage;
//     });
//   };

//   // Get the videos to display on the current page
//   const visibleVideos = videos.slice(currentPage * videosPerPage, currentPage * videosPerPage + videosPerPage);

//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex items-center gap-4">
//         <button onClick={prev} className="btn btn-circle btn-outline">
//           ‹
//         </button>
//         <div className="flex gap-6">
//           {visibleVideos.map((video, idx) => (
//             <a
//               key={idx}
//               href={video.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block w-80 bg-base-100 rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
//             >
//               <div className="aspect-video bg-black rounded-lg mb-2 flex items-center justify-center">
//                 <img
//                   src={`https://img.youtube.com/vi/${video.url.split("v=")[1].split("&")[0]}/hqdefault.jpg`}
//                   alt={video.title}
//                   className="rounded-lg object-cover w-full h-full"
//                 />
//               </div>
//               <div className="text-lg font-semibold text-center">{video.title}</div>
//             </a>
//           ))}
//         </div>
//         <button onClick={next} className="btn btn-circle btn-outline">
//           ›
//         </button>
//       </div>
//       <div className="flex gap-2 mt-4">
//         {Array.from({ length: totalPages }).map((_, idx) => (
//           <button
//             key={idx}
//             className={`w-3 h-3 rounded-full ${idx === currentPage ? "bg-gray-300" : "bg-gray-500"}`}
//             onClick={() => setCurrent(idx * videosPerPage)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Home;
