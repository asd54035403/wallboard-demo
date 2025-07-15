import React from "react";
import { RiSpeakFill, RiSpeakLine } from "react-icons/ri";
import LayoutComponent from "../../components/LayoutComponent";
import "./index.scss";

const TrunkPage = () => {
  //DNIS  -> 被叫號

  //UUI -> 隨路數據 *
  // 1.來電先進 IVR 並有設定 UUI
  // 2.來電後在交換機流程中有設定 UUI)

  const mockData = [
    {
      trunkName: "TR1",
      ANI: "0912345567",
      UUI: "",
      Customer: "John Doe",
      Tag: "Null",
    },
    {
      trunkName: "TR2",
      ANI: "0912345568",
      UUI: "",
      Customer: "Jane Smith",
      Tag: "VIP",
    },
    {
      trunkName: "TR3",
      ANI: "0912345569",
      UUI: "",
      Customer: "Alice Johnson",
      Tag: "VIP",
    },
    {
      trunkName: "TR4",
      ANI: "0912345570",
      UUI: "N/A",
      Customer: "Bob Brown",
      Tag: "Normal",
    },
  ];

  return (
    <LayoutComponent title="Trunk Report">
      <div className="trunk-page">
        <div className="trunk-grid">
          {mockData.map((trunk) => (
            <div className={`trunk-card ${trunk.Tag}`} key={trunk.trunkName}>
              <h3>
                {trunk.Tag === "VIP" ? (
                  <RiSpeakFill size={24} color="#333" />
                ) : (
                  <RiSpeakLine size={24} color="#333" />
                )}
                {trunk.trunkName}
              </h3>

              <hr className="trunk-divider" />
              <p className="trunk-ANI">📞來電號碼: {trunk.ANI}</p>
              <p className="trunk-UUI">🔍隨路數據: {trunk.UUI}</p>
              <p className="trunk-Customer">👤客戶名稱: {trunk.Customer}</p>
              <p className="trunk-Tag">🏷️標籤: {trunk.Tag}</p>
            </div>
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
};

export default TrunkPage;
