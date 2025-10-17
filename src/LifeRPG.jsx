
import React, { useState } from "react";

const LifeRPG = () => {
  const [equippedWeapon, setEquippedWeapon] = useState(false);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px", background: "#f5f5f5", height: "100vh" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img src="/knight.png" alt="silhouette" width="300" />
        {equippedWeapon && (
          <img
            src="/weapon_common.png"
            alt="weapon"
            style={{
              position: "absolute",
              top: "150px",
              left: "120px",
              width: "50px",
            }}
          />
        )}
      </div>
      <div>
        <button onClick={() => setEquippedWeapon(!equippedWeapon)}>Equip Weapon</button>
      </div>
    </div>
  );
};

export default LifeRPG;
