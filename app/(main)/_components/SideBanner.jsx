"use client";
import api from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SideBanner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    getBannerData();
  }, []);

  const getBannerData = () => {
    api.getSideBannerData().then((resp) => {
      setBannerData(resp.sideBanners);
    });
  };

  return (
    <div>
      {bannerData.map((item, index) => (
        <div key={index}>
          <Image
            src={item?.banner?.url}
            width={500}
            height={300}
            alt="banner"
            onClick={() => window.open(item?.url)}
            className="rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default SideBanner;
