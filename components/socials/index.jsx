import React from "react";

export default function Socials() {
  const data = [
    {
      id: 1,
      title: "Instagram",
      url: "#",
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.22 0H12.78C15.66 0 18 2.34 18 5.22V12.78C18 14.1644 17.45 15.4922 16.4711 16.4711C15.4922 17.45 14.1644 18 12.78 18H5.22C2.34 18 0 15.66 0 12.78V5.22C0 3.83557 0.549963 2.50784 1.5289 1.5289C2.50784 0.549963 3.83557 0 5.22 0ZM5.04 1.8C4.1807 1.8 3.35659 2.14136 2.74897 2.74897C2.14136 3.35659 1.8 4.1807 1.8 5.04V12.96C1.8 14.751 3.249 16.2 5.04 16.2H12.96C13.8193 16.2 14.6434 15.8586 15.251 15.251C15.8586 14.6434 16.2 13.8193 16.2 12.96V5.04C16.2 3.249 14.751 1.8 12.96 1.8H5.04ZM13.725 3.15C14.0234 3.15 14.3095 3.26853 14.5205 3.4795C14.7315 3.69048 14.85 3.97663 14.85 4.275C14.85 4.57337 14.7315 4.85952 14.5205 5.07049C14.3095 5.28147 14.0234 5.4 13.725 5.4C13.4266 5.4 13.1405 5.28147 12.9295 5.07049C12.7185 4.85952 12.6 4.57337 12.6 4.275C12.6 3.97663 12.7185 3.69048 12.9295 3.4795C13.1405 3.26853 13.4266 3.15 13.725 3.15ZM9 4.5C10.1935 4.5 11.3381 4.97411 12.182 5.81802C13.0259 6.66193 13.5 7.80653 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5C7.80653 13.5 6.66193 13.0259 5.81802 12.182C4.97411 11.3381 4.5 10.1935 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80653 4.5 9 4.5ZM9 6.3C8.28392 6.3 7.59716 6.58446 7.09081 7.09081C6.58446 7.59716 6.3 8.28392 6.3 9C6.3 9.71608 6.58446 10.4028 7.09081 10.9092C7.59716 11.4155 8.28392 11.7 9 11.7C9.71608 11.7 10.4028 11.4155 10.9092 10.9092C11.4155 10.4028 11.7 9.71608 11.7 9C11.7 8.28392 11.4155 7.59716 10.9092 7.09081C10.4028 6.58446 9.71608 6.3 9 6.3Z" fill="white"/>
      </svg>
      `,
    },
    {
      id: 2,
      title: "Telegram",
      url: "#",
      icon: `<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.68472 9.23927L6.41874 13.152C6.80956 13.152 6.98224 12.9765 7.20039 12.7682L9.07812 10.9755L12.9846 13.8093C13.7035 14.1988 14.2224 13.9971 14.4015 13.1539L16.966 1.28837C17.2285 0.254808 16.5647 -0.213967 15.8769 0.0926148L0.818405 5.79381C-0.209482 6.19862 -0.203489 6.76168 0.631043 7.01257L4.4954 8.19682L13.4418 2.655C13.8641 2.40354 14.2518 2.53873 13.9336 2.81597L6.6845 9.23911L6.68472 9.23927Z" fill="white"/>
      </svg>
      `,
    },
    {
      id: 3,
      title: "Facebook",
      url: "#",
      icon: `<svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.36555 18.0557V9.05461H7.73226L8.0459 5.9528H5.36555L5.36957 4.40031C5.36957 3.59131 5.44279 3.15783 6.54957 3.15783H8.02914V0.0556641H5.6621C2.8189 0.0556641 1.81817 1.56038 1.81817 4.09083V5.95315H0.0458984V9.05496H1.81817V18.0557H5.36555Z" fill="#DADADA"/>
      </svg>
      `,
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {data?.map((item, index) => {
        return (
          <a
            href={item?.url}
            target="_blank"
            key={index}
            title={item?.title}
            className="w-10 h-10 rounded-md border border-white flex items-center justify-center"
          >
            <span dangerouslySetInnerHTML={{ __html: item?.icon }} />
          </a>
        );
      })}
    </div>
  );
}
