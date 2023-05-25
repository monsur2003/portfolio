import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
   BsBriefcase,
   BsChatSquare,
   BsClipboard2Data,
   BsFillChatSquareDotsFill,
   IconName,
} from "react-icons/bs";
import { Link } from "react-scroll";
const Nav = () => {
   return (
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
         <div className="container mx-auto">
            <div>
               <Link>
                  <BiHomeAlt></BiHomeAlt>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Nav;
