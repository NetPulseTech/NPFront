import SvgIconCommon from "@/Common/SvgIconCommon";
const TeamSocial: React.FC = () => {
  const names = [
    { link: "https://www.facebook.com/", name: "facebook" },
    { link: "https://twitter.com/", name: "twitter" },
    { link: "https://www.instagram.com/", name: "instagram" },
  ];
  return (
    <div className="team-social">
      {names.map((data, index) => (
        <a href={data.link} target="_blank" className="social-box" key={index}>
          <SvgIconCommon iconName={data.name} />
        </a>
      ))}
    </div>
  );
};

export default TeamSocial;
