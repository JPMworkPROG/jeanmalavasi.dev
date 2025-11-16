import './ProfileFrame.css';

type ProfileFrameProps = {
  src: string;
  alt: string;
};

export function ProfileFrame({ src, alt }: ProfileFrameProps) {
  return (
    <div className="profile-frame">
      <img src={src} alt={alt} loading="lazy" />
      <div className="profile-frame__veil" aria-hidden />
    </div>
  );
}