import React, { useEffect, useState } from "react";
import Player from "../../components/modules/Player";
import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";
import classes from "../../style/PalyListBlock.module.css";

const MainLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={scrolled ? classes.container_1 : classes.container_1}>
      <div className={classes.leftPart}>
        <Sidebar />
      </div>
      <div className={classes.rightPart}>
        <div className={classes.navbar_line}>
          <Search />
        </div>
        <div className={classes.route_block}>{children}</div>
      </div>

      <div className={classes.player_block}>
        <Player />
      </div>
    </div>
  );
};

export default MainLayout;
