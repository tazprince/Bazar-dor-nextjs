//deployment issue for date so i change code and create new component
"use client";

const BanglaDate = ({ className }) => {
  const banglaDate = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <span className={className}>{banglaDate}</span>;
};

export default BanglaDate;
