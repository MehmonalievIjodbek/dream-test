// //@ts-nocheck
// import { Drawer, Modal } from "antd";
// import Link from "next/link";
// import React from "react";
// import CloseIcon from "../../common/Icons/close-icon";
// import { menu } from "../../data/navigate";
// interface MobileMenuType {
//   handleClose: () => void;
//   open: boolean;
//   setOpen: (setOpen: boolean) => void;
// }

// const MobileMenu: React.FC<MobileMenuType> = ({ handleClose, open }) => {
//   const title = (
//     <div className="flex justify-between">
//       <img
//         src="/assets/images/logo.png"
//         alt="logo of website"
//         style={{ width: "200px" }}
//       />
//       <button onClick={handleClose}>
//         <CloseIcon color="#fff" width={24} />
//       </button>
//     </div>
//   );

//   const drawerBodyStyle = {
//     background: "#1A1A1A",
//   };

//   return (
//     <Drawer
//       title={title}
//       closable={false}
//       placement={"right"}
//       open={open}
//       onClose={handleClose}
//       bodyStyle={drawerBodyStyle}
//       headerStyle={drawerBodyStyle}
//     >
//       <div>
//         <div className="flex flex-col">
//           {menu.map((item) => (
//             <Link
//               href={item.link}
//               className="text-white text-lg px-4 py-4 uppercase"
//               key={item.link}
//               onClick={handleClose}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </Drawer>
//   );
// };

// export default MobileMenu;
